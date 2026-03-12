const forumLatest = "https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json";
const forumTopicUrl = "https://forum.freecodecamp.org/t/";
const forumCategoryUrl = "https://forum.freecodecamp.org/c/";
const avatarUrl = "https://sea1.discourse-cdn.com/freecodecamp";

const postsContainer = document.getElementById("posts-container");
const fetchData = async () => {};


















/*
Шаг 1

В этом проекте вы создадите таблицу лидеров форума freeCodeCamp, которая будет отображать последние темы, пользователей и ответы с форума freeCodeCamp. HTML и CSS предоставлены для вас. Можете свободно их изучить. Когда будете готовы, используйте const для объявления переменной forumLatest и присвойте ей строку "https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json". Ниже создайте еще одну константную переменную с именем forumTopicUrl и присвойте ей строку "https://forum.freecodecamp.org/t/".


const forumLatest = "https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json";
const forumTopicUrl = "https://forum.freecodecamp.org/t/";




Шаг 2

Далее создайте константную переменную с именем forumCategoryUrl и присвойте ей строку "https://forum.freecodecamp.org/c/". Ниже создайте еще одну константную переменную с именем avatarUrl и присвойте ей строку "https://sea1.discourse-cdn.com/freecodecamp".


const forumCategoryUrl = "https://forum.freecodecamp.org/c/";
const avatarUrl = "https://sea1.discourse-cdn.com/freecodecamp";




Шаг 3

Далее, получите доступ к элементу #posts-container, используя метод getElementById(). Присвойте его новой константе с именем postsContainer.


const postsContainer = document.getElementById("posts-container");




Шаг 4

Для заполнения таблицы лидеров форума данными вам потребуется запросить данные из API. Это называется асинхронной операцией, что означает, что задачи выполняются независимо от основного потока программы. Вы можете использовать ключевое слово async для создания асинхронной функции, которая возвращает промис. Пример кода const example = async () => { console.log("this is an example"); }; Используйте ключевое слово async для создания асинхронной стрелочной функции с именем fetchData.


const fetchData = async () => {};







 */