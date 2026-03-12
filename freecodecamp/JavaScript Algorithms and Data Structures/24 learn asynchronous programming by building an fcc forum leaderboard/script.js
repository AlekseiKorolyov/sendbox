const forumLatest = "https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json";
const forumTopicUrl = "https://forum.freecodecamp.org/t/";
const forumCategoryUrl = "https://forum.freecodecamp.org/c/";
const avatarUrl = "https://sea1.discourse-cdn.com/freecodecamp";

const postsContainer = document.getElementById("posts-container");
const fetchData = async () => {
    try {
        const res = await fetch(forumLatest);
        const data = await res.json();
        showLatestPosts(data);
    } catch (err) {
        console.log(err);
    }
};

fetchData();

const showLatestPosts = (data) => {

};


















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




Шаг 5

В прошлом проекте вы использовали метод `.catch()` для обработки ошибок. Здесь вы будете использовать вместо него блок `try...catch`. Блок `try` предназначен для обработки потенциальных ошибок, и код внутри блока `catch` будет выполнен в случае возникновения ошибки.
Пример кода:

try {
 const name = "freeCodeCamp";
 name = "fCC";
} catch (err) {
 console.log(err); // TypeError: Присваивание константной переменной.
}

Внутри вашей функции `fetchData` добавьте блок `try...catch`. Блок `catch` должен иметь параметр ошибки с именем `err`.


const fetchData = async () => {
  try {

  } catch (err) {

  }
}




Шаг 6

В предыдущем проекте вы использовали метод `fetch()` с `.then()` для выполнения логики после разрешения промиса. Теперь вы будете использовать ключевое слово `await` для обработки асинхронной природы метода `fetch()`. Ключевое слово `await` ожидает разрешения промиса и возвращает результат.
Пример кода

const example = async () => {
 const data = await fetch("https://example.com/api");
 console.log(data);
}

Внутри блока `try` создайте константу с именем `res` и присвойте ей `await fetch()`. Для вызова `fetch` передайте переменную `forumLatest`.


const res = await fetch(forumLatest);




Шаг 7

Вам нужно получить тело ответа в виде объекта JSON. Метод `.json()` вашей переменной `res` возвращает промис, а это значит, что вам нужно будет его ожидать. Создайте константу с именем `data` и присвойте ей значение `await res.json()`.


const data = await res.json();




Шаг 8

Чтобы просмотреть результаты данных, выведите значение переменной `data` в консоль внутри блока `try`. Ниже определения функции `fetchData` вызовите функцию и откройте консоль, чтобы увидеть результаты.




Шаг 9

Если при вызове функции fetch возникает ошибка, блок catch обработает её. Внутри блока catch добавьте console.log для вывода параметра err. Также удалите console.log(data); из блока try, теперь, когда вы понимаете, что возвращается при вызове функции fetch.




Шаг 10

Теперь пришло время отобразить данные на странице. Начните с создания стрелочной функции с именем showLatestPosts, которая принимает один параметр data.


const showLatestPosts = (data) => {

};




Шаг 11

По мере создания функции showLatestPosts() вам потребуется вызывать её, чтобы увидеть изменения. Вызовите функцию showLatestPosts() в конце блока try и передайте data в качестве аргумента.






 */