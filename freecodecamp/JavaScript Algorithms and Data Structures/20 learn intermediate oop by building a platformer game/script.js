const startBtn = document.getElementById("start-btn");
const canvas = document.getElementById("canvas");
const startScreen = document.querySelector(".start-screen");
const checkpointScreen = document.querySelector(".checkpoint-screen");
const checkpointMessage = document.querySelector(".checkpoint-screen > p");

const ctx = canvas.getContext("2d");


















/*
Шаг 1

В этом проекте вы изучите основы объектно-ориентированного программирования среднего уровня, создав платформенную игру. Весь HTML и CSS предоставлены. Начните с использования document.getElementById() для получения элементов #start-btn и #canvas. Сохраните их в константных переменных с именами startBtn и canvas соответственно.




Шаг 2

Далее вам потребуется использовать document.querySelector, чтобы получить элементы .start-screen и .checkpoint-screen. Сохраните их в константных переменных с именами startScreen и checkpointScreen соответственно.




Шаг 3

Следующий шаг — выбрать элемент абзаца внутри элемента `.checkpoint-screen`. Используйте `document.querySelector` и комбинатор `>` для выбора элемента абзаца. Присвойте это значение константной переменной с именем `checkpointMessage`.


const checkpointMessage = document.querySelector(".checkpoint-screen > p");




Шаг 4

Прежде чем приступить к разработке функциональности игры, необходимо настроить возможность добавления 2D-графики. API Canvas можно использовать для создания графики в играх с помощью JavaScript и элемента HTML canvas. Вам потребуется использовать метод getContext, который предоставит контекст для отображения графики.
Пример кода:

canvas.getContext("2d");

Присвойте этот метод getContext константной переменной с именем ctx.


const ctx = canvas.getContext("2d");








*/