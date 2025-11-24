const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultElement = document.getElementById("result");


checkButton.addEventListener("click", () => {
    const str = "";
    const reg1 = textInput.value.replace(/[^a-zA-Z0-9]/gi, '');
    const reg2 = reg1.toLowerCase();
    const reg3 = reg2.split("");
    const reg4 = reg3.reverse();
    const reg5 = reg4.join();
    const reg6 = reg5.replace(/[^a-zA-Z0-9]/gi, '');
    if (reg1 === str) {
        alert("Please input a value");
    } else if (reg2 === reg6) {
        resultElement.innerHTML = `${textInput.value} is a palindrome`;
    } else {
        resultElement.innerHTML = `${textInput.value} is not a palindrome`;
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