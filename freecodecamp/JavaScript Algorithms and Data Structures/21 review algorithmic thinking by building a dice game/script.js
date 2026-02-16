const listOfAllDice = document.querySelectorAll(".die");
const scoreInputs = document.querySelectorAll("#score-options input");
const scoreSpans = document.querySelectorAll("#score-options span");
const roundElement = document.getElementById("current-round");
const rollsElement = document.getElementById("current-round-rolls");
const totalScoreElement = document.getElementById("total-score");
const scoreHistory = document.getElementById("score-history");
const rollDiceBtn = document.getElementById("roll-dice-btn");
const keepScoreBtn = document.getElementById("keep-score-btn");
const rulesBtn = document.getElementById("rules-btn");
const rulesContainer = document.querySelector(".rules-container");

let isModalShowing = false;
let diceValuesArr = [];
let rolls = 0;
let score = 0;
let round = 1;

rulesBtn.addEventListener("click", () => {
    isModalShowing = !isModalShowing;
    if (isModalShowing) {
        rulesContainer.style.display = "block";
        rulesBtn.textContent = "Hide rules";
    } else {
        rulesContainer.style.display = "none";
        rulesBtn.textContent = "Show rules";
    }
});


















/*
Шаг 1

В этом проекте вы освоите алгоритмическое мышление, создав игру в кости. Всего 6 раундов, и в каждом раунде игрок может бросить кости до 3 раз и получить очки. HTML и CSS предоставлены. Можете свободно их изучить. Когда будете готовы, вам нужно будет настроить переменные HTML. Получите все элементы `.die` и присвойте их переменной `listOfAllDice`. Получите поля ввода очков (элементы ввода в `#score-options`) и `score-span` и присвойте их `scoreInputs` и `scoreSpans`. Присвойте элемент `#current-round` элементу `roundElement`, а элемент `#current-round-rolls` элементу `rollsElement`, затем сделайте то же самое для элементов `#total-score` и `#score-history`. Присвойте переменным с правильно отформатированными именами ваши `#roll-dice-btn`, `#keep-score-btn`, `#rules-btn` и `.rules-container`. Когда пользователь нажимает кнопку «Показать правила», он должен иметь возможность переключаться между отображением и скрытием правил игры. Создайте переменную `isModalShowing` для отслеживания состояния правил игры. Каждый раз, когда пользователь бросает кубики, вам нужно будет отслеживать все значения бросков. Создайте переменную `diceValuesArr` для отслеживания этого. На протяжении всей игры вам нужно будет отслеживать текущий счет, общий счет, количество бросков и раунд, в котором находится игрок. Объявите для этой цели переменные `rolls`, `score` и `round`. Подумайте о том, каким должно быть начальное значение каждой из этих переменных. Все эти переменные должны иметь возможность переназначения.




Шаг 2

Когда пользователь нажимает кнопку Show rule, правила игры должны отобразиться на экране. При повторном нажатии кнопки правила должны быть скрыты. Используйте обработчик событий, чтобы инвертировать значение переменной isModalShowing, переключать видимость rulesContainer и изменять текст кнопки rulesBtn на Show rules или Hide rules.









*/