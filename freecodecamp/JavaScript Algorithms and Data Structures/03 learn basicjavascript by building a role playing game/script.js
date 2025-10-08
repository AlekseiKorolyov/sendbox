let xp = 0;
let health = 100;
let gold = 50;
let currentWeaponIndex = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function goStore() {
    button1.innerText = "Buy 10 health (10 gold)";
    button2.innerText = "Buy weapon (30 gold)";
    button3.innerText = "Go to town square";
    button1.onclick = buyHealth;
    button2.onclick = buyWeapon;
    button3.onclick = goTown;
    text.innerText = "You enter the store."
}

function goCave() {
    console.log("Going to cave.");
}

function fightDragon() {
    console.log("Fighting dragon.");
}







/*
36      button.onclick = myFunction;
38      Свойство innerText



Шаг 36

button1 представляет собой ваш первый элемент «кнопка». У этих элементов есть специальное свойство onclick, которое можно использовать для определения действий при нажатии на эту кнопку. В JavaScript есть несколько способов доступа к свойствам. Первый — с помощью точечной нотации. Вот пример использования точечной нотации для присвоения свойству onclick кнопки ссылки на функцию.
Пример кода

button.onclick = myFunction;

В этом примере button — это элемент «кнопка», а myFunction — ссылка на функцию. При нажатии на кнопку будет вызвана функция myFunction. Используйте точечную нотацию, чтобы присвоить свойству onclick элемента button1 ссылку на функцию goStore. Обратите внимание, что button1 уже объявлен, поэтому вам не нужно использовать let или const.



Шаг 38

 Свойство innerText управляет текстом, отображаемым в HTML-элементе. Например:
 Пример кода

 <p id="info">Демо-контент</p>

 Пример кода

 const info = document.querySelector("#info");
 info.innerText = "Hello World";

 В этом примере текст элемента p изменится с "Демо-контент" на "Hello World". Когда игрок нажимает кнопку "Перейти в магазин", нужно изменить кнопки и текст. Удалите код внутри функции goStore и добавьте строку, которая обновляет текст button1 на "Купить 10 здоровья (10 золота)".


 */