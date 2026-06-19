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
  { id: "floral", label: "Цветы и натюрморты" },
  { id: "portrait", label: "Портреты" },
];

export const gallery = [
  { id: 1, cat: "landscape", title: "Цветущее поле", img: "https://images.unsplash.com/photo-1602964547811-466ac79138e8?crop=entropy&cs=srgb&fm=jpg&q=85&w=900" },
  { id: 2, cat: "landscape", title: "Закат над озером", img: "https://images.unsplash.com/photo-1751194109279-6a8a8bb25e7f?crop=entropy&cs=srgb&fm=jpg&q=85&w=900" },
  { id: 3, cat: "landscape", title: "Тихая река", img: "https://images.unsplash.com/photo-1697829713122-e47ecf517aa7?crop=entropy&cs=srgb&fm=jpg&q=85&w=900" },
  { id: 4, cat: "mythical", title: "Душа весны", img: "https://images.unsplash.com/photo-1598495494482-172d89ff078c?crop=entropy&cs=srgb&fm=jpg&q=85&w=900" },
  { id: 5, cat: "mythical", title: "Хранительница", img: "https://images.pexels.com/photos/38116270/pexels-photo-38116270.jpeg?auto=compress&cs=tinysrgb&w=900" },
  { id: 6, cat: "floral", title: "Букет в вазе", img: "https://images.unsplash.com/photo-1700212965142-f5069c18ca0a?crop=entropy&cs=srgb&fm=jpg&q=85&w=900" },
  { id: 7, cat: "floral", title: "Полевые цветы", img: "https://images.unsplash.com/photo-1700212964071-7cd2c1ec96dd?crop=entropy&cs=srgb&fm=jpg&q=85&w=900" },
  { id: 8, cat: "floral", title: "Натюрморт с пионами", img: "https://images.unsplash.com/photo-1748285279142-75e4d7a99234?crop=entropy&cs=srgb&fm=jpg&q=85&w=900" },
  { id: 9, cat: "portrait", title: "Тёплый взгляд", img: "https://images.pexels.com/photos/10480322/pexels-photo-10480322.jpeg?auto=compress&cs=tinysrgb&w=900" },
  { id: 10, cat: "landscape", title: "Красные скалы", img: "https://images.unsplash.com/photo-1774969724772-b8537fafcf6e?crop=entropy&cs=srgb&fm=jpg&q=85&w=900" },
];

export const reviews = [
  { name: "Анна", text: "Картина превзошла все ожидания! Тёплая, живая, именно то настроение, о котором я мечтала. Спасибо за эскиз заранее — было видно результат ещё до начала работы.", city: "Краков" },
  { name: "Marta", text: "Zamówiłam pejzaż 50×50 i jestem zachwycona. Kolory są cudowne, a obraz wygląda jeszcze lepiej na żywo. Polecam z całego serca!", city: "Warszawa" },
  { name: "Ольга", text: "Заказывала мифический сюжет в подарок сестре. Получилось волшебно и очень личностно. Работа с художницей — сплошное удовольствие.", city: "Вроцлав" },
  { name: "Karolina", text: "Profesjonalnie, ciepło i z sercem. Obraz dotarł świetnie zapakowany. Na pewno wrócę po kolejny!", city: "Gdańsk" },
];
