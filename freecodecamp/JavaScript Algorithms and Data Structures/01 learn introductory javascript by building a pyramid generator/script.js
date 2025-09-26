const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}
//
for (let i = 1; i <= count; i ++) {
    rows.push(padRow(i, count));
}

let result = "";

for (const row of rows) {
    result = row + result + "\n";
}

console.log(result);





/* */

// function padRow(rowNumber, rowCount) {                        функция padRow возвращает значение символьной переменной, повторяющееся rowNumber раз
//     return " " + character.repeat(rowNumber)  + " ";          " " + character + " " добавляет по одному пробелу « » в начало и конец повторяющейся строки символов.
//     return " ".repeat(rowCount - rowNumber) + character.repeat(rowNumber) + " ".repeat(rowCount - rowNumber);   повторяет rowCount - rowNumber раз
// }



// function padRow(name) {                              /* создание функции padRow */
//     const test = "Testing";           Переменные объявленные внутри функции считаются находящимися в локальной области видимости, или области видимости блока. Переменная, объявленная внутри функции, может использоваться только внутри этой функции.
//     return name;                                     /*  По умолчанию функции возвращают undefined в качестве своего значения. Чтобы вернуть что-то другое, необходимо использовать ключевое слово return */
// }                                                    /* код после return не работает */
// const call = padRow("AIK");                           /* вызов функцю padRow */
// console.log(call);

// for (let i = 0; i < count; i = i + 1) {
//     rows.push(i);                                   /* помещает i в массив строк. */
//     rows.push(character.repeat(i + 1));          /* помещает переменную в массив строк */
// }                                                      /* .repeat(i) Этот метод принимает число в качестве аргумента, указывающее количество повторений целевой строки переменная i представляет собой текущий номер «строки» в вашем цикле */
// /* повторение строки ноль раз не приводит к выводу каких-либо данных. Чтобы исправить это, добавьте 1 к значению i в вызове .repeat() */
// let result = "";
//
// for (const row of rows) {                          /* цикл for...of перебирает каждый элемент итерируемого объекта и временно присваивает его переменной */
//     result = row + result + "\n";                  /* hello = hello + "World"; добавит строку "World" к существующей строке, хранящейся в переменной hello. Это называется конкатенацией. */
// }                                                  /*  + "\n"   переносит элемент массива на новую строку   интерпретируется как новая строка при записи строки в журнал */
//
// console.log(result);

// function addTwoNumbers(firstName, lastName) {   /* создаю функцию с двумя аргументами */
//     return firstName + lastName;                /* возвращается сумма двух аргументов */
// }
//
// const sum = addTwoNumbers(5, 10);               /* объявляется переменная sum и вызывает функцию */
// console.log(sum);                               /* выводит в кансоль значение sum */

//for (iterator; condition; iteration) {
//   logic;
// }
// Пример кода for (итератор; условие; итерация) { логика; }

// let rows = ["Naomi", "Quincy", "CamperChan"];
// rows.push("freeCodeCamp");          /* метод .push() позволяет «поместить» значение в конец массива */
// let pushed = rows.push();
// console.log(pushed);
// let popped = rows.pop();            /* метод .pop() удаляет последний элемент из массива и возвращает этот элемент */
// console.log(popped);
// console.log(rows);
// console.log(rows[0]);
// rows[rows.length - 1] = 10;         /* .length изменяет последний элемент массива (возвращает количество элементов в массиве вычитая 1) */
