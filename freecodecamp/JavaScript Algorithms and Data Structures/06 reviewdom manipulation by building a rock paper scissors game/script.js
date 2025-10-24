function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult();

    if (hasPlayerWonTheRound(userOption, computerResult)) {
        playerScore++;
        return `Player wins! ${userOption} beats ${computerResult}`;
    } else if (computerResult === userOption) {
        return `It's a tie! Both chose ${userOption}`;
    } else {
        computerScore++;
        return `Computer wins! ${computerResult} beats ${userOption}`;
    }
}

console.log(hasPlayerWonTheRound("Rock", "Scissors"));
console.log(hasPlayerWonTheRound("Scissors", "Rock"));
















/*
1           Math.random() и Math.floor()
2           логические операторы && (И) и || (ИЛИ) внутри условного оператора if




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



Шаг 2

В игре будет несколько раундов. Первый, кто наберёт три очка, побеждает. На этом этапе вам нужно определить, выиграл ли игрок раунд. Завершите функцию hasPlayerWonTheRound. Эта функция имеет два параметра: player и computer. Функция должна возвращать true, если игрок выиграл раунд, и false, если игрок проиграл или сыграл вничью.
Вот критерии победы игрока в раунде:

Если игрок выбирает «Камень», а компьютер выбирает «Ножницы». 
Если игрок выбирает «Ножницы», а компьютер выбирает «Бумагу».
Если игрок выбирает «Бумагу», а компьютер выбирает «Камень».

Предоставлено несколько вызовов функций для тестирования вашей функции.

function hasPlayerWonTheRound(player, computer) {

}

console.log(hasPlayerWonTheRound("Rock", "Scissors"));
console.log(hasPlayerWonTheRound("Scissors", "Rock"));

***

function hasPlayerWonTheRound(player, computer) {
  if (player === "Rock" && computer === "Scissors") {
    return true;
  } else if (player === "Scissors" && computer === "Paper") {
    return true;
  } else if (player === "Paper" && computer === "Rock") {
    return true;
  } else {
    return false;
  }
}

console.log(hasPlayerWonTheRound("Rock", "Scissors"));
console.log(hasPlayerWonTheRound("Scissors", "Rock"));

***


function hasPlayerWonTheRound(player, computer) {
  return (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock")
  );
}




Шаг 3

Теперь нужно получить результаты раунда. Завершите функцию getRoundResults. Если игрок выигрывает раунд, обновите playerScore на 1 и верните сообщение «Игрок выигрывает! [выбор игрока] выигрывает [выбор компьютера]». Если компьютер и игрок выбрали один и тот же вариант, верните сообщение «Ничья! Оба выбрали [выбор игрока]». Если компьютер выигрывает раунд, обновите computerScore на 1 и верните сообщение «Компьютер выигрывает! [выбор компьютера] выигрывает [выбор игрока]». [выбор компьютера] следует заменить на computerResult, а [выбор игрока] — на userOption. Советы Помните, что вы можете использовать функцию hasPlayerWonTheRound для проверки победы игрока в раунде. Для построения сообщения можно использовать шаблонные литералы или обычную конкатенацию строк.

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();

}

console.log(getRoundResults("Rock"));
console.log("Player Score: ", playerScore, "Computer Score: ", computerScore);

***

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();
  if (hasPlayerWonTheRound(userOption, computerResult) == true) {
    playerScore += 1;
  } else {
    computerScore += 1;
  }
  return `Player Score: ${playerScore} Computer Score: ${computerScore}`;
}

***

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();

  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else if (computerResult === userOption) {
    return `It's a tie! Both chose ${userOption}`;
  } else {
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
}








 */