# PRD — marmar_arte (сайт художницы)

## Original problem statement
Художница пишет картины на заказ (Instagram: marmar_arte). Нужен милый сайт по примеру dariiteplo.tilda.ws. Услуги в злотых и евро (50×50 — 900 зл, плюс другие форматы), разбивка по жанрам (пейзажи, мифические сюжеты и т.д.), ссылка-переход в Instagram для связи, секция «кто я».

## Stack / Architecture
- Frontend: React (CRA + craco), Tailwind, framer-motion, lucide-react, sonner. Single-page, RU.
- Backend: FastAPI + MongoDB (motor). Routes under /api.
- Design: soft pastel (clay #D4A396, sage, blush). Fonts: Cormorant Garamond + Nunito + Caveat.

## User persona
Женщины, которые хотят заказать индивидуальную картину акрилом в подарок или для интерьера.

## Core requirements (static)
- Hero + CTA «Заказать картину» + Instagram.
- Секция «Обо мне» (кто я).
- Этапы сотрудничества (материалы + время + цифровой эскиз).
- Цены: размеры в zł и € (50×50 = 900 zł featured), жанры.
- Галерея с фильтром по жанрам.
- Отзывы.
- Форма заявки → MongoDB (+ email на golota739278@gmail.com при наличии RESEND_API_KEY).

## Implemented (2026-06-19)
- Полный одностраничный сайт со всеми секциями. Backend /api/contact (POST/GET). Tested: backend 7/7, frontend 26/26.
- Email-уведомления реализованы через Resend, НО НЕ АКТИВНЫ (RESEND_API_KEY пуст) — заявки сохраняются только в БД.

## Backlog
- P0: Подключить RESEND_API_KEY для доставки заявок на почту.
- P1: Заменить стоковые фото на реальные работы из Instagram (загрузка через object storage / админка).
- P2: Карусель отзывов, страница отдельной картины, мультиязычность (PL/RU).

## Next tasks
1. Получить Resend API key от пользователя и включить email.
2. Загрузить реальные фото работ.
