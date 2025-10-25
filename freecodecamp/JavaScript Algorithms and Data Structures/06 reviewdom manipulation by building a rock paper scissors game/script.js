function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function hasPlayerWonTheRound(player, computer) {
    return (
        (player === "Rock" && computer === "Scissors") ||
        (player === "Scissors" && computer === "Paper") ||
        (player === "Paper" && computer === "Rock")
    );
}

let playerScore = 0;
let computerScore = 0;

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

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption) {
    roundResultsMsg.innerText = getRoundResults(userOption);
    computerScoreSpanElement.innerText = computerScore;
    playerScoreSpanElement.innerText = playerScore;

    if (playerScore === 3 || computerScore === 3) {
        winnerMsgElement.innerText = `${
            playerScore === 3 ? "Player" : "Computer"
        } has won the game!`;

        resetGameBtn.style.display = "block";
        optionsContainer.style.display = "none";
    }

}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;
    resetGameBtn.style.display = "none";
    optionsContainer.style.display = "block";
    winnerMsgElement.innerText = "";
    roundResultsMsg.innerText = "";
}

resetGameBtn.addEventListener("click", resetGame);

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", function () {
    showResults("Rock");
});

paperBtn.addEventListener("click", function () {
    showResults("Paper");
});

scissorsBtn.addEventListener("click", function () {
    showResults("Scissors");
});















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





Шаг 4

Теперь пора обновить счёт и сообщение о результатах раунда. Завершите функцию showResults. Элементы playerScoreSpanElement и computerScoreSpanElement должны быть обновлены, чтобы отображать обновлённые счёт игрока и компьютера. В элемент roundResultsMsg также должен быть добавлен результат раунда. Советы Помните, что вы узнали, как работать со свойством innerText для обновления текстового содержимого элемента. Вы можете использовать функцию getRoundResults для получения результата раунда.


const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");

function showResults(userOption) {

};

showResults("Rock");

***

function showResults(userOption) {
  roundResultsMsg.innerText = getRoundResults(userOption);
  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;
};

showResults("Rock");



Шаг 5

Если вы попробуете сыграть в игру, вы увидите, что играть можно бесконечное количество раундов. Но правила гласят, что побеждает тот, кто первым наберёт от одного до трёх очков. В функции showResults вам нужно проверить, набрал ли игрок или компьютер три очка. Если кто-то из них набрал три очка, вы должны вывести сообщение о победителе. Например, если игрок выиграл игру, то значение параметра winnerMsgElement должно быть обновлено до «Игрок выиграл игру!». Если компьютер выиграл игру, то значение параметра winnerMsgElement должно быть обновлено до «Компьютер выиграл игру!». Если есть победитель, нужно отобразить кнопку resetGameBtn и скрыть optionsContainer, чтобы игрок мог продолжить игру. Советы Используйте свойство style.display элемента со значением «block» или «none», чтобы отобразить или скрыть элемент.


const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption) {
  roundResultsMsg.innerText = getRoundResults(userOption);
  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;


};


***


if (computerScore === 3) {
    winnerMsgElement.innerText = "Computer has won the game!";
  } else if (playerScore === 3) {
    winnerMsgElement.innerText = "Player has won the game!";
  }
  resetGameBtn.style.display = "block";
  optionsContainer.style.display = "none";

***

if (playerScore === 3 || computerScore === 3) {
    winnerMsgElement.innerText = `${
      playerScore === 3 ? "Player" : "Computer"
    } has won the game!`;




Шаг 6

Если игрок или компьютер выиграл игру, должна быть возможность сбросить игру и начать заново. Завершите функцию resetGame, которая выполняет следующие действия: Сбрасывает счёт игрока и компьютера до 0. Обновляет элементы playerScoreSpanElement и computerScoreSpanElement для отображения новых счётов. Скрывает кнопку resetGameBtn. Отображает optionsContainer, чтобы игрок мог продолжить игру. Очищает содержимое элементов winnerMsgElement и roundResultsMsg. Советы Вы можете использовать свойство innerText для обновления содержимого элемента. Чтобы очистить содержимое элемента, установите свойство innerText в пустую строку. Применив эти изменения, вы завершите игру «Камень, ножницы, бумага»!


function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;
  resetGameBtn.style.display = "none";
  optionsContainer.style.display = "block";
  winnerMsgElement.innerText = "";
  roundResultsMsg.innerText = "";
};


 */