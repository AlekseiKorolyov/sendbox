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
    console.log(darkColorsArr.length * Math.random())
}
getRandomIndex();







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
 */