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
    }
];




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


 */