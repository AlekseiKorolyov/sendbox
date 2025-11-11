const playlistSongs = document.getElementById("playlist-songs");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
const shuffleButton = document.getElementById("shuffle");

const allSongs = [
    {
        id: 0,
        title: "Hello World",
        artist: "Rafael",
        duration: "0:23",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/hello-world.mp3",
    },
    {
        id: 1,
        title: "In the Zone",
        artist: "Rafael",
        duration: "0:11",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/in-the-zone.mp3",
    },
    {
        id: 2,
        title: "Camper Cat",
        artist: "Rafael",
        duration: "0:21",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/camper-cat.mp3",
    },
    {
        id: 3,
        title: "Electronic",
        artist: "Rafael",
        duration: "0:15",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/electronic.mp3",
    },
    {
        id: 4,
        title: "Sailing Away",
        artist: "Rafael",
        duration: "0:22",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/sailing-away.mp3",
    },
];

const audio = new Audio();
let userData = {
    songs: [...allSongs],
    currentSong: null,
    songCurrentTime: 0,
};

const playSong = (id) => {
    const song = userData?.songs.find((song) => song.id === id);
    audio.src = song.src;
    audio.title = song.title;

    if (userData?.currentSong === null || userData?.currentSong.id !== song.id) {
        audio.currentTime = 0;
    } else {
        audio.currentTime = userData?.songCurrentTime;
    }
    userData.currentSong = song;
    playButton.classList.add("playing");

    highlightCurrentSong();
    setPlayerDisplay();
    setPlayButtonAccessibleText();
    audio.play();
};

const pauseSong = () => {
    userData.songCurrentTime = audio.currentTime;

    playButton.classList.remove("playing");
    audio.pause();
};

const playNextSong = () => {
    if (userData?.currentSong === null) {
        playSong(userData?.songs[0].id);
    } else {
        const currentSongIndex = getCurrentSongIndex();
        const nextSong = userData?.songs[currentSongIndex + 1];

        playSong(nextSong.id);
    }
};

const playPreviousSong = () => {
    if (userData?.currentSong === null) return;
    else {
        const currentSongIndex = getCurrentSongIndex();
        const previousSong = userData?.songs[currentSongIndex - 1];

        playSong(previousSong.id);
    }
};

const shuffle = () => {
    userData?.songs.sort(() => Math.random() - 0.5);
    userData.currentSong = null;
    userData.songCurrentTime = 0;

    renderSongs(userData?.songs);
    pauseSong();
    setPlayerDisplay();
    setPlayButtonAccessibleText();
};

const deleteSong = (id) => {
    if (userData?.currentSong?.id === id) {
        userData.currentSong = null;
        userData.songCurrentTime = 0;

        pauseSong();
        setPlayerDisplay();
    }

    userData.songs = userData?.songs.filter((song) => song.id !== id);
    renderSongs(userData?.songs);
    highlightCurrentSong();
    setPlayButtonAccessibleText();

};

const setPlayerDisplay = () => {
    const playingSong = document.getElementById("player-song-title");
    const songArtist = document.getElementById("player-song-artist");
    const currentTitle = userData?.currentSong?.title;
    const currentArtist = userData?.currentSong?.artist;

    playingSong.textContent = currentTitle ? currentTitle : "";
    songArtist.textContent = currentArtist ? currentArtist : "";
};

const highlightCurrentSong = () => {
    const playlistSongElements = document.querySelectorAll(".playlist-song");
    const songToHighlight = document.getElementById(
        `song-${userData?.currentSong?.id}`
    );

    playlistSongElements.forEach((songEl) => {
        songEl.removeAttribute("aria-current");
    });

    if (songToHighlight) songToHighlight.setAttribute("aria-current", "true");
};

const renderSongs = (array) => {
    const songsHTML = array
        .map((song)=> {
            return `
      <li id="song-${song.id}" class="playlist-song">
      <button class="playlist-song-info" onclick="playSong(${song.id})">
          <span class="playlist-song-title">${song.title}</span>
          <span class="playlist-song-artist">${song.artist}</span>
          <span class="playlist-song-duration">${song.duration}</span>
      </button>
      <button onclick="deleteSong(${song.id})" class="playlist-song-delete" aria-label="Delete ${song.title}">
          <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#4d4d62"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/></svg>
        </button>
      </li>
      `;
        })
        .join("");

    playlistSongs.innerHTML = songsHTML;

    if (userData?.songs.length === 0) {
        const resetButton = document.createElement("button");
        const resetText = document.createTextNode("Reset Playlist");

        resetButton.id = "reset";
        resetButton.ariaLabel = "Reset playlist";
        resetButton.appendChild(resetText);
        playlistSongs.appendChild(resetButton);

        resetButton.addEventListener("click", () => {
            userData.songs = [...allSongs];

            renderSongs(sortSongs());
            setPlayButtonAccessibleText();
            resetButton.remove();
        });

    };

};

const setPlayButtonAccessibleText = () => {
    const song = userData?.currentSong || userData?.songs[0];

    playButton.setAttribute(
        "aria-label",
        song?.title ? `Play ${song.title}` : "Play"
    );
};

const getCurrentSongIndex = () => userData?.songs.indexOf(userData?.currentSong);

playButton.addEventListener("click", () => {
    if (userData?.currentSong === null) {
        playSong(userData?.songs[0].id);
    } else {
        playSong(userData?.currentSong.id);
    }
});

pauseButton.addEventListener("click",  pauseSong);

nextButton.addEventListener("click", playNextSong);

previousButton.addEventListener("click", playPreviousSong);

shuffleButton.addEventListener("click", shuffle);

audio.addEventListener("ended", () => {
    const currentSongIndex = getCurrentSongIndex();
    const nextSongExists = userData?.songs[currentSongIndex + 1] !== undefined;
    if (nextSongExists) {
        playNextSong();
    } else {
        userData.currentSong = null;
        userData.songCurrentTime = 0;
    }
});

const sortSongs = () => {
    userData?.songs.sort((a,b) => {
        if (a.title < b.title) {
            return -1;
        }

        if (a.title > b.title) {
            return 1;
        }

        return 0;
    });

    return userData?.songs;
};

renderSongs(sortSongs());
setPlayButtonAccessibleText();












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



Шаг 17

Чтобы отобразить песни в пользовательском интерфейсе (UI), вам потребуется создать функцию. Используйте синтаксис стрелочных функций для создания функции renderSongs, принимающей массив в качестве параметра.


const renderSongs = array => {}



Шаг 18

Когда песни отображаются на странице, на ней должны отображаться название, исполнитель, длительность каждой песни и кнопка удаления. В следующих нескольких шагах вы узнаете, как добавить новый HTML-код для каждой песни с помощью метода map(). Этот метод будет подробно описан в следующем шаге. Начнем с объявления переменной songsHTML с помощью const и присвоения ей array.map().

const songsHTML = array.map();



Шаг 19

Метод map() используется для итерации по массиву и возврата нового массива. Он полезен, когда требуется создать новый массив на основе значений существующего массива. Например:
Пример кода

const numbers = [1, 2, 3];
const doubledNumbers = numbers.map((number) => number * 2);
 // doubledNumbers будет равен [2, 4, 6]

 Обратите внимание, что метод map() принимает функцию в качестве аргумента. Это называется функцией обратного вызова, которая передаётся другой функции в качестве аргумента. В приведённом выше примере функция обратного вызова (number) => number * 2 выполняется для каждого элемента массива numbers. Затем метод map() возвращает новый массив с результатами. Передайте функцию обратного вызова методу map(). Функция обратного вызова должна принимать song в качестве параметра, использовать синтаксис стрелочных функций и иметь пустое тело.


const songsHTML = array.map((song) => {});



Шаг 20

Внутри функции map() добавьте оператор return с обратными кавычками, в который будут вставлены все элементы, отвечающие за отображение информации о песне. Внутри обратных кавычек создайте элемент li с атрибутом id song-${song.id} и атрибутом class playlist-song.

return `<li id="song-${song.id}" class="playlist-song"></li>`;



Шаг 21

Создайте элемент «кнопка» с классом playlist-song-info. Внутри кнопки добавьте элемент span с классом playlist-song-title, а затем добавьте текст song.title.

    <button class="playlist-song-info">
    <span class="playlist-song-title">${song.title}</span>
    </button>



Шаг 22

Внутри элемента button создайте ещё два элемента span. Первый элемент span должен иметь класс playlist-song-artist. Между тегами span добавьте ${song.artist}. Второй элемент span должен иметь класс playlist-song-duration. Между тегами span добавьте ${song.duration}.

<button class="playlist-song-info">
          <span class="playlist-song-title">${song.title}</span>
          <span class="playlist-song-artist">${song.artist}</span>
          <span class="playlist-song-duration">${song.duration}</span>
      </button>



Шаг 23 Создайте ещё один элемент «кнопка» с классом playlist-song-delete и атрибутом aria-label, установленным на Delete, с интерполяцией song.title. Для содержимого значка удаления вставьте следующий SVG-код:
Пример кода

<svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#4d4d62"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11,097 5,32587 10,8143C4,94102 10,5316 4,88969 10,0281 5,21121 9,68974L6,8168 7,99999L5,21122 6,31026C4,8897 5,97188 4,94102 5,4684 5,32587 5,18571Z" fill="white"/></svg>

    <button class="playlist-song-delete" aria-label="Delete ${song.title}">
    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#4d4d62"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/></svg>
    </button>


Шаг 24

Сейчас songsHTML — это массив. Если вы попытаетесь отобразить его как есть, вы увидите песни, разделенные запятыми. Это нежелательно, поскольку мы хотим отобразить песни в виде списка. Чтобы исправить это, вам нужно объединить массив в одну строку с помощью метода join(). Метод join() используется для объединения всех элементов массива в одну строку. Он принимает необязательный параметр, называемый разделителем, который используется для разделения каждого элемента массива. Например:
Пример кода

const exampleArr = ["This", "is", "a", "sentence"];
const sentence = exampleArr.join(" ");// Разделитель принимает символ пробела
console.log(sentence); // Вывод: "This is a sentence"

Свяжите метод join() с методом map() и передайте пустую строку в качестве разделителя. Чтобы объединить несколько методов в цепочку, вы можете вызвать метод join() для результата метода map(). Например: Пример кода array.map().join();

const renderSongs = (array) => {
  const songsHTML = array
    .map((song)=> {
      return `
      <li id="song-${song.id}" class="playlist-song">
      <button class="playlist-song-info">
          <span class="playlist-song-title">${song.title}</span>
          <span class="playlist-song-artist">${song.artist}</span>
          <span class="playlist-song-duration">${song.duration}</span>
      </button>
      <button class="playlist-song-delete" aria-label="Delete ${song.title}">
          <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#4d4d62"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/></svg>
      </button>
      </li>
      `;
    }).join("");



Шаг 25

Далее вам нужно обновить плейлист в HTML-документе, чтобы отобразить песни. Присвойте songsHTML свойству innerHTML элемента playlistSongs. Это вставит только что созданный вами элемент li в элемент ul в уже предоставленном HTML-файле.

playlistSongs.innerHTML = songsHTML;



Шаг 26

Теперь нужно вызвать функцию renderSongs и передать userData?.songs, чтобы отобразить песни в пользовательском интерфейсе. Необязательное связывание (?.) помогает предотвратить ошибки при доступе к вложенным свойствам, которые могут быть пустыми или неопределёнными. Например:
Пример кода

const user = {
 name: "Quincy",
 address: {
  city: "San Francisco",
  state: "CA",
  country: "USA",
 },
};

// Доступ к вложенным свойствам без необязательного связывания
const state = user.address.state;// CA

// Доступ к несуществующему вложенному свойству с необязательным связыванием
const zipCode = user.address?.zipCode; // Возвращает undefined вместо ошибки

Вызовите функцию renderSongs со свойством songs объекта userData. Это отобразит песни в плейлисте.

renderSongs(userData?.songs);


Шаг 27

Теперь, когда список песен отображается на экране, неплохо было бы отсортировать их в алфавитном порядке по названию. Начнем с создания стрелочной функции с именем sortSongs.

const sortSongs = () => {};



Шаг 28

Теперь, когда список песен отображается на экране, было бы неплохо отсортировать их в алфавитном порядке по названию. Вы можете вручную обновить массив allSongs, но в JavaScript есть метод sort(), который вы можете использовать. Метод sort() преобразует элементы массива в строки и сортирует их по месту на основе их значений в кодировке UTF-16.
Пример кода

const names = ["Tom", "Jessica", "Quincy", "Naomi"];
names.sort() // ["Jessica", "Naomi", "Quincy", "Tom"]

Внутри функции sortSongs добавьте метод sort() к userData?.songs.

userData?.songs.sort();



Шаг 29

Чтобы отсортировать песни в алфавитном порядке по названию, вам нужно передать функцию обратного вызова для сравнения в метод sort(). Вот пример сортировки списка фруктов по названию.
Пример кода

const fruits = [
 { name: "Apples", price: 0.99 },
 { name: "Blueberries", price: 1.49 },
 { name: "Grapes", price: 2.99 },
  ];
  fruits.sort((a, b) => {
   if (a.name < b.name) {
    return -1;
   }
   if (a.name > b.name) {
    return 1;
   } return 0;
   });

 На следующих нескольких шагах вы узнаете, что делает каждый из этих операторов if внутри этой функции обратного вызова. А пока добавьте пустую функцию обратного вызова в метод sort() и используйте a и b для имён параметров.

userData?.songs.sort((a, b) => {});



Шаг 30

Метод sort() принимает функцию обратного вызова compare, которая определяет порядок сортировки. В этом примере первое условие (a.name < b.name) проверяет, меньше ли название первого фрукта, чем название второго. Если да, то первый фрукт сортируется перед вторым. Строки сравниваются лексикографически, то есть посимвольно. Например, «Яблоки» меньше, чем «Бананы», потому что «A» стоит перед «B» в алфавите. Причина, по которой этот пример возвращает числа, заключается в том, что метод sort() ожидает возврата числа. Если возвращается отрицательное число, первый элемент сортируется перед вторым.
Пример кода

const fruits = [
 { name: "Яблоки", price: 0.99 },
 { name: "Черника", price: 1.49 },
 { name: "Виноград", price: 2.99 },
 ];
 fruits.sort((a, b) => {
  if (a.name < b.name) {
   return -1;
   } if (a.name > b.name) {
    return 1;
    } return 0;
    });

    В функцию обратного вызова добавьте оператор if для проверки того, меньше ли a.title, чем b.title. Если да, верните -1.

    userData?.songs.sort((a,b) => {
    if (a.title < b.title) {
      return -1;
    }
  });



Шаг 31

Второе условие в этом примере проверяет, что a.name > b.name. Если да, функция возвращает 1, что помещает первый
фрукт после второго.
Пример кода

const fruits = [
 { name: "Яблоки", price: 0.99 },
 { name: "Черника", price: 1.49 },
 { name: "Виноград", price: 2.99 },
  ];
fruits.sort((a, b) => {
 if (a.name < b.name) {
    return -1;
 } if (a.name > b.name) {
    return 1;
 } return 0;
});

Внутри функции обратного вызова добавьте ещё один оператор if для проверки, больше ли a.title, чем b.title. Если да, верните число 1.



Шаг 32

В этом примере, если a.name равно b.name, функция возвращает 0. Это означает, что ничего не меняется, и порядок элементов a и b остаётся прежним.
Пример кода

const fruits = [
 { name: "Яблоки", price: 0.99 },
 { name: "Черника", price: 1.49 },
 { name: "Виноград", price: 2.99 },
];
fruits.sort((a, b) => {
 if (a.name < b.name) {
  return -1;
 } if (a.name > b.name) {
  return 1;
 } return 0;
 });

 Под операторами if верните число 0, чтобы сохранить порядок двух элементов неизменным.


 Шаг 33

 Последний шаг функции sortSongs — возврат userData?.songs.

 return userData?.songs;


 Шаг 34

 На данный момент порядок песен не изменился. Это связано с тем, что обновления, сделанные с помощью метода sort, не произойдут до вызова функции sortSongs. Измените функцию renderSongs так, чтобы она вызывала функцию sortSongs. Теперь вы должны видеть песни в алфавитном порядке.


renderSongs(userData?.songs);

***

 renderSongs(sortSongs());



 Шаг 35

 Пришло время приступить к реализации функции воспроизведения отображаемых песен. Определите функцию playSong, используя ключевое слово const. Функция должна принимать параметр id, представляющий собой уникальный идентификатор песни, которую вы хотите воспроизвести.

 const playSong = id => {};



 Шаг 36

 Метод find() извлекает первый элемент массива, удовлетворяющий условиям, указанным в предоставленной функции
 обратного вызова. Если ни один элемент не удовлетворяет условию, метод возвращает undefined. В примере ниже метод find() используется для поиска первого числа, большего 25:
 Пример кода

 const numbers = [10, 20, 30, 40, 50];

 // Находим первое число, большее 25
 const foundNumber = numbers.find((number) => number > 25);
 console.log(foundNumber); // Вывод: 30

 Используйте const для создания переменной с именем song и присвойте ей результат вызова метода find() массива userData?.songs. Используйте song в качестве параметра функции обратного вызова find() и проверьте, что song.id строго равен id. Это позволит перебрать массив userData?.songs и найти песню, соответствующую идентификатору, переданному в функцию playSong.

 const playSong = (id) => {
  const song = userData?.songs.find((song) => song.id === id);
};


Шаг 37

В функции playSong установите свойство audio.src равным song.src. Это сообщит элементу audio, где найти аудиоданные выбранной песни. Также установите свойство audio.title равным song.title. Это сообщит элементу audio, что отображать в качестве названия песни.

const playSong = (id) => {
  const song = userData?.songs.find((song) => song.id === id);
  audio.src = song.src;
  audio.title = song.title;
};



Шаг 38

Перед воспроизведением песни необходимо убедиться, что она начинается с начала. Этого можно добиться, используя свойство currentTime аудиообъекта. Добавьте оператор if, чтобы проверить, является ли значение userData?.currentSong ложным ИЛИ userData?.currentSong.id строго не равен song.id. Это условие проверит, воспроизводится ли текущая песня или отличается ли она от той, которая будет воспроизводиться. В блоке if установите свойство currentTime аудиообъекта равным 0.

if (userData?.currentSong === null || userData?.currentSong.id !== song.id) {
  audio.currentTime = 0;
};



Шаг 39

Добавьте блок else для управления текущим временем воспроизведения песни. Это позволит возобновить воспроизведение песни с того места, где она была остановлена. В блоке else установите для свойства currentTime аудиообъекта значение, хранящееся в userData?.songCurrentTime.


 else {
    audio.currentTime = userData?.songCurrentTime;
  }



Шаг 40

  Вам необходимо обновить текущую воспроизводимую песню, а также внешний вид элемента playButton. Назначьте song свойству currentSong объекта userData. Примечание: на этом шаге не следует использовать необязательный оператор цепочки ?., поскольку на этом этапе userData.currentSong не будет иметь значение null или undefined.


  userData.currentSong = song;




Шаг 41

Далее используйте свойство classList и метод add(), чтобы добавить класс «playing» к элементу playButton. Это позволит найти класс «playing» в CSS-файле и добавить его к элементу playButton. Чтобы воспроизвести песню, используйте метод play() переменной audio. play() — это метод API веб-аудио для воспроизведения mp3-файлов.

playButton.classList.add("playing");
audio.play();




Шаг 42

На предыдущих шагах вы создали функционал для воспроизведения песни. Теперь вам нужно добавить функционал к кнопке воспроизведения, чтобы она воспроизводила текущую песню при нажатии на неё. Используйте метод addEventListener() и передайте событие «click» в качестве первого аргумента и пустую функцию обратного вызова со стрелочным синтаксисом в качестве второго аргумента, например, () => {}.

playButton.addEventListener("click", () => {});




Шаг 43

В стрелочную функцию прослушивателя событий добавьте оператор if для проверки значения userData?.currentSong на null. В блоке if вызовите функцию playSong() с идентификатором первой песни из массива userData?.songs. Это обеспечит воспроизведение первой песни в плейлисте.

if (userData?.currentSong === null) {
  playSong(userData?.songs[0].id);
}




Шаг 44

Добавьте блок else. Внутри него вызовите функцию playSong, передав в качестве аргумента идентификатор текущей воспроизводимой песни. Это гарантирует, что текущая песня продолжит воспроизводиться при нажатии кнопки воспроизведения.

 else {
    playSong(userData?.currentSong.id);
  }




Шаг 45

Чтобы песня воспроизводилась каждый раз, когда пользователь нажимает на неё, добавьте атрибут onclick к первому элементу кнопки. Внутри атрибута onclick вызовите функцию playSong с song.id. Не забудьте, что здесь нужно интерполировать знак доллара.

<button class="playlist-song-info" onclick="playSong(${song.id})">




Шаг 46

Теперь нужно поработать над паузой воспроизведения текущей песни. Определите функцию pauseSong, используя ключевое слово const и синтаксис стрелочных функций. Функция не должна принимать параметров.

const pauseSong = () => {};



Шаг 47

Чтобы сохранить текущее время песни, когда она поставлена на паузу, установите songCurrentTime объекта userData равным currentTime переменной audio. Примечание: Не следует использовать необязательную цепочку на этом этапе, поскольку на этом этапе userData.songCurrentTime не будет иметь значение null или undefined.

userData.songCurrentTime = audio.currentTime;




Шаг 48

Используйте classList и метод remove(), чтобы удалить класс воспроизведения из кнопки playButton, поскольку в этот момент воспроизведение песни будет приостановлено. Чтобы окончательно приостановить воспроизведение песни, используйте метод pause() переменной audio. pause() — это метод API веб-аудио для приостановки музыкальных файлов.


  playButton.classList.remove("playing");
  audio.pause();



Шаг 49

Теперь пора протестировать кнопку паузы. Добавьте обработчик событий click к элементу pauseButton, затем передайте pauseSong в качестве второго аргумента обработчика событий. Это функция, которую будет выполнять обработчик событий. Протестируйте своё приложение, сначала нажав кнопку воспроизведения, а затем кнопку паузы. Вы должны убедиться, что всё работает как надо.

pauseButton.addEventListener("click", pauseSong);



Шаг 50

Прежде чем начать воспроизведение следующей и предыдущей песни, необходимо получить индекс каждой песни в свойстве songs объекта userData. Начнем с создания стрелочной функции getCurrentSongIndex.

const getCurrentSongIndex = () => {};



Шаг 51

Чтобы получить индекс текущей песни, можно использовать метод indexOf(). Метод массива indexOf() возвращает первый индекс, по которому находится заданный элемент в массиве, или -1, если элемент отсутствует.
Пример кода

const animals = ["dog", "cat", "horse"];
animal.indexOf("cat") // 1

Внутри функции getCurrentSongIndex верните userData?.songs.indexOf(). Аргумент indexOf() установите равным userData?.currentSong.

return userData?.songs.indexOf(userData?.currentSong);



Шаг 52

Вам нужно поработать над воспроизведением следующей и предыдущей песен. Для этого вам понадобятся функции playNextSong и playPreviousSong. Используйте синтаксис const и стрелок, чтобы создать пустую функцию playNextSong.

const playNextSong = () => {};



Шаг 53

Внутри функции playNextSong создайте оператор if для проверки того, что currentSong объекта userData строго равен нулю. Это проверит, нет ли текущей песни, воспроизводимой в объекте userData. Если условие истинно, вызовите функцию playSong, передав в качестве аргумента идентификатор первой песни из массива userData?.songs.

if (userData?.currentSong === null) {
    playSong(userData?.songs[0].id);
  }


Шаг 54

Добавьте блок else к оператору if. Внутри блока else вызовите функцию getCurrentSongIndex() и присвойте её константе с именем currentSongIndex.

   else {
    const currentSongIndex = getCurrentSongIndex();
  }



Шаг 55

Далее вам нужно получить следующую песню в плейлисте. Для этого вам нужно получить индекс текущей песни и прибавить к нему 1. Создайте константу nextSong и присвойте ей userData?.songs[currentSongIndex + 1]. Наконец, вызовите функцию playSong и передайте nextSong.id в качестве аргумента.

const nextSong = userData?.songs[currentSongIndex + 1];
    playSong(nextSong.id);



Шаг 56

Теперь пора протестировать функцию playNextSong. Добавьте обработчик событий click к элементу nextButton, затем передайте playNextSong в качестве второго аргумента обработчика событий. Это функция, которую обработчик событий запустит. Протестируйте приложение, сначала нажав кнопку воспроизведения, а затем кнопку «Далее». Вы должны убедиться, что всё работает как надо.

nextButton.addEventListener("click", playNextSong);



Шаг 57

Используйте синтаксис const и стрелок для создания пустой функции playPreviousSong.

const playPreviousSong = () => {};



Шаг 58

В функцию playPreviousSong добавьте оператор if с условием userData?.currentSong === null. Это проверит, воспроизводится ли в данный момент песня. Если нет, выйдите из функции, используя return. В блоке else создайте константу с именем currentSongIndex и присвойте ей функцию getCurrentSongIndex().

if (userData?.currentSong === null) {
    return;
  } else {
    const currentSongIndex = getCurrentSongIndex();
  }


Шаг 59

Чтобы получить предыдущую песню, вычтите 1 из currentSongIndex объекта userData?.songs и присвойте результат константе previousSong. После этого вызовите функцию playSong и передайте previousSong.id в качестве аргумента.

const previousSong = userData?.songs[currentSongIndex - 1];
playSong(previousSong.id);




Шаг 60

Добавьте прослушиватель события «click» к элементу previousButton, затем передайте playPreviousSong в качестве второго аргумента.

previousButton.addEventListener("click", playPreviousSong);




Шаг 61

Если внимательно присмотреться, то можно увидеть, что текущая песня не выделена в плейлисте, поэтому вы не знаете, какая именно песня воспроизводится. Это можно исправить, создав функцию для выделения любой воспроизводимой песни. Используя синтаксис стрелок, создайте функцию highlightCurrentSong. Внутри функции используйте querySelectorAll для получения элемента .playlist-song и присвойте его константе playlistSongElements.


const highlightCurrentSong = () => {
  const playlistSongElements = document.querySelectorAll(".playlist-song");
};



Шаг 62

Вам необходимо получить идентификатор текущей воспроизводимой песни. Для этого можно использовать метод userData?.currentSong?.id. Используйте метод getElementById() для получения идентификатора текущей воспроизводимой песни, а затем добавьте к нему префикс song- с помощью шаблонных литералов. Присвойте его константе songToHighlight.

const songToHighlight = document.getElementById(`song-${userData?.currentSong?.id}`);



Шаг 63

Пройдитесь циклом по элементам playlistSongElements с помощью метода forEach. Метод forEach используется для прохода по массиву и выполнения функции над каждым элементом массива. Например, предположим, что у вас есть массив чисел, и вы хотите вывести каждое число на консоль.
Пример кода

const numbers = [1, 2, 3, 4, 5];

// Использование forEach для итерации по массиву
numbers.forEach((number) => {
 console.log(number); // 1, 2, 3, 4, 5
 });

 Используем метод forEach для playlistSongElements. Передайте songEl в качестве параметра и используйте стрелочный синтаксис для добавления пустой функции обратного вызова.

 playlistSongElements.forEach((songEl) => {});



Шаг 64

В функции обратного вызова используйте метод removeAttribute() для удаления атрибута «aria-current». Это удалит атрибут для каждой песни.

songEl.removeAttribute("aria-current");



Шаг 65

Теперь нужно добавить атрибут обратно к текущей воспроизводимой песне. Создайте оператор if с условием songToHighlight. Для этого используйте setAttribute для songToHighlight, чтобы передать «aria-current» и «true» в качестве первого и второго аргументов.


if (songToHighlight) {
  songToHighlight.setAttribute("aria-current", "true");
}




Шаг 66

Внутри функции playSong вызовите функцию highlightCurrentSong. После этого поэкспериментируйте с кнопками управления, чтобы увидеть, как работает функция highlightCurrentSong.


highlightCurrentSong();




Шаг 67

Далее необходимо отобразить название и исполнителя текущей песни в плеере. Используйте синтаксис const и стрелки для создания пустой функции setPlayerDisplay.


const setPlayerDisplay = () => {};





Шаг 68

Внутри функции получите ссылки на HTML-элементы, отвечающие за отображение названия песни и исполнителя. Доступ к элементам #player-song-title и #player-song-artist осуществляется с помощью метода getElementById(). Присвойте их переменным playingSong и songArtist соответственно.


const playingSong = document.getElementById("player-song-title");
  const songArtist = document.getElementById("player-song-artist");
};




Шаг 69

Доступ к свойствам userData?.currentSong?.title и userData?.currentSong?.artist и назначение их переменным currentTitle и currentArtist соответственно.


  const currentTitle = userData?.currentSong?.title;
  const currentArtist = userData?.currentSong?.artist;




Шаг 70

textContent задаёт текст узла и позволяет задать или получить текстовое содержимое HTML-элемента.
Пример кода

<div id="example">Это текстовое содержимое</div>

Пример кода

const element = document.getElementById('example');
console.log(element.textContent); // Вывод: Это текстовое содержимое

Вы можете использовать тернарный оператор для условного задания значения текстового содержимого. Вот пример присвоения результата тернарного оператора переменной:
Пример кода

const example = condition ? "I'm true" : "I'm false";

Используйте тернарный оператор, чтобы проверить, является ли currentTitle истинным значением. Если это так, установите playingSong.textContent равным currentTitle. В противном случае установите его в пустую строку. Затем ниже используйте тернарный оператор, чтобы проверить, является ли currentArtist истинным значением. Если да, установите songArtist.textContent в значение currentArtist. В противном случае установите пустую строку.


  playingSong.textContent = currentTitle ? currentTitle : "";
  songArtist.textContent = currentArtist ? currentArtist : "";




Шаг 71

Чтобы обеспечить обновление экрана плеера при начале воспроизведения новой песни, вызовите функцию setPlayerDisplay() внутри функции playSong(). Теперь на экране должны отображаться название песни и имя исполнителя.

setPlayerDisplay();



Шаг 72

Чтобы сделать приложение более доступным, важно, чтобы кнопка воспроизведения описывала текущую песню или первую песню в плейлисте. Начнем с создания пустой стрелочной функции с именем setPlayButtonAccessibleText.


const setPlayButtonAccessibleText = () => {};


Шаг 73

Вам нужно получить текущую песню или первую песню в плейлисте. Для этого создайте константу «Song» и используйте оператор OR (||), чтобы присвоить ей текущую песню из userData или первую песню в массиве userData?.songs. Не забудьте использовать опциональную цепочку.

const song = userData?.currentSong || userData?.songs[0];


Шаг 74

Функция setPlayButtonAccessibleText установит атрибут aria-label на текущую песню или на первую песню в плейлисте. Если плейлист пуст, она установит атрибут aria-label в значение «Play». Используйте метод setAttribute элемента playButton, чтобы установить атрибут с именем «aria-label». Используя тернарный оператор, установите значение атрибута на Play ${song.title} или «Play», если song?.title недоступен. Не забудьте, что здесь нужна интерполяция строк, поэтому нужно использовать обратные кавычки.


playButton.setAttribute("aria-label", song?.title ? `Play ${song.title}` : "Play");




Шаг 75

Теперь вызовите функцию setPlayButtonAccessibleText внутри функции playSong.


playSong(setPlayButtonAccessibleText());




Шаг 76

Используем константы и синтаксис стрелок для создания пустой функции с именем shuffle. Эта функция отвечает за перемешивание песен в плейлисте и выполнение необходимых обновлений управления состоянием после перемешивания.

const shuffle = () => {};




Шаг 77

На предыдущих шагах вы узнали, как использовать метод sort() для сортировки песен в алфавитном порядке. Другой вариант использования функции обратного вызова — рандомизация массива. Один из способов рандомизации массива элементов — вычесть 0,5 из Math.random(), что даст случайные значения, которые могут быть как положительными, так и отрицательными. Это делает результат сравнения смесью положительных и отрицательных значений, что приводит к случайному порядку элементов.
Пример кода

const names = ["Tom", "Jessica", "Quincy", "Naomi"];
names.sort(() => Math.random() - 0.5);

Используйте метод sort() для массива userData?.songs. Передайте методу обратный вызов и верните результат Math.random() - 0.5.


userData?.songs.sort(() => Math.random() - 0.5);




Шаг 78

При нажатии кнопки перемешивания необходимо установить свойство currentSong равным нулю, а songCurrentTime — равным 0. Установите свойство userData.currentSong равным null, а свойство userData.songCurrentTime — равным 0. Примечание: не следует использовать необязательную цепочку на этом шаге, поскольку вы явно устанавливаете свойства currentSong и songCurrentTime равными null и 0 соответственно.


  userData.currentSong = null;
  userData.songCurrentTime = 0;




Шаг 79

Также следует повторно отрендерить песни, приостановить текущую песню, настроить отображение плеера и заново настроить доступный текст для кнопки воспроизведения. Вызовите функцию renderSongs и передайте userData?.songs в качестве аргумента. Также вызовите функции pauseSong, setPlayerDisplay и setPlayButtonAccessibleText.


renderSongs(userData?.songs);
pauseSong();
setPlayerDisplay();
setPlayButtonAccessibleText();




Шаг 80

Добавьте прослушиватель события «click» к элементу shuffleButton. Для выполнения функции передайте функцию shuffle. Примечание: внутри этого прослушивателя событий не требуется обратный вызов. Вам также не нужно вызывать функцию shuffle, достаточно передать её идентификатор.


shuffleButton.addEventListener("click", shuffle);




Шаг 81

Пора реализовать функцию удаления для плейлиста. Она будет управлять удалением песни из плейлиста, обрабатывать другие связанные действия при удалении песни и создавать кнопку «Сбросить плейлист». Используйте синтаксис const и стрелок для создания пустой функции deleteSong и передачи идентификатора в качестве параметра.


const deleteSong = (id) => {};





Шаг 82

Используйте метод filter() для удаления объекта song, соответствующего параметру id, из массива userData?.songs. Метод filter сохраняет только те элементы массива, которые удовлетворяют переданной ему функции обратного вызова:
Пример кода

const numArr = [1, 10, 8, 3, 4, 5]
const numsGreaterThanThree = numArr.filter((num) => num > 3);
console.log(numsGreaterThanThree) // Вывод: [10, 8, 4, 5]

Используйте метод filter() для userData?.songs. Передайте song в качестве параметра обратного вызова стрелочной функции и используйте неявный возврат для проверки того, что song.id строго не равен id. Присвойте всё это объекту userData.songs. Примечание: не следует использовать необязательную цепочку при назначении результата userData?.songs.filter объекту userData.songs, поскольку в этот момент массив allSongs не будет неопределенным или нулевым.


userData.songs = userData?.songs.filter((song) => song.id !== id);





Шаг 83

Вам необходимо повторно отрендерить песни, выделить их и установить доступный текст кнопки воспроизведения, поскольку список песен изменится. Вызовите функцию renderSongs и передайте массив userData?.songs в качестве аргумента. Это отобразит изменённый плейлист. После этого вызовите функцию highlightCurrentSong, чтобы выделить текущую песню, если она есть, и функцию setPlayButtonAccessibleText, чтобы обновить доступный текст кнопки воспроизведения.


  renderSongs(userData?.songs);
  highlightCurrentSong();
  setPlayButtonAccessibleText();




Шаг 84

Перед удалением песни необходимо проверить, воспроизводится ли она в данный момент. Если да, необходимо поставить её на паузу и воспроизвести следующую песню в плейлисте. Используйте оператор if, чтобы проверить, совпадает ли userData?.currentSong?.id с идентификатором песни, которую вы хотите удалить.


if (userData?.currentSong?.id === id) {}



Шаг 85

Если совпадение найдено, установите userData.currentSong в значение null, а userData.songCurrentTime — в значение 0. После этого вызовите функцию pauseSong(), чтобы остановить воспроизведение, и функцию setPlayerDisplay(), чтобы обновить отображение плеера.


  userData.currentSong = null;
  userData.songCurrentTime = 0;
  pauseSong();
  setPlayerDisplay();



Шаг 86

В элементе button функции renderSongs добавьте атрибут onclick. Для получения значения вызовите функцию deleteSong и интерполируйте song.id.


onclick="deleteSong(${song.id})"



Шаг 87

Далее необходимо проверить, пуст ли плейлист. Если да, следует сбросить объект userData в исходное состояние. Используйте оператор if, чтобы проверить, равен ли размер userData?.songs нулю.


if (userData?.songs.length ===0) {}



Шаг 88

Если плейлист пуст, необходимо создать элемент resetButton и текст для него. Эта кнопка будет отображаться только при пустом плейлисте. createElement() — это метод DOM, который можно использовать для динамического создания элемента с помощью JavaScript. Чтобы использовать createElement(), вы вызываете его, а затем передаете имя тега в виде строки:
Пример кода

// синтаксис
document.createElement(tagName)

// пример
document.createElement('div')

Вы также можете присвоить его переменной:
Пример кода

const divElement = document.createElement('div')

Внутри оператора if объявите константу resetButton, а затем используйте createElement() для создания «кнопки».


const resetButton = document.createElement("button");




Шаг 89

Теперь, когда кнопка создана, нужно присвоить ей текст. Для этого используйте метод createTextNode() DOM. Метод createTextNode() используется для создания текстового узла. Чтобы использовать его, вызовите его и передайте текст как строку:
Пример кода

document.createTextNode("ваш текст")

Вы также можете присвоить его переменной:
Пример кода

const myText = document.createTextNode("ваш текст")

Используйте метод createTextNode() для создания текста «Сбросить плейлист», а затем присвойте его константе resetText.


const resetText = document.createTextNode("Reset Playlist");




Шаг 90

Теперь, когда вы создали элемент resetButton, вам нужно присвоить ему атрибуты id и aria-label. JavaScript предоставляет необходимые для этого свойства id и ariaLabel. Например, element.id устанавливает атрибут id, а element.ariaLabel — атрибут aria-label. Оба принимают значения в виде строк. Установите атрибут id элемента resetButton на «reset», а его атрибут aria-label — на «Сбросить плейлист».

    resetButton.id = "reset";
    resetButton.ariaLabel = "Reset playlist";





Шаг 91

Вам необходимо добавить resetText к элементу resetButton в качестве дочернего элемента, а также resetButton к элементу playlistSongs в качестве дочернего элемента. Для этого существует метод appendChild(). AppendChild() позволяет добавить узел или элемент в качестве дочернего элемента другого элемента. В примере ниже текст «Нажми меня» будет прикреплён к кнопке:
Пример кода

const parentElement = document.createElement("button")
const parentElementText = document.createTextNode("Нажми меня")

// прикрепляем текст «Нажми меня» к кнопке
parentElement.appendChild(parentElementText)

Используйте appendChild(), чтобы прикрепить resetText к элементу resetButton, а resetButton — к элементу playlistSongs.

  resetButton.appendChild(resetText);
  playlistSongs.appendChild(resetButton);




Шаг 92

Теперь пора добавить функцию сброса к кнопке resetButton. Это позволит восстанавливать песни в плейлисте при нажатии. Добавьте прослушиватель событий click к переменной resetButton. Передайте обратный вызов, используя синтаксис стрелок, и пока оставьте его пустым.


resetButton.addEventListener("click", () => {});




Шаг 93

Чтобы вернуть плейлист в исходное состояние, поместите allSongs в массив и присвойте его userData.songs. Примечание: Не следует использовать необязательную цепочку для userData.songs, поскольку на этом этапе песня не будет иметь значение null или undefined.

userData.songs = [...allSongs];



Шаг 94

Наконец, необходимо снова отобразить песни, обновить доступный текст кнопки воспроизведения и удалить кнопку сброса из плейлиста. Также необходимо удалить resetButton из DOM. Вызовите функцию renderSongs() с sortSongs() в качестве аргумента, чтобы снова отобразить песни в алфавитном порядке. Вызовите функцию setPlayButtonAccessibleText(), чтобы обновить доступный текст кнопки воспроизведения. Удалите кнопку сброса из плейлиста, вызвав метод remove() переменной resetButton. Примечание: Теперь попробуйте удалить все песни и посмотреть, что произойдёт.

renderSongs(sortSongs());
setPlayButtonAccessibleText();
resetButton.remove();



Шаг 95

Все основные функции теперь готовы. Единственная проблема заключается в том, что следующая песня не воспроизводится автоматически после окончания текущей. Чтобы исправить это, можно настроить прослушиватель событий, который будет определять окончание текущей песни. Для этого подходит прослушиватель событий «ended». Он срабатывает по завершении воспроизведения медиафайла. Добавьте прослушиватель событий к элементу audio, который отслеживает событие «ended». Передайте обратный вызов, используя синтаксис стрелок с пустыми фигурными скобками.

audio.addEventListener("ended", () => {});




Шаг 96

Обратите внимание, что обложка альбома в HTML-коде и названия песен в массиве userData.songs изменились. Мы заменили оригинальные песни на более короткие, которые вы сможете использовать для тестирования своего приложения на следующих этапах. Далее вам нужно проверить, есть ли следующая песня для воспроизведения. Получите индекс текущей песни, вызвав функцию getCurrentSongIndex(), и сохраните его в константе currentSongIndex. После этого создайте константу nextSongExists, которая будет содержать логическое значение true или false в зависимости от того, существует ли следующая песня.

const nextSongExists = (userData.songs.length - 1) > currentSongIndex;

***

const nextSongExists = userData?.songs[currentSongIndex + 1] !== undefined;



Шаг 97

Используйте оператор if для проверки наличия nextSongExists, затем вызовите функцию playNextSong() в блоке if. Это автоматически воспроизведёт следующую песню после окончания текущей.

if (nextSongExists) {
    playNextSong();
  }



Шаг 98

Если в плейлисте нет следующей песни, используйте блок else, чтобы сбросить ключ currentSong объекта userData на NULL, а его свойство songCurrentTime — на 0.

 else {
    userData.currentSong = null;
    userData.songCurrentTime = 0;
  }





 */