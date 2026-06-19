export const INSTAGRAM_URL = "https://www.instagram.com/marmar_arte";
export const EUR_RATE = 4.3; // 1 EUR ≈ 4.3 PLN

export const eur = (pln) => Math.round(pln / EUR_RATE);

export const prices = [
  { size: "20×20 см", pln: 350, note: "Миниатюра, идеальный подарок" },
  { size: "30×30 см", pln: 550, note: "Камерный формат" },
  { size: "30×40 см", pln: 650, note: "Уютно для полки" },
  { size: "40×50 см", pln: 750, note: "Популярный размер" },
  { size: "50×50 см", pln: 900, note: "Хит — акцент в интерьере", featured: true },
  { size: "50×70 см", pln: 1200, note: "Выразительная работа" },
  { size: "70×70 см", pln: 1450, note: "Большое квадратное полотно" },
  { size: "60×80 см", pln: 1500, note: "Эффектно над диваном" },
  { size: "80×100 см", pln: 2000, note: "Крупная работа" },
  { size: "100×100 см", pln: 2500, note: "Центр композиции в зале" },
];

export const stages = [
  {
    n: "01",
    title: "Знакомство и идея",
    text: "Вы пишете мне в Instagram или через форму. Обсуждаем сюжет, размер, цвета и настроение будущей картины.",
  },
  {
    n: "02",
    title: "Цифровой эскиз",
    text: "Я создаю диджитал-эскиз и показываю его вам до начала работы. Вносим правки, пока всё не станет идеальным.",
  },
  {
    n: "03",
    title: "Материалы",
    text: "Работаю акрилом на холсте — качественные краски и холст входят в стоимость и служат вам десятилетиями.",
  },
  {
    n: "04",
    title: "Работа художника",
    text: "Создаю вашу картину вручную с любовью. В цену входит моё время, опыт и забота о каждой детали.",
  },
];

export const categories = [
  { id: "all", label: "Все работы" },
  { id: "landscape", label: "Пейзажи" },
  { id: "mythical", label: "Мифические сюжеты" },
  { id: "portrait", label: "Портреты" },
];

const ASSET = "https://customer-assets.emergentagent.com/job_marmar-gallery/artifacts";

export const gallery = [
  { id: 1, cat: "portrait", title: "Sex and the big city", img: `${ASSET}/wre4dgdo_IMG_0426.png` },
  { id: 2, cat: "mythical", title: "Darkness", img: `${ASSET}/n8zm4v5j_IMG_0931.jpeg` },
  { id: 3, cat: "mythical", title: "Rituals", img: `${ASSET}/0d9sceoi_IMG_0943.jpeg` },
  { id: 4, cat: "landscape", title: "Souls of the panel blocks", img: `${ASSET}/rdvsakmq_IMG_0954.jpeg` },
  { id: 5, cat: "landscape", title: "Gardens of Eden", img: `${ASSET}/jle2qhrx_IMG_3135.jpeg` },
  { id: 6, cat: "mythical", title: "Angel or Evil", img: `${ASSET}/n99ot1pj_Untitled72_20260412145833.jpeg` },
  { id: 7, cat: "portrait", title: "Love", img: `${ASSET}/sjvxpi20_IMG_0959.jpeg` },
  { id: 8, cat: "portrait", title: "Feelings", img: `${ASSET}/tuivfrsc_Untitled74_20260412124446.jpeg` },
  { id: 9, cat: "mythical", title: "Cosmos of subconscious", img: `${ASSET}/1fyhkkqb_Untitled73_20260412124425.jpeg` },
];

export const reviews = [
  { name: "Анна", text: "Картина превзошла все ожидания! Тёплая, живая, именно то настроение, о котором я мечтала. Спасибо за эскиз заранее — было видно результат ещё до начала работы.", city: "Краков" },
  { name: "Marta", text: "Zamówiłam pejzaż 50×50 i jestem zachwycona. Kolory są cudowne, a obraz wygląda jeszcze lepiej na żywo. Polecam z całego serca!", city: "Warszawa" },
  { name: "Ольга", text: "Заказывала мифический сюжет в подарок сестре. Получилось волшебно и очень личностно. Работа с художницей — сплошное удовольствие.", city: "Вроцлав" },
  { name: "Karolina", text: "Profesjonalnie, ciepło i z sercem. Obraz dotarł świetnie zapakowany. Na pewno wrócę po kolejny!", city: "Gdańsk" },
];
