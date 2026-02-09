const startBtn = document.getElementById("start-btn");
const canvas = document.getElementById("canvas");
const startScreen = document.querySelector(".start-screen");
const checkpointScreen = document.querySelector(".checkpoint-screen");
const checkpointMessage = document.querySelector(".checkpoint-screen > p");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
const gravity = 0.5;
let isCheckpointCollisionDetectionActive = true;

















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




Шаг 5

Элемент canvas имеет свойство width, которое представляет собой положительное число, обозначающее ширину холста. Пример кода

canvas.width

Ниже объявлений констант добавьте свойство width к переменной canvas.


canvas.width;




Шаг 6

Свойство innerWidth — это число, представляющее внутреннюю ширину окна браузера. Присвойте значение innerWidth свойству canvas.width.


canvas.width = innerWidth;




Шаг 7

Свойство innerHeight — это число, представляющее внутреннюю высоту окна браузера. Ниже свойства canvas.width добавьте свойство height к переменной canvas и присвойте ей значение innerHeight.


canvas.height = innerHeight;




Шаг 8

В вашей платформенной игре главному игроку нужно будет прыгать между различными платформами. После прыжка игрока нужно будет применить гравитацию, чтобы вернуть его на землю. Создайте новую константную переменную с именем gravity и присвойте ей число 0,5.


const gravity = 0.5;




Шаг 9

В игре игроку будет предоставлена возможность пересекать различные контрольные точки. Вам необходимо отслеживать статус обнаружения столкновений на контрольных точках. Используйте команду `let` для создания новой переменной с именем `isCheckpointCollisionDetectionActive` и присвойте ей значение `true`.


let isCheckpointCollisionDetectionActive = true;











*/