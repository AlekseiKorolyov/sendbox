const forumLatest = "https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json";
const forumTopicUrl = "https://forum.freecodecamp.org/t/";
const forumCategoryUrl = "https://forum.freecodecamp.org/c/";
const avatarUrl = "https://sea1.discourse-cdn.com/freecodecamp";

const postsContainer = document.getElementById("posts-container");
const allCategories = {
    299: {
        category: "Career Advice",
        className: "career"
    }
};

const timeAgo = (time) => {
    const currentTime = new Date();
    const lastPost = new Date(time);
    const differenceTime = currentTime - lastPost;
    const minutesAgo = Math.floor(differenceTime / 60000);
    const hoursAgo = Math.floor(minutesAgo / 60);
    const daysAgo = Math.floor(hoursAgo / 24);

    if (minutesAgo < 60) {
        return `${minutesAgo}m ago`;
    } else if (hoursAgo < 24) {
        return `${hoursAgo}h ago`;
    } else {
        return `${daysAgo}d ago`;
    }
};

const viewCount = (views) => {
    if (views >= 1000) {
        return `${Math.floor(views / 1000)}k`;
    } else if (views < 1000) {
        return views;
    }
};

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
    const { topic_list, users } = data;
    const { topics } = topic_list;

    postsContainer.innerHTML = topics.map((item) => {
        const {
            id,
            title,
            views,
            posts_count,
            slug,
            posters,
            category_id,
            bumped_at,
        } = item;

        return `
    <tr>
      <td>
        <p class="post-title">${title}</p>
      </td>
      <td></td>
      <td>${posts_count - 1}</td>
      <td>
      <td>${viewCount(views)}</td>
      </td>
      <td>
      ${timeAgo(bumped_at)}
      </td>
    </tr>`;
    }).join("");
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




Шаг 12

В функции showLatestPosts() используйте деструктуризацию, чтобы получить свойства topic_list и users из объекта данных.


const {topic_list, users} = data;




Шаг 13

Объект topic_list содержит массив topics, в котором собраны последние темы, опубликованные на форуме. Извлеките структуру массива topics из объекта topic_list.


const { topics } = topic_list;




Шаг 14

Теперь пришло время начать заполнять данные внутри postsContainer. Начните с вызова метода map() для вашего массива topics. В качестве функции обратного вызова используйте пустую стрелочную функцию, которая принимает item в качестве параметра. Затем присвойте результат метода map() переменной postsContainer.innerHTML


postsContainer.innerHTML =  topics.map((item) => {});




Шаг 15

Внутри метода map деструктурируйте следующие свойства из объекта item.

id
title
views
posts_count
slug
posters
category_id
bumped_at


const { id, title, views, posts_count, slug, posters, category_id, bumped_at } = item;




Шаг 16

Следующий шаг — создание таблицы, которая будет отображать данные форума. Ниже вашего задания по деструктуризации добавьте ключевое слово `return`, за которым следует набор шаблонных литералов. Внутри этих шаблонных литералов добавьте элемент `tr` для строки таблицы.


    return `<tr></tr>`;




Шаг 17

В окне предварительного просмотра вы должны увидеть столбец запятых. Чтобы это исправить, вам следует связать метод join с вашим методом map. В качестве разделителя передайте пустую строку.




Шаг 18

Внутри элемента `tr` добавьте пять пустых элементов `td`.




Шаг 19

Чтобы отобразить заголовок темы, добавьте элемент `<p>` внутри первого элемента `<td>`. Между тегами абзаца добавьте встроенное выражение, содержащее переменную title. Затем добавьте класс `post-title` внутри открывающего тега абзаца.


<p class="post-title">${title}</p>




Шаг 20

Оставьте второй элемент td пустым, так как вы добавите в него контент позже. В третий элемент td добавьте следующее встроенное выражение: ${posts_count - 1}. Это отобразит количество ответов на тему.




Шаг 21

В четвертом элементе td добавьте встроенное выражение, содержащее переменную views. Это отобразит количество просмотров записи.




Шаг 22

Для отображения данных в столбце Activity необходимо использовать свойство bumped_at каждой темы, представляющее собой метку времени в формате ISO 8601. Эти данные необходимо обработать, прежде чем можно будет показать, сколько времени прошло с момента последней активности в теме. Создайте новую функцию timeAgo с параметром time. Внутри функции timeAgo создайте две переменные с именами currentTime и lastPost и присвойте им значения new Date() и new Date(time) соответственно. lastPost будет представлять дату последней активности в теме, а currentTime — текущую дату и время.


const timeAgo = (time) => {
  const currentTime = new Date();
  const lastPost = new Date(time);
};




Шаг 23

Для функции timeAgo вам нужно будет вычислить разницу между текущим временем и временем последней активности по теме. Это позволит вам отобразить, сколько времени прошло с момента последней активности по теме. Завершите функцию timeAgo, которая соответствует следующим требованиям: Если количество прошедших минут меньше 60, верните строку "xm ago". x будет представлять минуты. Если количество прошедших часов меньше 24, верните строку "xh ago". x будет представлять часы. В противном случае верните строку "xd ago". x будет представлять дни. Вот несколько уравнений, которые помогут вам вычислить разницу во времени:

minutes = Math.floor((currentTime - lastPost) / 60000);
hours = Math.floor((currentTime - lastPost) / 3600000);
days = Math.floor((currentTime - lastPost) / 86400000);


  const differenceTime = currentTime - lastPost;
  const minutesAgo = Math.floor(differenceTime / 60000);
  const hoursAgo = Math.floor(minutesAgo / 60);
  const daysAgo = Math.floor(hoursAgo / 24);

  if (minutesAgo < 60) {
    return `${minutesAgo}m ago`;
  } else if (hoursAgo < 24) {
    return `${hoursAgo}h ago`;
  } else {
    return `${daysAgo}d ago`;
  }




Шаг 24

Чтобы отобразить время с момента последней публикации, вызовите функцию timeAgo и передайте в качестве аргумента переменную bumped_at. Поместите этот вызов функции внутрь последнего элемента td. После внесения этих изменений прокрутите таблицу, чтобы увидеть новые значения, отображаемые в столбце Activity.


${timeAgo(bumped_at)}




Шаг 25

Вам нужна функция для преобразования количества просмотров в более читаемый формат. Например, если количество просмотров равно 1000, оно должно отображаться как 1k, а если 100 000, то как 100k. Создайте функцию viewCount с параметром views. Если views больше или равно 1000, верните строку, содержащую значение views, разделенное на 1000, и добавленную букву k. Убедитесь, что views / 1000 округляется до ближайшего целого числа в меньшую сторону. В противном случае верните значение views. Например, если views равно 1000, возвращаемое значение должно быть строкой "1k".


const viewCount = (views) => {
  if (views >= 1000) {
    return `${Math.floor(views / 1000)}k`;
  } else if (views < 1000) {
    return views;
  }
};




Шаг 26

Внутри четвертого элемента td обновите текущее значение, чтобы вместо этого вызвать функцию viewCount, передав в качестве аргумента переменную views.


<td>${viewCount(views)}</td>




Шаг 27

Каждая тема форума включает категорию, например, Python или JavaScript. На следующих нескольких шагах вы создадите объект категории, который будет содержать все категории форума и имена классов для стилизации. Начните с создания новой константы с именем allCategories и присвойте ей значение пустого объекта.


const allCategories = {};




Шаг 28

Внутри объекта allCategories добавьте новый ключ для числа 299 со значением пустого объекта. Внутри этого объекта добавьте свойство с ключом category и строковым значением "Career Advice". Ниже этого свойства добавьте еще один ключ с именем className и строковым значением "career".


const allCategories = {
  299: {
    category: "Career Advice",
    className: "career"
  }
};



 */