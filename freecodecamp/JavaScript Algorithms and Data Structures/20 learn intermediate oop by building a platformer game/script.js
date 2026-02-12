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

class Platform {
    constructor (x, y) {
        this.position = {
            x, y
        };
        this.width = 200;
        this.height = proportionalSize(40);
    }
    draw() {
        ctx.fillStyle = "#acd157";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}

const player = new Player();

const platformPositions = [
    { x: 500, y: proportionalSize(450) },
    { x: 700, y: proportionalSize(400) },
    { x: 850, y: proportionalSize(350) },
    { x: 900, y: proportionalSize(350) },
    { x: 1050, y: proportionalSize(150) },
    { x: 2500, y: proportionalSize(450) },
    { x: 2900, y: proportionalSize(400) },
    { x: 3150, y: proportionalSize(350) },
    { x: 3900, y: proportionalSize(450) },
    { x: 4200, y: proportionalSize(400) },
    { x: 4400, y: proportionalSize(200) },
    { x: 4700, y: proportionalSize(150) }
];

const platforms = platformPositions.map(
    (platform) => new Platform (platform.x, platform.y)
);

const animate = () => {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    platforms.forEach((platform) => {
        platform.draw()
    });

    player.update();

    if (keys.rightKey.pressed && player.position.x < proportionalSize(400)) {
        player.velocity.x = 5;
    }  else if (keys.leftKey.pressed && player.position.x > proportionalSize(100)) {
        player.velocity.x = -5;
    } else {
        player.velocity.x = 0;

        if (keys.rightKey.pressed && isCheckpointCollisionDetectionActive) {
            platforms.forEach((platform) => {
                platform.position.x -= 5;
            });
        } else if (keys.leftKey.pressed && isCheckpointCollisionDetectionActive) {
            platforms.forEach((platform) => {
                platform.position.x += 5;
            });
        }
    }

    platforms.forEach((platform) => {
        const collisionDetectionRules = [
            player.position.y + player.height <= platform.position.y,
            player.position.y + player.height + player.velocity.y >= platform.position.y,
            player.position.x >= platform.position.x - player.width / 2,
            player.position.x <= platform.position.x + platform.width - player.width / 3
        ];
    });
};

const keys = {
    rightKey: {
        pressed: false,
    },
    leftKey: {
        pressed: false,
    },
};

const movePlayer = (key, xVelocity, isPressed) => {
    if (!isCheckpointCollisionDetectionActive) {
        player.velocity.x = 0;
        player.velocity.y = 0;
        return;
    }
    switch (key) {
        case "ArrowLeft":
            keys.leftKey.pressed = isPressed;
            if (xVelocity === 0) {
                player.velocity.x = xVelocity;
            }
            player.velocity.x -= xVelocity;
            break;
        case "ArrowUp":
        case " ":
        case "Spacebar":
            player.velocity.y -= 8;
            break;
        case "ArrowRight":
            keys.rightKey.pressed = isPressed;
            if (xVelocity === 0) {
                player.velocity.x = xVelocity;
            }
            player.velocity.x += xVelocity;
    }
};

const startGame = () => {
    canvas.style.display = "block";
    startScreen.style.display = "none";
    animate();
};

startBtn.addEventListener("click", startGame);

window.addEventListener("keydown", ({key}) => {
    movePlayer(key, 8, true);
});

window.addEventListener("keyup", ({ key }) => {
    movePlayer(key, 0, false);
});










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




Шаг 47

Внутри оператора if присвойте число 5 скорости игрока по оси x.


player.velocity.x = 5;




Шаг 48

Добавьте оператор else if, в котором условие проверяет, была ли нажата левая клавиша и превышает ли позиция по оси X игрока значение proportionalSize(100). Здесь необходимо использовать функцию proportionalSize, чтобы гарантировать, что позиция по оси X игрока всегда пропорциональна размеру экрана. Внутри оператора else if присвойте число -5 скорости игрока по оси X.


 else if (keys.leftKey.pressed && player.position.x > proportionalSize(100)) {
    player.velocity.x = -5;
  }




Шаг 49

Добавьте блок else, который присваивает число 0 скорости игрока по оси x.


else {
    player.velocity.x = 0;
  }




Шаг 50

Следующий шаг — добавить функциональность, отвечающую за перемещение игрока по экрану. Создайте новую стрелочную функцию с именем movePlayer, которая имеет три параметра: key, xVelocity и isPressed.


const movePlayer = (key, xVelocity, isPressed) => {

};




Шаг 51

В игре игрок будет взаимодействовать с различными контрольными точками. Если isCheckpointCollisionDetectionActive равно false, вам нужно будет остановить движение игрока по осям x и y. Начните с создания оператора if, в котором условие проверяет, равно ли isCheckpointCollisionDetectionActive false. Помните, что вы можете использовать оператор ! для проверки того, является ли переменная false.


  if (!isCheckpointCollisionDetectionActive) {

  }




Шаг 52

Внутри оператора if установите скорость игрока по оси x равной 0, а скорость игрока по оси y равной 0. Ниже добавьте оператор return.


    player.velocity.x = 0;
    player.velocity.y = 0;
    return




Шаг 53

Ниже оператора if создайте оператор switch со значением key.


switch (key) {}




Шаг 54

Первый случай, который вам нужно добавить, — это когда нажата клавиша со стрелкой влево. Внутри оператора switch добавьте новый случай с именем "ArrowLeft".


  switch (key) {
    case "ArrowLeft":
  }




Шаг 55

Внутри блока case присвойте переменной isPressed значение keys.leftKey.pressed. Ниже добавьте оператор if, который проверяет, равно ли xVelocity нулю. Если да, присвойте значение xVelocity переменной player.velocity.x.


  switch (key) {
    case "ArrowLeft":
    keys.leftKey.pressed = isPressed;
    if (xVelocity === 0) {
      player.velocity.x = xVelocity;
    }
  }




Шаг 56

Ниже оператора if используйте оператор присваивания вычитания, чтобы вычесть xVelocity из player.velocity.x. Чтобы закрыть этот случай, обязательно добавьте оператор break.


      player.velocity.x -= xVelocity;
      break;




Шаг 57

Игрок может подпрыгнуть, используя клавишу стрелки вверх или пробел. Добавьте три новых случая для "Стрелка вверх", "" и "Пробел". Помните, что вы можете группировать случаи вместе, если они используют одну и ту же операцию. Внутри этих случаев используйте оператор присваивания вычитания, чтобы вычесть 8 из player.velocity.y. Чтобы закрыть эти случаи, обязательно добавьте оператор break.


    case "ArrowUp":
    case " ":
    case "Spacebar":
    player.velocity.y -= 8;
    break;




Шаг 58

Последний случай, который вам нужно добавить, будет для "ArrowRight". Внутри этого случая присвойте isPressed значение keys.rightKey.pressed. Добавьте оператор if, который проверяет, равно ли xVelocity нулю. Если да, присвойте xVelocity значение player.velocity.x. Ниже этого оператора if используйте оператор присваивания сложения, чтобы присвоить xVelocity значение player.velocity.x.


    case "ArrowRight":
      keys.rightKey.pressed = isPressed;
      if (xVelocity === 0) {
        player.velocity.x = xVelocity;
      }
      player.velocity.x += xVelocity;




Шаг 59

Теперь пришло время добавить обработчики событий, которые будут отвечать за вызов функции movePlayer. Начните с добавления обработчика события addEventListener к глобальному объекту window. В качестве аргументов передайте событие keydown и стрелочную функцию, которая использует деструктурирующее присваивание для получения свойства key из объекта события в параметре обработчика события. Вот синтаксис использования деструктурирующего присваивания в списке параметров стрелочной функции:
Пример кода

btn.addEventListener('click', ({ target }) => {
 console.log(target);
});


window.addEventListener("keydown", ({key}) => {});




Шаг 60

Внутри стрелочной функции вызовите функцию movePlayer и передайте в качестве аргументов key, 8 и true.


movePlayer(key, 8, true);




Шаг 61

Добавьте еще один addEventListener к глобальному объекту window, передайте в него событие keyup и используйте деструктуризацию для передачи свойства key из события.


window.addEventListener("keyup", ({ key }) => {});




Шаг 62

Внутри функции обратного вызова вызовите функцию movePlayer и передайте в качестве аргументов key, 0 и false.


movePlayer(key, 0, false);




Шаг 63

Прежде чем начать перемещать игрока по экрану, вам потребуется использовать функцию animate. Внутри функции startGame удалите player.draw() и вызовите функцию animate. Нажмите кнопку «Начать игру» и используйте клавиши со стрелками влево и вправо, чтобы перемещать игрока по экрану. Вы также можете использовать пробел или клавишу со стрелкой вверх, чтобы подпрыгнуть.


animate();




Шаг 64

Следующий шаг — создание платформ и логики платформы. Начните с создания нового класса Platform.


class Platform {}




Шаг 65 Внутри класса Platform создайте конструктор, который принимает координаты x и y.


class Platform {
  constructor (x, y) {}
}




Шаг 66

При работе с объектами, у которых имя свойства и значение совпадают, можно использовать сокращенный синтаксис имени свойства. Этот синтаксис позволяет опустить значение свойства, если оно совпадает с именем свойства.
Пример кода

// использование сокращенного синтаксиса имени свойства
obj = {
 a, b, c
}

Следующий код аналогичен:
Пример кода

obj = {
 a: a,
 b: b,
 c: c
}

Внутри конструктора добавьте this.position и присвойте ему объект с координатами x и y. Убедитесь, что используете сокращенный синтаксис свойства.


    this.position = {
      x, y
    }




Шаг 67

Далее добавьте свойство width в конструктор и присвойте ему число 200. Не забудьте использовать ключевое слово this для доступа к свойствам.




Шаг 68

Ниже добавьте свойство высоты и присвойте ему число proportionalSize(40). Вам необходимо использовать функцию proportionalSize(), чтобы убедиться, что высота пропорциональна размеру экрана. Не забудьте использовать ключевое слово this для доступа к свойствам.




Шаг 69 Далее добавьте метод draw в класс Platform.


  draw() {

  }




Шаг 70

Внутри метода draw присвойте свойству ctx.fillStyle значение "#acd157". Ниже этого вызовите метод ctx.fillRect и передайте в него координаты x и y, а также свойства width и height. Не забудьте добавить это перед каждым свойством.


  draw() {
    ctx.fillStyle = "#acd157";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }




Шаг 71

Следующим шагом будет создание списка позиций для платформ. Начните с создания новой константной переменной с именем platformPositions и присвойте ей пустой массив.


const platformPositions = [];




Шаг 72

Внутри platformPositions вам нужно добавить список позиций для платформ. Добавьте новый объект, имеющий свойство x со значением 500 и свойство y со значением proportionalSize(450).


const platformPositions = [
  {
    x: 500,
    y: proportionalSize(450)
  }
];




Шаг 73

Ниже добавьте еще один объект со свойством x со значением 700 и свойством y со значением proportionalSize(400).


const platformPositions = [
  { x: 500, y: proportionalSize(450) },
  { x: 700, y: proportionalSize(400) }
];




Шаг 74

Добавьте остальные позиции платформы в массив platformPositions со следующими значениями:
Пример кода

x=850 y=proportionalSize(350)
x=900 y=proportionalSize(350)
x=1050 y=proportionalSize(150)
x=2500 y=proportionalSize(450)
x=2900 y=proportionalSize(400)
x=3150 y=proportionalSize(350)
x=3900 y=proportionalSize(450)
x=4200 y=proportionalSize(400)
x=4400 y=proportionalSize(200)
x=4700 y=proportionalSize(150)




Шаг 75

Следующий шаг — создание списка новых экземпляров платформы с использованием класса Platform. Позже вы будете ссылаться на этот список для отрисовки платформ на холсте. Начните с создания новой константной переменной с именем platforms и присвойте ей значение platformPositions.map().




Шаг 76

В функции обратного вызова map передайте platform в качестве параметра и неявно верните создание нового экземпляра Platform со значениями platform.x и platform.y, переданными в качестве аргументов.


const platforms = platformPositions.map(
  (platform) => new Platform (platform.x, platform.y)
);



Шаг 77

Внутри функции `animate` вам нужно будет нарисовать каждую из платформ на холсте. Добавьте цикл `forEach`, который будет перебирать массив платформ. Внутри функции обратного вызова добавьте параметр `platform` и в теле функции вызовите метод `draw` для каждой platform.


platforms.forEach((platform) => {
platform.draw()
});




Шаг 78

Если вы попытаетесь запустить игру, вы заметите, что платформы отображаются на экране. Но по мере движения игрока вправо платформа не движется вместе с ним. Чтобы исправить эту проблему, вам нужно будет обновлять координату x платформы по мере перемещения игрока по экрану. Внутри функции animate добавьте условие для проверки нажатия правой клавиши и если isCheckpointCollisionDetectionActive имеет значение true.


if (keys.rightKey.pressed && isCheckpointCollisionDetectionActive) {
}




Шаг 79

Внутри условия добавьте цикл forEach для перебора массива platforms. Внутри функции обратного вызова используйте platform в качестве параметра. Внутри цикла используйте оператор присваивания вычитания, чтобы вычесть 5 из x-позиции платформы.


      platforms.forEach((platform) => {
        platform.position.x -= 5;
      });




Шаг 80

Далее добавьте оператор else if для проверки нажатия левой клавиши и условия isCheckpointCollisionDetectionActive. Внутри этого условия добавьте цикл forEach для перебора массива platforms. Внутри цикла используйте оператор присваивания сложения, чтобы добавить 5 к позиции x платформы.


 else if (keys.leftKey.pressed && isCheckpointCollisionDetectionActive) {
      platforms.forEach((platform) => {
        platform.position.x += 5;
      });




Шаг 81

При запуске игры вы заметите, что положение платформ анимируется вместе с игроком. Но если вы попытаетесь прыгнуть под одну из платформ, то пропрыгнете сквозь неё. Чтобы исправить эту проблему, вам потребуется добавить в игру логику обнаружения столкновений. Начните с вызова метода forEach для массива platforms. В качестве параметра функции обратного вызова передайте platform.


platforms.forEach((platform) => {});




Шаг 82

Внутри функции обратного вызова создайте новую константную переменную с именем collisionDetectionRules и присвойте ей пустой массив. В этот массив добавьте логическое выражение, которое проверяет, меньше ли или равно значение Y-позиции игрока плюс высота игрока значению Y-позиции платформы.


    const collisionDetectionRules = [
      player.position.y + player.height <= platform.position.y,
    ];




Шаг 83

Добавьте еще одно логическое выражение, которое проверяет, больше ли или равна сумма координат игрока по оси Y, его высоты и скорости по оси Y координате платформы.


player.position.y + player.height + player.velocity.y >= platform.position.y




Шаг 84

Ниже этого логического выражения добавьте еще одно логическое выражение, которое проверяет, больше ли или равно ли положение игрока по оси X положению платформы по оси X минус половина ширины игрока. Используйте оператор деления (/) для вычисления половины ширины игрока.


player.position.x >= platform.position.x - player.width / 2




Шаг 85

Добавьте последнее логическое выражение, которое проверяет, меньше ли или равно ли x-координата игрока сумме x-координат платформы плюс ширина платформы минус одна треть ширины игрока. Используйте оператор деления (/) для вычисления одной трети ширины игрока.


player.position.x <= platform.position.x + platform.width - player.width / 3








*/