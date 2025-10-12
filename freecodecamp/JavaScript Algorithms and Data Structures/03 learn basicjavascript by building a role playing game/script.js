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
const weapons = [
    { name: "stick", power: 5 },
    { name: "dagger", power: 30 },
    { name: "claw hammer",  power: 50 },
    { name: "sword",  power: 100 }
];
const monsters = [
    {
        name: "slime",
        level: 2,
        health: 15
    },
    {
        name: "fanged beast",
        level: 8,
        health: 60
    },
    {
        name: "dragon",
        level: 20,
        health: 300
    }
];
const locations = [
    {
        name: "town square",
        "button text": ["Go to store", "Go to cave", "Fight dragon"],
        "button functions": [goStore, goCave, fightDragon],
        text: "You are in the town square. You see a sign that says \"Store\"."
    },
    {
        name: "store",
        "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
        "button functions": [buyHealth, buyWeapon, goTown],
        text: "You enter the store."
    },
    {
        name: "cave",
        "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
        "button functions": [fightSlime, fightBeast, goTown],
        text: "You enter the cave. You see some monsters."
    },
    {
        name: "fight",
        "button text": ["Attack", "Dodge", "Run"],
        "button functions": [attack, dodge, goTown],
        text: "You are fighting a monster."
    },
    {
        name: "kill monster",
        "button text": ["Go to town square", "Go to town square", "Go to town square"],
        "button functions": [goTown, goTown, easterEgg],
        text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.'
    },
    {
        name: "lose",
        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
        "button functions": [restart, restart, restart],
        text: "You die. &#x2620;"
    },
    {
        name: "win",
        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
        "button functions": [restart, restart, restart],
        text: "You defeat the dragon! YOU WIN THE GAME! &#x1F389;"
    },
    {
        name: "easter egg",
        "button text": ["2", "8", "Go to town square?"],
        "button functions": [pickTwo, pickEight, goTown],
        text: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!"
    }
];

// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location) {
    monsterStats.style.display = "none";
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    text.text.innerHTML = location.text;
}

function goTown() {
    update(locations[0]);
}

function goStore() {
    update(locations[1]);
}

function goCave() {
    update(locations[2]);
}

function buyHealth() {
    if (gold >= 10) {
        gold -= 10;
        health += 10;
        goldText.innerText = gold;
        healthText.innerText = health;
    } else {
        text.innerText = "You do not have enough gold to buy health.";
    }
}

function buyWeapon() {
    if (currentWeaponIndex < weapons.length - 1) {
        if (gold >= 30) {
            gold -= 30;
            currentWeaponIndex++;
            goldText.innerText = gold;
            let newWeapon = weapons[currentWeaponIndex].name;
            text.innerText = "You now have a " + newWeapon + ".";
            inventory.push(newWeapon);
            text.innerText += " In your inventory you have: " + inventory;
        } else {
            text.innerText = "You do not have enough gold to buy a weapon.";
        }
    } else {
        text.innerText = "You already have the most powerful weapon!";
        button2.innerText = "Sell weapon for 15 gold";
        button2.onclick = sellWeapon();
    }
}

function sellWeapon () {
    if (inventory.length > 1) {
        gold += 15;
        goldText.innerText = gold;
        let currentWeapon = inventory.shift();
        text.innerText = "You sold a " + currentWeapon + ".";
        text.innerText += " In your inventory you have: " + inventory;
    } else {
        text.innerText = "Don't sell your only weapon!";
    }
}

function fightSlime() {
    fighting = 0;
    goFight();
}

function fightBeast() {
    fighting = 1;
    goFight();
}

function fightDragon() {
    fighting = 2;
    goFight();
}

function goFight () {
    update(locations[3]);
    monsterHealth = monsters[fighting].health;
    monsterStats.style.display = "block";
    monsterName.innerText = monsters[fighting].name;
    monsterHealthText.innerText = monsterHealth;
}

function attack () {
    text.innerText = "The " + monsters[fighting].name + " attacks.";
    text.innerText += " You attack it with your " + weapons[currentWeaponIndex].name + ".";
    health -= getMonsterAttackValue(monsters[fighting].level);
    if (isMonsterHit()) {
        monsterHealth -= weapons[currentWeaponIndex].power + Math. floor(Math.random() * xp) + 1;
    } else {
        text.innerText += " You miss.";
    }
    healthText.innerText = health;
    monsterHealthText.innerText = monsterHealth;
    if (health <= 0) {
        lose();
    } else if (monsterHealth <= 0) {

        if (fighting === 2) {
            winGame();
        } else {
            defeatMonster();
        }
    }
    if (Math.random() <= .1 && inventory.length !== 1) {
        text.innerText += " Your " + inventory.pop() + " breaks.";
        currentWeaponIndex--;
    }
}

function getMonsterAttackValue (level) {
    const hit = (level * 5) - (Math.floor(Math.random() * xp));
    console.log(hit);
    return hit > 0 ? hit : 0;
}

function isMonsterHit () {
    return Math.random() > .2 || health < 20;
}

function dodge () {
    text.innerText = "You dodge the attack from the " + monsters[fighting].name;
}

function defeatMonster () {
    gold += Math.floor(monsters[fighting].level * 6.7) + gold;
    xp += monsters[fighting].level;
    goldText.innerText = gold;
    xpText.innerText = xp;
    update(locations[4]);
}

function lose () {
    update(locations[5]);
}

function winGame () {
    update(locations[6]);
}

function restart () {
    xp = 0;
    health = 100;
    gold = 50;
    currentWeaponIndex = 0;
    inventory = ["stick"];
    goldText.innerText = gold;
    healthText.innerText = health;
    xpText.innerText = xp;
    goTown();
}

function easterEgg () {
    update(locations[7]);
}

function pickTwo () {
    pick(2);
}

function pickEight () {
    pick(8);
}

function pick (guess) {
    const numbers = [];
    while (numbers.length < 10) {
        numbers.push(Math.floor(Math.random() * 11));
    }
    text.innerText = "You picked " + guess + ". Here are the random numbers:\n";
    for (let i = 0; i < 10; i++ ) {
        text.innerText += numbers[i] + "\n";
    }
    if (numbers.includes(guess)) {
        text.innerText += "Right! You win 20 gold!";
        gold += 20;
        goldText.innerText = gold;
    } else {
        text.innerText += "Wrong! You lose 10 health!";
        health -= 10;
        healthText.innerText = health;
        if (health <= 0) {
            lose();
        }
    }
}



























/*
36          button.onclick = myFunction;
38          Свойство innerText
45 , 135    кавычки
46          Повторение в коде
48 - 53     Объекты
77          if
118         обновление css через js
124         методы для математических констант и функций
149         тернарный оператор
153         ИЛИ ||
157         логический оператор «И» &&
163         цикл while
166         на новой строке
167         for теория
169         Метод .includes() определяет, содержит ли массив элемент, и возвращает значение true или false.



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



Шаг 50

Если имя свойства (ключа) объекта содержит пробел, необходимо заключить его в одинарные или двойные кавычки. Вот пример объекта, имя свойства которого содержит пробел:
Пример кода

const spaceObj = {
 "Space Name": "Kirk",
 };

 Если попытаться указать ключ без кавычек, возникнет ошибка:
 Пример кода

 const spaceObj = {
  // Вызывает ошибку Space Name: "Kirk",
  };
  Добавьте новое свойство с ключом "Number of legs" и значением 4 к объекту cat. Откройте консоль, чтобы увидеть вывод.

const cat = {
  name: "Whiskers",
};

***

const cat = {
  name: "Whiskers",
  "Number of legs": 4,
};


Шаг 51

Существует два способа доступа к свойствам объекта: точечная нотация (.) и квадратные скобки ([]), аналогичные массиву. Точечная нотация используется, когда имя свойства, к которому вы пытаетесь получить доступ, известно заранее.
Пример кода

object.property;

Вот пример использования точечной нотации (.) для чтения свойства name объекта developer:
Пример кода

const developer = {
 name: "Jessica",
 } // Вывод:
 Jessica console.log(developer.name);

 Обновите оператор console для доступа к свойству name объекта cat с помощью точечной нотации. Откройте консоль, чтобы увидеть имя "Whiskers", выведенное на консоль.

console.log(cat)

***

console.log(cat.name);



Шаг 52

Второй способ доступа к свойствам объекта — это использование квадратных скобок ([]). Если в имени свойства объекта, к которому вы пытаетесь получить доступ, есть пробел, необходимо использовать квадратные скобки.
Пример кода

objectName["property name"];

Вот пример использования квадратных скобок для чтения свойства объекта:
Пример кода

const spaceObj = {
  "Space Name": "Kirk",
};

spaceObj["Space Name"]; // "Kirk"

 Обновите консольный оператор, чтобы использовать квадратные скобки для доступа к свойству "Количество ног" объекта cat. Откройте консоль, чтобы увидеть вывод.

console.log(cat.name);

***

console.log(cat["Number of legs"]);

Как и значения массива, свойства объекта разделяются запятой.



Шаг 56

Добавьте в пустой массив текста кнопки три строковых элемента. Используйте три строки, назначенные свойствам innerText кнопки в функции goTown. Помните, что значения массива разделяются запятыми.

const locations = [
  {
    name: "town square",
    "button text": []
  }
];

***

const locations = [
  {
    name: "town square",
    "button text": ["Go to store", "Go to cave", "Fight dragon"]
  }
];


Шаг 62

Теперь пора использовать функцию обновления. Передайте массив location в вызов функции обновления. Аргументы передаются в скобках вызова функции.
Например, вызов myFunction с аргументом arg будет выглядеть так:
Пример кода

myFunction(arg)



Шаг 63

Массив location содержит два местоположения: «городскую площадь» и «магазин». В данный момент вы передаёте весь этот массив в функцию обновления. Передайте только первый элемент массива location, добавив [0] в конец переменной. Например: myFunction(arg[0]);. Это называется скобочной записью. Доступ к значениям в массиве осуществляется по индексу. Индексы — это числовые значения, начинающиеся с 0 — это называется индексацией с нуля. arg[0] будет первым элементом массива arg.



Шаг 68

Наконец, обновите назначение text.innerText, чтобы оно совпадало с текстом из объекта location. Однако вместо квадратных скобок используйте точечную нотацию. Вот пример доступа к свойству name объекта person: Пример кода person.name

text.innerText = "You are in the town square. You see a sign that says \"Store\".";

***

text.innerText = location.text;



Шаг 77

Что делать, если у игрока недостаточно золота для покупки здоровья? Используйте оператор if, чтобы проверить, достаточно ли у игрока золота для покупки здоровья. В предыдущем проекте вы научились работать с операторами if следующим образом:
Пример кода

const num = 5;
if (num >= 3) {
 console.log("Этот код будет выполнен, потому что num больше или равно 3.");
 }

 Начнем с размещения всего кода функции buyHealth в операторе if. Для условия оператора if проверьте, больше ли или равно ли золото 10.


function buyHealth() {
  gold -= 10;
  health += 10;
  goldText.innerText = gold;
  healthText.innerText = health;
}

***

function buyHealth() {
    if (gold >= 10) {
        gold -= 10;
        health += 10;
        goldText.innerText = gold;
        healthText.innerText = health;
    }
}



Шаг 118

По умолчанию HTML-элемент, отображающий статистику монстра, скрыт с помощью CSS. Когда игрок нажимает кнопку «Сразиться с драконом», статистика монстра должна отображаться. Этого можно добиться, используя свойства style и display элемента monsterStats. Свойство style используется для доступа к встроенному стилю элемента, а свойство display — для настройки видимости элемента. Вот пример обновления отображения элемента абзаца:
Пример кода

const paragraph = document.querySelector('p');
paragraph.style.display = 'block';

Отобразите элемент monsterStats, обновив свойство display свойства style на block.


monsterStats.style.display = "block";



Шаг 124

Объект Math в JavaScript содержит статические свойства и методы для математических констант и функций. Один из них — Math.random(), который генерирует случайное число от 0 (включительно) до 1 (не включая). Другой — Math.floor(), который округляет заданное число до ближайшего целого. Используя их, вы можете генерировать случайное число в заданном диапазоне. Например, этот код генерирует случайное число от 1 до 5: Math.floor(Math.random() * 5) + 1;. Следуя этому шаблону, используйте оператор сложения (+), чтобы добавить случайное число от 1 до значения опыта к значению monsterHealth -= weapons[currentWeaponIndex].power.

monsterHealth -= weapons[currentWeaponIndex].power

***

monsterHealth -= weapons[currentWeaponIndex].power + Math.floor(Math.random() * xp) + 1;



Шаг 135

Слово «Arg!» следует заключить в кавычки. Помимо экранирования кавычек, есть и другой способ включения кавычек в строку. Замените двойные кавычки вокруг строки «The monster screams Arg! as it dies. You get experience points and find gold.» на одинарные ', затем добавьте двойные кавычки вокруг «Arg!».




Шаг 141

Для корректного отображения текста смайлика &#x2620; на странице необходимо использовать свойство innerHTML. Свойство innerHTML позволяет получать доступ к содержимому HTML-элемента и изменять его с помощью JavaScript. Вот пример обновления содержимого этого элемента абзаца с помощью свойства innerHTML.
Пример кода

<p id="demo">Это абзац.</p>

Пример кода

document.querySelector("#demo").innerHTML = "Привет, innerHTML!";

В функции обновления измените text.innerText на text.innerHTML.




Шаг 149

Если вы играете в текущую версию игры, вы можете заметить ошибку. Если ваш опыт достаточно высок, функция getMonsterAttackValue вернёт отрицательное число, что фактически увеличит ваше общее здоровье в бою с монстром! Вы можете исправить эту проблему, используя тернарный оператор, чтобы исключить возврат отрицательных значений. Тернарный оператор — это условный оператор, который можно использовать как однострочный оператор if-else. Синтаксис: condition ? expressionIfTrue : expressionIfFalse. Вот пример возврата значения с помощью оператора if-else и переработанный пример с использованием тернарного оператора:
Пример кода

// оператор
if-else if (score > 0) {
 return score
 } else {
 return default_score
 }
 // тернарный оператор return score > 0 ? score : default_score

 В getMonsterAttackValue замените return hit на тернарный оператор, который возвращает hit, если hit больше 0, или 0, если меньше.

 function getMonsterAttackValue(level) {
  const hit = (level * 5) - (Math.floor(Math.random() * xp));
  console.log(hit);
  return hit;
}

***

return hit > 0 ? hit : 0;



Шаг 153

Игрок должен ударить, если Math.random() > 0,2 или здоровье игрока меньше 20. В конце оператора return используйте логический оператор ИЛИ || и проверьте, меньше ли здоровье 20. Логический оператор ИЛИ будет использовать первое значение, если оно истинно, то есть любое, кроме NaN, null, undefined, 0, -0, 0n, "" и false. В противном случае будет использовано второе значение. Например: num < 10 || num > 20.

return Math.random() > .2;

***

return Math.random() > .2 || health < 20;



Шаг 157

Мы не хотим, чтобы единственное оружие игрока сломалось. Логический оператор «И» проверяет истинность двух утверждений. Используйте логический оператор «И» &&, чтобы добавить второе условие к оператору if. Оружие игрока сломается только в том случае, если inventory.length не равен (!==) единице. Вот пример оператора if с двумя условиями:
Пример кода

if (firstName === "Quincy" && lastName === "Larson") {
 }

 if (Math.random() <= .1) {
 }

 ***

 if (Math.random() <= .1 && inventory.length !== 1) {
 }



 Шаг 163

 После массива чисел создайте цикл while, который будет выполняться до тех пор, пока значение numbers.length меньше 10. В предыдущем проекте вы научились работать с циклами while следующим образом:
 Пример кода

 while (условие) {
  // код для выполнения
  }


  while (numbers.length < 10) {

  }



  Шаг 164

  В цикле while добавьте случайное число от 0 до 10 в конец массива чисел. Это случайное число можно создать с помощью Math.floor(Math.random() * 11).

numbers.push(Math.floor(Math.random() * 11));



Шаг 166

В конце строки, перед последней кавычкой, вставьте символ перехода на новую строку \n. Это приведёт к тому, что следующая часть, которую вы добавите в text.innerText, появится на новой строке.



Шаг 167 В предыдущем проекте вы научились работать с циклами for следующим образом:
Пример кода

for (let i = 0; i < 5; i++) {
 // код для выполнения
 }

 Циклы for объявляются тремя выражениями, разделёнными точкой с запятой: for (a; b; c), где a — выражение инициализации, b — условие, а c — конечное выражение. На этом шаге создайте цикл for, где i инициализируется значением 0, цикл выполняется до тех пор, пока i меньше 10, и i увеличивается на 1 после каждой итерации с помощью оператора инкремента ++.


for (let i = 0; i < 10; i++ ) {

  }



  Шаг 169

  Метод .includes() определяет, содержит ли массив элемент, и возвращает значение true или false. Вот пример синтаксиса .includes():
  Пример кода

  const numbersArray = [1, 2, 3, 4, 5]
  const number = 3
  if (numbersArray.includes(number)) {
   console.log("Число есть в массиве.")
   }

   После цикла for добавьте оператор if для проверки наличия предполагаемого числа в массиве numbers. Вы можете использовать метод .includes() для проверки наличия предполагаемого числа в массиве.

if (numbers.includes(guess)) {

  }




 */