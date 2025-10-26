const playlistSongs = document.getElementById("playlist-songs");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
const shuffleButton = document.getElementById("shuffle");

let allSongs = [
    {
        id: 0,
        title: "Scratching The Surface",
        artist: "Quincy Larson",
        duration: "4:25",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/scratching-the-surface.mp3",
    },
    {
        id: 1,
        title: "Can't Stay Down",
        artist: "Quincy Larson",
        duration: "4:15",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3",
    },
    {
        id: 2,
        title: "Still Learning",
        artist: "Quincy Larson",
        duration: "3:51",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/still-learning.mp3",
    },
    {
        id: 3,
        title: "Cruising for a Musing",
        artist: "Quincy Larson",
        duration: "3:34",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/cruising-for-a-musing.mp3",
    },
    {
        id: 4,
        title: "Never Not Favored",
        artist: "Quincy Larson",
        duration: "3:35",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/never-not-favored.mp3",
    },
    {
        id: 5,
        title: "From the Ground Up",
        artist: "Quincy Larson",
        duration: "3:12",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/from-the-ground-up.mp3",
    },
    {
        id: 6,
        title: "Walking on Air",
        artist: "Quincy Larson",
        duration: "3:25",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/walking-on-air.mp3",
    },
    {
        id: 7,
        title: "Can't Stop Me. Can't Even Slow Me Down.",
        artist: "Quincy Larson",
        duration: "3:52",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/cant-stop-me-cant-even-slow-me-down.mp3",
    },
    {
        id: 8,
        title: "The Surest Way Out is Through",
        artist: "Quincy Larson",
        duration: "3:10",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/the-surest-way-out-is-through.mp3",
    },
    {
        id: 9,
        title: "Chasing That Feeling",
        artist: "Quincy Larson",
        duration: "2:43",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/chasing-that-feeling.mp3",
    },
];

const audio = new Audio();

let userData = {
    songs: [...allSongs],
    currentSong: null,
    songCurrentTime: 0,
};

const printGreeting = () => {
    console.log("Hello there!");
}
printGreeting();

const printMessage = org => {
    console.log(`${org} is awesome!`);
}
printMessage("freeCodeCamp");

const addTwoNumbers = (num1, num2) => num1 + num2;
console.log(addTwoNumbers(3, 4));






















/*
Шаг 1 В этом проекте вы изучите основные методы работы со строками и массивами, создав приложение музыкального проигрывателя. Вы сможете воспроизводить, приостанавливать, пропускать и перемешивать песни. HTML и CSS этого проекта уже предоставлены, поэтому вы можете сосредоточиться на JavaScript. Начнем с доступа к элементам #playlist-songs, #play и #pause с помощью метода getElementById(). Присвойте их переменным playlistSongs, playButton и pauseButton соответственно.

***

const playlistSongs = document.getElementById("playlist-songs");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");



Шаг 2

Доступ к элементам #next, #previous и #shuffle из HTML-файла. Назначьте их переменным nextButton, previousButton и shuffleButton соответственно.

const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
const shuffleButton = document.getElementById("shuffle");



Шаг 3

Далее создайте массив для хранения всех песен. Создайте пустой массив allSongs.

let allSongs = [];



Шаг 4

В массиве allSongs создайте объект со следующими свойствами и значениями:
Пример кода

id: 0,
title: "Scratching The Surface",
artist: "Quincy Larson",
duration: "4:25",
src: "https://cdn.freecodecamp.org/curriculum/js-music-player/scratching-the-surface.mp3",


{
  id: 0,
  title: "Scratching The Surface",
  artist: "Quincy Larson",
  duration: "4:25",
  src: "https://cdn.freecodecamp.org/curriculum/js-music-player/scratching-the-surface.mp3",
}



Шаг 5

Добавьте второй объект со следующими ключами и значениями:
Пример кода

id: 1,
title: "Can't Stay Down",
artist: "Quincy Larson",
duration: "4:15",
src: "https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3",


{
  id: 1,
  title: "Can't Stay Down",
  artist: "Quincy Larson",
  duration: "4:15",
  src: "https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3",
}



Шаг 7

Мы добавили оставшиеся песни в массив allSongs. Далее вы узнаете об API веб-аудио и о том, как использовать его для воспроизведения песен. Все современные браузеры поддерживают API веб-аудио, который позволяет генерировать и обрабатывать аудио в веб-приложениях. Используйте const для создания переменной с именем audio и присвойте ей значение new Audio(). Это создаст новый элемент HTML5 audio.

const audio = new Audio();



Шаг 8

Ваш музыкальный проигрыватель должен отслеживать песни, текущую воспроизводимую песню и её время. Для этого вам потребуется создать объект для хранения этой информации. Начнем с объявления новой переменной userData с помощью ключевого слова let и присвоения ей пустого объекта.



Шаг 9

Поскольку пользователи смогут перемешивать и удалять песни из плейлиста, вам необходимо создать копию массива allSongs, не изменяя исходный. Здесь пригодится оператор расширения. Оператор расширения (...) позволяет копировать все элементы из одного массива в другой. Его также можно использовать для объединения нескольких массивов в один. В примере ниже arr1 и arr2 были расширены в combinedArr:
Пример кода

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, ...arr2];
console.log(combinedArr); // Вывод: [1, 2, 3, 4, 5, 6]

Внутри объекта userData создайте свойство songs. Для его значения распределите allSongs в массив.

let userData = {
  songs: [...allSongs],
};



Шаг 10

Для обработки информации о текущей песне и отслеживания времени её воспроизведения создайте свойства currentSong и songCurrentTime. Задайте для них значения null и 0 соответственно.


let userData = {
  songs: [...allSongs],
  currentSong: null,
  songCurrentTime: 0,
};



Шаг 11

В предыдущих проектах вы использовали обычные функции. Но в остальных проектах вы будете работать со стрелочными функциями. Следующие несколько шагов будут посвящены основам стрелочных функций. Стрелочная функция — это анонимное функциональное выражение и более короткий способ записи функций. «Анонимность» означает, что у функции нет имени. Стрелочные функции всегда анонимны. Вот основной синтаксис:
Пример кода

() => {}

Присваивая определение стрелочной функции переменной, вы связываете её с идентификатором.
Пример кода

const exampleFunction = () =>
{
// здесь находится код
}

Создайте новую стрелочную функцию и присвойте её переменной printGreeting. Внутри тела функции используйте метод console.log() для вывода строки Hello there!.

const printGreeting = () => {
  console.log("Hello there!");
}


Шаг 12

Чтобы вызвать выражение именованной стрелочной функции, можно обратиться к функции по её имени.
Пример кода

exampleArrowFunction();

Вызовите функцию под определением функции printGreeting. Откройте консоль, чтобы увидеть вывод.



Шаг 13

Как и обычные функции, стрелочные функции могут принимать несколько параметров. Вот пример именованной стрелочной функции с одним параметром:
Пример кода

const greet = (name) => {
 console.log(`Hello, ${name}!`);
 };

 Если у функции только один параметр, вы можете опустить скобки вокруг списка параметров, например:
 Пример кода
 const greet = name => {
  console.log(`Hello, ${name}!`);
  };

  Создайте новую именованную стрелочную функцию с именем printMessage и одним параметром с именем org. В тело этой функции добавьте оператор console. Внутри этого оператора console добавьте шаблонный литерал ${org} is awesome!. Под функцией printMessage вызовите функцию и передайте ей строку "freeCodeCamp" в качестве аргумента. Откройте консоль, чтобы увидеть результат.

  const printMessage = org => {
  console.log(`${org} is awesome!`);
  }
  printMessage("freeCodeCamp");



Шаг 14

Как и обычные функции, стрелочные функции могут возвращать значения. Вот пример стрелочной функции, возвращающей результат умножения двух чисел:
Пример кода

const multiplyTwoNumbers = (num1, num2) => {
 return num1 * num2;
 }
  // Вывод: 12
  console.log(multiplyTwoNumbers(3, 4));

  Создайте новую переменную addTwoNumbers и присвойте ей стрелочную функцию. Эта стрелочная функция должна принимать два параметра: num1 и num2. Внутри тела функции верните выражение сложения num1 и num2. Под функцией addTwoNumbers добавьте консольный оператор. Внутри этого консольного оператора вызовите функцию addTwoNumbers и передайте ей числа 3 и 4 в качестве аргументов. Откройте консоль, чтобы увидеть вывод.

const addTwoNumbers = (num1, num2) => {
return num1 + num2;
}
console.log(addTwoNumbers(3, 4));



Шаг 15

Если стрелочная функция возвращает простое выражение, можно опустить ключевое слово return и фигурные скобки {}. Это называется неявным возвратом.
Пример кода

const multiplyTwoNumbers = (num1, num2) => num1 * num2;

Если ваша стрелочная функция содержит несколько строк кода, необходимо использовать ключевое слово return и фигурные скобки {}.
Пример кода

const getTax = (price) => {
 const taxRate = 0.08;
 const tax = price * taxRate; return tax;
 };

 Рефакторинг или обновление функции addTwoNumbers: удалите ключевое слово return и фигурные скобки {}. Вместо этого функция addTwoNumbers должна использовать неявный возврат. Откройте консоль, чтобы убедиться, что вывод по-прежнему корректен.


const addTwoNumbers = (num1, num2) => num1 + num2;



















 */