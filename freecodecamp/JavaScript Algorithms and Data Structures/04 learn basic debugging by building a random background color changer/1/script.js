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

console.log(bgHexCodeSpanElement);






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


 */