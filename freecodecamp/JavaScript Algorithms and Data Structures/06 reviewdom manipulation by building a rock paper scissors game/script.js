function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}
console.log(getRandomComputerResult());
















/*
Шаг 1

Первым шагом является создание функции, которая будет генерировать случайный выбор для компьютера. Функция getRandomComputerResult будет использоваться для получения выбора компьютера. Внутри этой функции вы должны увидеть массив вариантов с «Камнем», «Бумагой» и «Ножницами». Ваша задача — дополнить функцию getRandomComputerResult так, чтобы она возвращала случайный вариант из массива вариантов. Советы Вы можете использовать функции Math.random() и Math.floor() для получения случайного целого числа. Это будет индекс массива вариантов. Вы можете использовать случайный индекс для доступа к варианту из массива вариантов.


function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];

}

***

function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}












 */