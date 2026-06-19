from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import asyncio
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

NOTIFY_EMAIL = os.environ.get('NOTIFY_EMAIL', 'golota739278@gmail.com')
RESEND_API_KEY = os.environ.get('RESEND_API_KEY', '')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')


class ContactCreate(BaseModel):
    name: str
    contact: str
    size: Optional[str] = ""
    message: str = ""


class Contact(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    contact: str
    size: Optional[str] = ""
    message: str = ""
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


def build_email_html(c: Contact) -> str:
    return f"""
    <div style='font-family: Arial, sans-serif; color:#2C2A29;'>
      <h2 style='color:#D4A396;'>Новая заявка с сайта marmar_arte 🎨</h2>
      <table style='border-collapse:collapse;'>
        <tr><td style='padding:6px 12px;'><b>Имя:</b></td><td style='padding:6px 12px;'>{c.name}</td></tr>
        <tr><td style='padding:6px 12px;'><b>Контакт:</b></td><td style='padding:6px 12px;'>{c.contact}</td></tr>
        <tr><td style='padding:6px 12px;'><b>Размер/формат:</b></td><td style='padding:6px 12px;'>{c.size or '—'}</td></tr>
        <tr><td style='padding:6px 12px;'><b>Пожелания:</b></td><td style='padding:6px 12px;'>{c.message or '—'}</td></tr>
      </table>
      <p style='color:#7A736E;font-size:13px;'>Отправлено: {c.created_at.strftime('%d.%m.%Y %H:%M')} UTC</p>
    </div>"""


async def send_notification(c: Contact):
    if not RESEND_API_KEY:
        logger.info("RESEND_API_KEY not set — skipping email, submission stored in DB only.")
        return
    try:
        import resend
        resend.api_key = RESEND_API_KEY
        params = {
            "from": SENDER_EMAIL,
            "to": [NOTIFY_EMAIL],
            "subject": f"Новая заявка от {c.name} — marmar_arte",
            "html": build_email_html(c),
            "reply_to": c.contact if "@" in c.contact else SENDER_EMAIL,
        }
        await asyncio.to_thread(resend.Emails.send, params)
        logger.info("Notification email sent.")
    except Exception as e:
        logger.error(f"Failed to send email: {e}")


@api_router.get("/")
async def root():
    return {"message": "marmar_arte API"}


@api_router.post("/contact", response_model=Contact)
async def create_contact(payload: ContactCreate):
    if not payload.name.strip() or not payload.contact.strip():
        raise HTTPException(status_code=400, detail="Имя и контакт обязательны")
    contact = Contact(**payload.model_dump())
    doc = contact.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.contacts.insert_one(doc)
    await send_notification(contact)
    return contact


@api_router.get("/contact", response_model=List[Contact])
async def list_contacts():
    items = await db.contacts.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    for it in items:
        if isinstance(it.get('created_at'), str):
            it['created_at'] = datetime.fromisoformat(it['created_at'])
    return items


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
