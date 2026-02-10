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

const proportionalSize = (size) => {
    return innerHeight < 500 ? Math.ceil((size / 500) * innerHeight) : size;
};

class Player {
    constructor() {
        this.position = {
            x: proportionalSize(10),
            y: proportionalSize(400),
        };
        this.velocity = {
            x: 0,
            y: 0,
        }
        this.width = proportionalSize(40);
        this.height = proportionalSize(40);
    }
    draw() {
        ctx.fillStyle = "#99c9ff";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
    update() {
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        if ((this.velocity.y + this.height + this.position.y) <= canvas.height) {
            if (this.position.y < 0) {
                this.position.y = 0;
                this.velocity.y = gravity;
            }
            this.velocity.y += gravity;
        } else {
            this.velocity.y = 0;
        }

        if (this.position.x < this.width) {
            this.position.x = this.width;
        }

        if (this.position.x >= canvas.width - this.width * 2) {
            this.position.x = canvas.width - this.width * 2;
        }
    }
}

const player = new Player();

const animate = () => {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.update();
    if (keys.rightKey.pressed && player.position.x < proportionalSize(400)) {

    }
};

const keys = {
    rightKey: {
        pressed: false,
    },
    leftKey: {
        pressed: false,
    },
};

const startGame = () => {
    canvas.style.display = "block";
    startScreen.style.display = "none";
    player.draw();
};

startBtn.addEventListener("click", startGame);










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




Шаг 10

При разработке игры вам необходимо убедиться, что размеры элементов в игре адаптивны и подстраиваются под разные размеры экрана. Начните с создания стрелочной функции с именем proportionalSize, которая принимает в качестве параметра размер size.


const proportionalSize = (size) => {};




Шаг 11

Ширина и высота основного игрока, платформ и контрольных точек будут пропорционально зависеть от внутренней высоты экрана браузера. Цель состоит в том, чтобы сделать игру отзывчивой и визуально согласованной на экранах разных размеров. Внутри вашей функции proportionalSize вам нужно будет вернуть тернарный оператор, который проверяет, меньше ли внутренняя высота 500. Если да, верните Math.ceil((size / 500) * innerHeight), в противном случае верните size.


return innerHeight < 500 ? Math.ceil((size / 500) * innerHeight) : size;




Шаг 12

Следующий шаг — определить некоторые характеристики главного игрока игры. Начните с создания нового класса под названием Player.


class Player {};




Шаг 13

В классе Player вам необходимо определить значения позиции, скорости, ширины и высоты игрока. Все эти значения будут определены в методе конструктора. Создайте пустой конструктор внутри класса Player.


  constructor() {

  }




Шаг 14

Внутри конструктора используйте ключевое слово `this`, чтобы установить свойство `position` в пустой объект.


this.position = {};




Шаг 15

Внутри объекта position добавьте новый ключ с именем x и значением proportionalSize(10). После этого добавьте еще один ключ с именем y и значением proportionalSize(400). Здесь необходимо использовать функцию proportionalSize, чтобы гарантировать, что положение игрока всегда пропорционально размеру экрана. Это важно, поскольку вы хотите, чтобы игрок мог перемещаться по экрану независимо от его размера.


    this.position = {
      x: proportionalSize(10),
      y: proportionalSize(400),
    }




Шаг 16 Ниже объекта позиционирования используйте ключевое слово `this`, чтобы присвоить свойству `velocity` значение объекта. Внутри этого нового объекта `velocity` создайте ключ с именем `x` со значением `0` и новый ключ с именем `y` со значением `0`. Свойство `velocity` будет использоваться для хранения скорости игрока в направлениях x и y.


    this.velocity ={
      x: 0,
      y: 0,
    }




Шаг 17

Ниже объекта Velocity используйте ключевое слово this, чтобы установить свойство width равным proportionalSize(40). Ниже свойства width используйте ключевое слово this, чтобы установить свойство height равным proportionalSize(40). Здесь вы используете функцию proportionalSize() для установки свойств width и height вашего класса пропорционально высоте экрана.


    this.width = proportionalSize(40);
    this.height = proportionalSize(40);




Шаг 18

Следующий шаг — создание метода draw(), который будет отвечать за определение ширины, высоты, положения и цвета заливки игрока. Ниже конструктора создайте пустой метод draw().


draw() {}




Шаг 19

Теперь вам нужно задать цвет для вашего игрока. В методе draw() присвойте строку "#99c9ff" переменной ctx.fillStyle.


  draw() {
    ctx.fillStyle = "#99c9ff";
  }




Шаг 20

Ниже метода `ctx.fillStyle` необходимо создать фигуру игрока, вызвав метод `fillRect()` на объекте `ctx`, который вы создали ранее.

Пример кода

fillRect(x, y, width, height)

Внутри метода `fillRect()` добавьте значения `this.position.x`, `this.position.y`, `this.width` и `this.height`.


ctx.fillRect(this.position.x, this.position.y, this.width, this.height);




Шаг 21

Следующий шаг — создание метода `update()`, который будет отвечать за обновление положения и скорости игрока по мере его перемещения в игре. Ниже метода `draw()` создайте пустой метод `update()`.


  update() {

  }




Шаг 22

Внутри метода update() вызовите метод draw(), чтобы гарантировать, что игрок будет постоянно отображаться на экране по мере обновления игры. Не забудьте добавить ключевое слово this.


  update() {
    this.draw();
  }




Шаг 23

Когда игрок движется вправо, вам потребуется скорректировать его скорость. Используйте оператор присваивания сложения, чтобы сложить координату x скорости с координатой x игрока. Не забудьте добавить ключевое слово this для скорости и положения.


this.position.x += this.velocity.x;




Шаг 24

Когда игрок подпрыгивает, вам нужно добавить логику для корректировки его скорости. Используйте оператор присваивания сложения, чтобы добавить координату Y скорости к координате Y игрока. Не забудьте добавить ключевое слово this для скорости и положения.


this.position.y += this.velocity.y;




Шаг 25

Сейчас, когда игрок подпрыгивает, он может выйти за пределы высоты холста. Чтобы это исправить, вам нужно добавить условие, которое предотвратит падение игрока за пределы высоты холста. Создайте пустое условное выражение, которое проверяет, меньше ли или равна ли сумма координат игрока по оси Y, его высоты и скорости по оси Y высоте холста.


    if ((this.velocity.y + this.height + this.position.y) <= canvas.height) {

    };




Шаг 26

В операторе if добавьте еще один оператор if для проверки, меньше ли позиция игрока по оси Y, чем 0.


      if (this.position.y < 0) {

      }




Шаг 27

Внутри внутреннего оператора if присвойте значение 0 позиции игрока по оси Y.


      if (this.position.y < 0) {
        this.position.y = 0;
      }




Шаг 28

Ниже this.position.y = 0 присвойте gravity   Y координате скорости.


this.velocity.y = gravity;




Шаг 29

Ниже внутреннего оператора if используйте оператор присваивания сложения, чтобы добавить силу тяжести к скорости по оси Y.


this.velocity.y += gravity;




Шаг 30

Добавьте условие else, которое присваивает значение 0 переменной this.velocity.y.


    } else {
      this.velocity.y = 0;
    }




Шаг 31

Последнее условие, которое необходимо добавить в класс Player, — это убедиться, что игрок остается в пределах границ экрана холста и не смещается слишком далеко влево. Создайте оператор if для проверки, меньше ли позиция игрока по оси X ширины.


if (this.position.x < this.width) {

}




Шаг 32

Внутри оператора if присвойте ширину по оси X позиции игрока.


this.position.x = this.width;




Шаг 33

Для последнего условия вам нужно проверить, не вышла ли позиция по оси X игрока за правый край холста. Если да, вам нужно установить позицию по оси X игрока на максимальное значение, чтобы игрок случайно не вышел за пределы экрана справа. Внутри вашего метода обновления создайте оператор if, который проверяет, равно ли this.position.x >= canvas.width - this.width * 2.


if (this.position.x >= canvas.width - this.width * 2) {

}




Шаг 34

Внутри оператора if присвойте переменной this.position.x значение canvas.width - this.width * 2. Это гарантирует, что позиция игрока по оси X никогда не выйдет за правый край холста.


this.position.x >= canvas.width - this.width * 2




Шаг 35

Следующий шаг — использовать ключевое слово `new` для создания нового экземпляра объекта `Player` и присвоить его новой константной переменной с именем `player`.


const player = new Player();




Шаг 36

Теперь пришло время увидеть вашего нового игрока, нарисованного на экране. Начните с создания пустой стрелочной функции с именем startGame.


const startGame = () => {

};




Шаг 37

Внутри функции startGame вам нужно отобразить элемент canvas и скрыть контейнер startScreen. Используйте canvas.style.display, чтобы изменить значение display на "block". Ниже используйте startScreen.style.display, чтобы изменить значение display на "none".


  canvas.style.display = "block";
  startScreen.style.display = "none";




Шаг 38

Чтобы визуализировать игрока на экране, необходимо нарисовать его на холсте. Внутри функции startGame вызовите метод .draw() вашего объекта player.


player.draw();




Шаг 39

Теперь пришло время добавить функциональность для кнопки «Начать игру». Добавьте обработчик события addEventListener к startBtn и передайте в него событие клика и ссылку на функцию startGame. Нажмите на кнопку «Начать игру», и вы увидите на экране светло-голубой квадрат, представляющий основного игрока.


startBtn.addEventListener("click", startGame);




Шаг 40

Теперь, когда вы видите плеер на экране, пора начать добавлять функциональность для перемещения плеера по экрану. Создайте новую пустую функцию стрелки с именем animate.


const animate = () => {

};




Шаг 41

Веб-API requestAnimationFrame() принимает функцию обратного вызова и используется для обновления анимации на экране. Функция animate отвечает за обновление положения игрока и его непрерывную отрисовку на холсте. Внутри функции animate вызовите API requestAnimationFrame() и передайте в качестве аргумента функцию animate.


requestAnimationFrame(animate);




Шаг 42

По мере продвижения игрока по игре вам потребуется очистить холст перед рендерингом следующего кадра анимации. Для этого можно использовать веб-API clearRect(). Он принимает аргументы x, y, width и height. Внизу вашего requestAnimationFrame вызовите метод clearRect() для переменной ctx и передайте в качестве аргументов 0, 0, canvas.width, canvas.height.


ctx.clearRect(0, 0, canvas.width, canvas.height);




Шаг 43

Следующий шаг — обновление позиции игрока по мере его перемещения в игре. Внизу вызова метода `ctx.clearRect()` вызовите метод `update()` для игрока.


player.update();




Шаг 44 Для управления движением игрока в игре вам потребуется отслеживать нажатия клавиш со стрелками влево и вправо. Создайте новую константную переменную с именем keys и присвойте ей пустой объект.


const keys = {};




Шаг 45

Внутри объекта keys добавьте новый ключ с именем rightKey и присвойте ему объект с парой ключ-значение pressed: false. Ниже объекта rightKey создайте объект leftKey и присвойте ему объект с парой ключ-значение pressed: false.


const keys = {
  rightKey: {
    pressed: false,
  },
  leftKey: {
    pressed: false,
  },
};




Шаг 46

Следующий шаг — добавить логику для увеличения или уменьшения скорости игрока в зависимости от того, движется ли он влево или вправо от экрана. Внутри функции animate создайте оператор if, в котором проверяется, была ли нажата правая клавиша и меньше ли позиция игрока по оси X, чем proportionalSize(400). Здесь необходимо использовать функцию proportionalSize, чтобы гарантировать, что позиция игрока по оси X всегда пропорциональна размеру экрана.


  if (keys.rightKey.pressed && player.position.x < proportionalSize(400)) {

  }











*/