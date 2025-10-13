const darkColorsArr = [
    "#2C3E50",
    "#34495E",
    "#2C2C2C",
    "#616A6B",
    "#4A235A",
    "#2F4F4F",
    "#0E4B5A",
    "#36454F",
    "#2C3E50",
    "#800020",
];

function getRandomIndex() {
    const randomIndex = Math.floor(darkColorsArr.length * Math.random());
    return randomIndex;
}

const body = document.querySelector("body");
const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");

function changeBackgroundColor() {
    const color = darkColorsArr[getRandomIndex()];

    bgHexCodeSpanElement.innerText = color;
    body.style.backgroundColor = color;
}
const btn = document.querySelector("#btn");

btn.onclick = changeBackgroundColor;




/*
Шаг 1

CamperBot пытается создать случайный механизм смены цвета фона. Но у них постоянно возникают проблемы, и им нужна ваша помощь в отладке кода. CamperBot уже добавил HTML и CSS для проекта. Но они не понимают, почему стили и контент не отображаются на странице. Открыв консоль, они видят следующее сообщение:
Пример кода

SyntaxError: unknown: Unexpected token, expected "," (5:2)

Синтаксические ошибки возникают, когда движок JavaScript сталкивается с чем-то, что он не может интерпретировать. В данном случае, похоже, у CamperBot есть синтаксические ошибки в массиве darkColorsArr. Исправьте синтаксические ошибки в массиве darkColorsArr, и вы увидите, что контент и стили отображаются на странице.


const darkColorsArr = [
    "#2C3E50",
    "#34495E",
    "#2C2C2C"
    "#616A6B"
    "#4A235A"
    "#2F4F4F",
    "#0E4B5A",
    "#36454F",
    "#2C3E50",
    "#800020",
];



Шаг 2

Теперь CamperBot пытается создать функцию, которая будет возвращать случайный индекс из darkColorsArr. Но возникает следующее сообщение об ошибке:
Пример кода

Uncaught ReferenceError: math is not defined

ReferenceError возникает при ссылке на несуществующую переменную. В этом случае похоже, что CamperBot пытается использовать math, но в JavaScript нет объекта math. Исправьте ошибку CamperBot в строке math.random() и снова откройте консоль.


function getRandomIndex() {
    console.log(darkColorsArr.length * math.random())
}
getRandomIndex();

***


console.log(darkColorsArr.length * Math.random())




Шаг 3

Теперь, когда ошибка ReferenceError устранена, консоль отображает правильные результаты для случайного числа от 0 до 9. Но CamperBot не ожидал увидеть такие десятичные числа:
Пример кода

0.015882899879771095
2.114596286197641
6.040964780197666

Обновите оператор консоли, чтобы он выводил целое число от 0 до 9. Помните, что вы работали с методом в ролевой игре, который округляет число до ближайшего целого.

function getRandomIndex() {
  console.log(darkColorsArr.length * Math.random())
}
getRandomIndex();


***

function getRandomIndex() {
  console.log(Math.floor(darkColorsArr.length * Math.random()))
}
getRandomIndex();




Шаг 4

CamperBot завершил создание функции getRandomIndex, и она работает как надо. Но теперь при попытке создать ссылку на элемент body в DOM возникает следующая проблема:
Пример кода
Uncaught TypeError: document.queryselector is not a function

Ошибка TypeError означает, что код пытается выполнить операцию со значением, тип которого отличается от ожидаемого. Исправьте ошибку TypeError, обновив метод document.queryselector на корректное имя метода, который выбирает элемент из DOM.



const body = document.queryselector("body");


***

const body = document.querySelector("body");





Шаг 5

CamperBot создал новую переменную bgHexCodeSpanElement для хранения ссылки на элемент span с идентификатором bg-hex-code. Однако при попытке вывести эту переменную в консоль возвращается значение null. Null — это особое значение в JavaScript, которое обозначает отсутствие значения. Это может произойти при попытке доступа к свойству несуществующего объекта. В этом случае CamperBot передаёт неправильный селектор методу document.querySelector. Исправьте строку document.querySelector("bg-hex-code"), чтобы он правильно выбирал элемент с идентификатором bg-hex-code.


const body = document.querySelector("body");
const bgHexCodeSpanElement = document.querySelector("bg-hex-code");

console.log(bgHexCodeSpanElement);

***

("#bg-hex-code")




Шаг 6

CamperBot создал функцию changeBackgroundColor, которая меняет цвет фона страницы на случайный цвет из массива darkColorsArr. Функция также отображает шестнадцатеричный код нового цвета. При попытке протестировать эту функцию они заметили, что цвет фона не меняется, а текст выглядит следующим образом:
Пример кода

Hex Code: undefined

Здесь отображается undefined, потому что переменная цвета задана неправильно. Исправьте ошибку в строке darkColorsArr[getRandomIndex], чтобы переменная цвета была задана случайным цветом из массива darkColorsArr.



function changeBackgroundColor() {
  const color = darkColorsArr[getRandomIndex];

  bgHexCodeSpanElement.innerText = color;
  body.style.backgroundColor = color;
}
changeBackgroundColor();

***


const color = darkColorsArr[getRandomIndex()];



Шаг 7

CamperBot пытается создать новую переменную btn для хранения ссылки на элемент кнопки с идентификатором click-btn. Однако при попытке вывести элемент кнопки в консоль он видит, что элемент кнопки имеет значение null. Откройте файл index.html, чтобы увидеть правильный идентификатор этого элемента кнопки. Затем исправьте ошибку в строке document.querySelector("#click-btn");.


const btn = document.querySelector("#click-btn");
console.log(btn);

***

const btn = document.querySelector("#btn");




Шаг 8

CamperBot завершил создание случайного изменения цвета фона. Однако при нажатии кнопки цвет фона не меняется. Похоже, они пытаются использовать свойство onclick, но делают это неправильно. Свойству onclick следует присвоить ссылку на функцию. Исправьте ошибку в строке btn.onclick = changeBackgroundColor();. Вспомните, что вы работали со свойством onclick в проекте ролевой игры. Посмотрите на итоговое решение, чтобы увидеть, как правильно использовалось свойство onclick. Как только вы исправите эту последнюю ошибку, случайный изменение цвета фона будет готов!


btn.onclick = changeBackgroundColor();

***

btn.onclick = changeBackgroundColor;


 */