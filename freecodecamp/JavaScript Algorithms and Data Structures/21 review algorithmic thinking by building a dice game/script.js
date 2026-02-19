const listOfAllDice = document.querySelectorAll(".die");
const scoreInputs = document.querySelectorAll("#score-options input");
const scoreSpans = document.querySelectorAll("#score-options span");
const roundElement = document.getElementById("current-round");
const rollsElement = document.getElementById("current-round-rolls");
const totalScoreElement = document.getElementById("total-score");
const scoreHistory = document.getElementById("score-history");
const rollDiceBtn = document.getElementById("roll-dice-btn");
const keepScoreBtn = document.getElementById("keep-score-btn");
const rulesContainer = document.querySelector(".rules-container");
const rulesBtn = document.getElementById("rules-btn");

let diceValuesArr = [];
let isModalShowing = false;
let score = 0;
let round = 1;
let rolls = 0;

const rollDice = () => {
    diceValuesArr = [];

    for (let i = 0; i < 5; i++) {
        const randomDice = Math.floor(Math.random() * 6) + 1;
        diceValuesArr.push(randomDice);
    };

    listOfAllDice.forEach((dice, index) => {
        dice.textContent = diceValuesArr[index];
    });
};

const updateStats = () => {
    rollsElement.textContent = rolls;
    roundElement.textContent = round;
};

const updateRadioOption = (index, score) => {
    scoreInputs[index].disabled = false;
    scoreInputs[index].value = score;
    scoreSpans[index].textContent = `, score = ${score}`;
};

const getHighestDuplicates = (array) => {
    const counts = {};

    array.forEach((num) => {
        counts[num] = (counts[num] || 0) + 1;
    });

    const totalSumm = array.reduce((aac, curr) => aac + curr, 0);

    let maxFrequency = 0;
    for (const num in counts) {
        if (counts[num] > maxFrequency) {
            maxFrequency = counts[num];
        }
    }

    if (maxFrequency >= 4) {
        updateRadioOption(1, totalSumm);
        updateRadioOption(0, totalSumm);
    } else if (maxFrequency === 3) {
        updateRadioOption(0, totalSumm);
    }

    updateRadioOption(5, 0);
};

rollDiceBtn.addEventListener("click", () => {
    if (rolls === 3) {
        alert("You have made three rolls this round. Please select a score.");
    } else {
        rolls++;
        rollDice();
        updateStats();
        getHighestDuplicates(diceValuesArr);
    }
});

rulesBtn.addEventListener("click", () => {
    isModalShowing = !isModalShowing;

    if (isModalShowing) {
        rulesBtn.textContent = "Hide rules";
        rulesContainer.style.display = "block";
    } else {
        rulesBtn.textContent = "Show rules";
        rulesContainer.style.display = "none";
    }
});


















/*
Шаг 1

В этом проекте вы освоите алгоритмическое мышление, создав игру в кости. Всего 6 раундов, и в каждом раунде игрок может бросить кости до 3 раз и получить очки. HTML и CSS предоставлены. Можете свободно их изучить. Когда будете готовы, вам нужно будет настроить переменные HTML. Получите все элементы `.die` и присвойте их переменной `listOfAllDice`. Получите поля ввода очков (элементы ввода в `#score-options`) и `score-span` и присвойте их `scoreInputs` и `scoreSpans`. Присвойте элемент `#current-round` элементу `roundElement`, а элемент `#current-round-rolls` элементу `rollsElement`, затем сделайте то же самое для элементов `#total-score` и `#score-history`. Присвойте переменным с правильно отформатированными именами ваши `#roll-dice-btn`, `#keep-score-btn`, `#rules-btn` и `.rules-container`. Когда пользователь нажимает кнопку «Показать правила», он должен иметь возможность переключаться между отображением и скрытием правил игры. Создайте переменную `isModalShowing` для отслеживания состояния правил игры. Каждый раз, когда пользователь бросает кубики, вам нужно будет отслеживать все значения бросков. Создайте переменную `diceValuesArr` для отслеживания этого. На протяжении всей игры вам нужно будет отслеживать текущий счет, общий счет, количество бросков и раунд, в котором находится игрок. Объявите для этой цели переменные `rolls`, `score` и `round`. Подумайте о том, каким должно быть начальное значение каждой из этих переменных. Все эти переменные должны иметь возможность переназначения.




Шаг 2

Когда пользователь нажимает кнопку Show rule, правила игры должны отобразиться на экране. При повторном нажатии кнопки правила должны быть скрыты. Используйте обработчик событий, чтобы инвертировать значение переменной isModalShowing, переключать видимость rulesContainer и изменять текст кнопки rulesBtn на Show rules или Hide rules.


rulesBtn.addEventListener("click", () => {
  isModalShowing = !isModalShowing;

  if (isModalShowing) {
    rulesBtn.textContent = "Hide rules";
    rulesContainer.style.display = "block";
  } else {
    rulesBtn.textContent = "Show rules";
    rulesContainer.style.display = "none";
  }
});




Шаг 3

Когда пользователь нажимает кнопку «Бросить кубик», на экране должны быть сгенерированы и отображены пять случайных чисел, полученных с кубика. Разработайте логику таким образом, чтобы нажатие на кнопку rollDiceBtn генерировало пять случайных чисел от 1 до 6 включительно, устанавливало в поле diceValuesArr только эти пять чисел и отображало числа в порядке их следования в элементах listOfAllDice.


rollDiceBtn.addEventListener("click", () => {
  diceValuesArr.length = 0;
  for (let i = 0; i < 5; i++) {
    diceValuesArr.push(Math.floor(Math.random() * 5 + 1));
  }
  listOfAllDice.forEach((el, index) => {
    el.textContent = diceValuesArr[index];
  })
});




Шаг 4

В каждом раунде игры пользователям разрешается бросать кубики максимум три раза. Если пользователь нажимает кнопку rollDiceBtn, но уже сделал три броска, браузер должен показать alert(), указывающий на необходимость выбора результата; в противном случае, он должен бросить кубики, как это происходит сейчас, и увеличить значение переменной rolls.


if (rolls === 3) {
    alert("You have made three rolls this round. Please select a score.");
  } else {
    rollDice();
    rolls ++;
  }




Шаг 5

Вам потребуется возможность обновлять rolls и round. Создайте функцию `updateStats` для обновления текста этих двух элементов соответствующими значениями. Затем вызывайте эту функцию при нажатии на кнопку `rollDiceBtn` и броске кубиков.


    const updateStats = () => {
      rollsElement.textContent = rolls;
      roundElement.textContent = round;
    }

rollDiceBtn.addEventListener("click", () => {
  if (rolls === 3) {
    alert("You have made three rolls this round. Please select a score.");
  } else {
    rolls++;
    rollDice();
    updateStats()
  }
});




Шаг 6 Каждый раз, когда вы бросаете кубик, вы можете получить три одинаковых числа, четыре одинаковых числа, фулл-хаус, стрит или случайную комбинацию чисел. В зависимости от результата вы можете сделать выбор и добавить очки к своему счету. Начните с создания функции с именем updateRadioOption, которая принимает в качестве аргументов индекс и значение счета. Она должна включить входные данные scoreInputs по этому индексу, установить значение этого входного параметра равным счету и отобразить score = ${score} в соответствующем элементе scoreSpans.


const updateRadioOption = (index, score) => {
  scoreInputs[index].disabled = false;
  scoreInputs[index].value = score;
  scoreSpans[index].textContent = `, score = ${score}`;
};




Шаг 7

Если при броске кубиков выпадет три одинаковых числа или четыре одинаковых числа, вы получите счет, равный сумме значений всех пяти кубиков. Для этого создайте функцию getHighestDuplicates, которая принимает массив чисел. Функция должна подсчитать, сколько раз каждое число встречается в массиве. Если число встречается четыре или более раз, вам нужно обновить параметр «Четверка одинаковых чисел» с помощью функции updateRadioOption. Если число встречается три или более раз, вам нужно обновить параметр «Три одинаковых числа». В обоих случаях значение счета должно быть равно сумме значений всех пяти кубиков. Независимо от результата, окончательный параметр должен быть обновлен значением 0. Обязательно вызовите функцию getHighestDuplicates при броске кубиков.


const getHighestDuplicates = (array) => {
  const counts = {};

  array.forEach((num) => {
    counts[num] = (counts[num] || 0) + 1;
  });

  const totalSumm = array.reduce((aac, curr) => aac + curr, 0);

  let maxFrequency = 0;
  for (const num in counts) {
    if (counts[num] > maxFrequency) {
      maxFrequency = counts[num];
    }
  }

  if (maxFrequency >= 4) {
    updateRadioOption(1, totalSumm);
    updateRadioOption(0, totalSumm);
  } else if (maxFrequency === 3) {
    updateRadioOption(0, totalSumm);
  }

  updateRadioOption(5, 0);
};

rollDiceBtn.addEventListener("click", () => {
  if (rolls === 3) {
    alert("You have made three rolls this round. Please select a score.");
  } else {
    rolls++;
    rollDice();
    updateStats();
    getHighestDuplicates(diceValuesArr);
  }
});







*/