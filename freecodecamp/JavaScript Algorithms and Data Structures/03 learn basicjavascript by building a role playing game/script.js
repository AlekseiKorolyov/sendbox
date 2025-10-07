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

function goStore() {
    console.log("Going to store.");
}

function goCave() {
    console.log("Going to cave.");
}

function fightDragon() {
    console.log("Fighting dragon.");
}







/*
Шаг 36

button1 представляет собой ваш первый элемент «кнопка». У этих элементов есть специальное свойство onclick, которое можно использовать для определения действий при нажатии на эту кнопку. В JavaScript есть несколько способов доступа к свойствам. Первый — с помощью точечной нотации. Вот пример использования точечной нотации для присвоения свойству onclick кнопки ссылки на функцию.
Пример кода

button.onclick = myFunction;

В этом примере button — это элемент «кнопка», а myFunction — ссылка на функцию. При нажатии на кнопку будет вызвана функция myFunction. Используйте точечную нотацию, чтобы присвоить свойству onclick элемента button1 ссылку на функцию goStore. Обратите внимание, что button1 уже объявлен, поэтому вам не нужно использовать let или const.

 */