"""Backend tests for marmar_arte contact API."""
import os
import uuid
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://marmar-gallery.preview.emergentagent.com").rstrip("/")
# Prefer frontend env var for the public URL used by browser; allow override
try:
    with open("/app/frontend/.env") as f:
        for line in f:
            if line.startswith("REACT_APP_BACKEND_URL="):
                BASE_URL = line.strip().split("=", 1)[1].strip().strip('"').rstrip("/")
                break
except Exception:
    pass


@pytest.fixture(scope="session")
def api_client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# --- Root health ---
def test_root(api_client):
    r = api_client.get(f"{BASE_URL}/api/")
    assert r.status_code == 200
    data = r.json()
    assert data.get("message") == "marmar_arte API"


# --- POST /api/contact ---
class TestContactCreate:
    def test_create_valid(self, api_client):
        unique = f"TEST_{uuid.uuid4().hex[:8]}"
        payload = {
            "name": unique,
            "contact": f"{unique}@example.com",
            "size": "50×50 см",
            "message": "Pytest test submission",
        }
        r = api_client.post(f"{BASE_URL}/api/contact", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["name"] == payload["name"]
        assert data["contact"] == payload["contact"]
        assert data["size"] == payload["size"]
        assert data["message"] == payload["message"]
        assert isinstance(data.get("id"), str) and len(data["id"]) > 0
        assert "created_at" in data
        # store id on class for next test
        TestContactCreate.created_name = unique
        TestContactCreate.created_id = data["id"]

    def test_create_minimal_only_required(self, api_client):
        unique = f"TEST_{uuid.uuid4().hex[:8]}"
        r = api_client.post(f"{BASE_URL}/api/contact", json={"name": unique, "contact": "+48123456789"})
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["name"] == unique
        assert data["contact"] == "+48123456789"
        assert data["size"] == ""
        assert data["message"] == ""

    def test_create_missing_name(self, api_client):
        r = api_client.post(f"{BASE_URL}/api/contact", json={"name": "", "contact": "x@y.com"})
        assert r.status_code == 400, r.text

    def test_create_missing_contact(self, api_client):
        r = api_client.post(f"{BASE_URL}/api/contact", json={"name": "TEST_user", "contact": "   "})
        assert r.status_code == 400, r.text

    def test_create_missing_fields_422(self, api_client):
        # Pydantic should reject missing required fields entirely
        r = api_client.post(f"{BASE_URL}/api/contact", json={})
        assert r.status_code in (400, 422)


# --- GET /api/contact ---
def test_list_contacts_contains_created(api_client):
    # Create one for this test
    unique = f"TEST_{uuid.uuid4().hex[:8]}"
    r = api_client.post(f"{BASE_URL}/api/contact", json={"name": unique, "contact": f"{unique}@ex.com"})
    assert r.status_code == 200
    created_id = r.json()["id"]

    g = api_client.get(f"{BASE_URL}/api/contact")
    assert g.status_code == 200
    items = g.json()
    assert isinstance(items, list)
    ids = [i.get("id") for i in items]
    assert created_id in ids
    # Verify _id never leaked
    for i in items:
        assert "_id" not in i
