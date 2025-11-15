const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultElement = document.getElementById("result");

const tet = textInput.value;
const asd = tet.replace(/[^a-zA-Z0-9]/g, '');



checkButton.addEventListener("click", () => {
    if (tet === "a") {
        resultElement.innerHTML = 5;
    } else if (textInput.value === "aa") {
        resultElement.innerHTML = 10;
    } else{
        alert(asd);
    }
});


/*





Чтобы убрать все пробелы из текста в JavaScript, используйте метод replace() с регулярным выражением /\\s+/g. Это выражение найдёт все пробельные символы (пробелы, табуляцию, переносы строк) и заменит их на пустую строку.
Пример:

let myString = " Привет, мир!  ";
let newString = myString.replace(/\s+/g, '');
console.log(newString); // Выведет: Привет,мир!




Как составить регулярное выражение
Сформулируйте условие. Например, вы хотите составить регулярное выражение для проверки логина. Этот логин должен быть длиннее трёх символов. Он может содержать буквы на кириллице и латинице или цифры. Регистр неважен.

Составьте выражение. Наполните шаблон селекторами, подходящими под ваши условия:

Логин содержит буквы или цифры — /^[a-zа-яё0-9]/.
Слово должно быть не короче трёх символов, максимальной длины нет — /^[a-zа-яё0-9]{3,}/.
Регистр неважен — /^[a-zа-яё0-9]{3``,}$/i.




const text = 'Это строка, которую необходимо перевернуть.';

const result = text
  // преобразуем строку в массив символов
  .split('')
  // метод reverse() выстраивает элементы массива в обратном порядке
  .reverse()
  // преобразуем массив обратно в строку
  .join('');

console.log(result); // => .ьтунревереп омидохбоен юуроток ,акортс отЭ








*/