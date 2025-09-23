const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
    // rows.push(i);                                   /* помещает i в массив строк. */
    rows.push(character);                              /* помещает переменную в массив строк */
}

let result = "";

for (const row of rows) {                          /* цикл for...of перебирает каждый элемент итерируемого объекта и временно присваивает его переменной */
    result = row + result + "\n";                  /* hello = hello + "World"; добавит строку "World" к существующей строке, хранящейся в переменной hello. Это называется конкатенацией. */
}                                                  /*  + "\n"   переносит элемент массива на новую строку   интерпретируется как новая строка при записи строки в журнал */

console.log(result);







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
// rows[rows.length - 1] = 10;         /* .langth изменяет последний элемент массива (возвращает количество элементов в массиве вычитая 1) */
