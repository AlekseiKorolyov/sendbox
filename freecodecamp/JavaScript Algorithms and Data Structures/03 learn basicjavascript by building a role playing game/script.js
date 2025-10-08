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
const locations = [];
const cat = {
    name: "Whiskers"
};
console.log(cat);

// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location) {

}

function goTown() {
    button1.innerText = "Go to store";
    button2.innerText = "Go to cave";
    button3.innerText = "Fight dragon";
    button1.onclick = goStore;
    button2.onclick = goCave;
    button3.onclick = fightDragon;
    text.innerText = "You are in the town square. You see a sign that says \"Store\".";
}

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

function buyHealth() {

}

function buyWeapon() {

}








/*
36      button.onclick = myFunction;
38      Свойство innerText
46      Повторение в коде
48      Объекты

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

Шаг 45

Вам необходимо заключить текст Store в двойные кавычки. Поскольку ваша строка уже заключена в двойные кавычки, вам нужно экранировать кавычки вокруг Store. Вы можете экранировать их с помощью обратной косой черты \. Вот пример:
Пример кода

const escapedString = "Naomi любит иногда играть в \"Zelda\".";

Заключите текст Store в двойные кавычки внутри строки text.innerText.



Шаг 46

В функциях goTown и goStore есть повторения. Повторение в коде — признак того, что вам нужна ещё одна функция. В предыдущем проекте вы научились работать с параметрами функции следующим образом:
Пример кода

function myFunction(param) {
console.log(param);
 }

 Параметры функции служат заполнителями для значений, которые вы передаёте функции при её вызове.



Шаг 48

Прежде чем приступить к созданию массива location, вам необходимо изучить объекты. Объекты — важный тип данных в JavaScript. Следующие несколько шагов будут посвящены их изучению, чтобы вы лучше понимали, как применять их в своем проекте. Объекты — это не примитивные типы данных, хранящие пары «ключ-значение». Не примитивные типы данных — это изменяемые типы данных, которые не являются undefined, null, логическими, числовыми, строковыми или символьными. Изменяемость означает, что данные могут быть изменены после создания. Вот базовый синтаксис объекта:
Пример кода

{
  key: value
}

Вы узнаете о ключах и значениях на следующих нескольких шагах. Сейчас создайте константную переменную с именем cat и присвойте ей пустой объект {}. Под этой переменной cat добавьте оператор console.log(cat), чтобы увидеть объект в консоли.
***

const cat = {}
console.log(cat);



Шаг 49

Объекты похожи на массивы, за исключением того, что вместо использования индексов для доступа к данным и их изменения доступ к ним осуществляется через свойства. Свойства состоят из ключа и значения. Ключ — это имя свойства, а значение — данные, хранящиеся в свойстве. Вот пример объекта с одним свойством:
Пример кода

const obj = {
 name: "Quincy Larson"
 };

Внутри объекта cat добавьте новое свойство. Ключом должно быть name, а значением — строка "Whiskers". Откройте консоль, чтобы увидеть изменения в объекте.

const cat = {

}

***

const cat = {
  name: "Whiskers"
};




 */