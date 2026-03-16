const forumLatest = "https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json";
const forumTopicUrl = "https://forum.freecodecamp.org/t/";
const forumCategoryUrl = "https://forum.freecodecamp.org/c/";
const avatarUrl = "https://sea1.discourse-cdn.com/freecodecamp";

const postsContainer = document.getElementById("posts-container");

const allCategories = {
    299: { category: "Career Advice", className: "career" },
    409: { category: "Project Feedback", className: "feedback" },
    417: { category: "freeCodeCamp Support", className: "support" },
    421: { category: "JavaScript", className: "javascript" },
    423: { category: "HTML - CSS", className: "html-css" },
    424: { category: "Python", className: "python" },
    432: { category: "You Can Do This!", className: "motivation" },
    560: { category: "Back-End Development", className: "backend" },
};

const forumCategory = (id) => {
    let selectedCategory = {};

    if (allCategories.hasOwnProperty(id)) {
        const { className, category } = allCategories[id];

        selectedCategory.className = className;
        selectedCategory.category = category;
    } else {
        selectedCategory.className = "general";
        selectedCategory.category = "General";
        selectedCategory.id = 1;
    }
    const url = `${forumCategoryUrl}${selectedCategory.className}/${id}`;
    const linkText = selectedCategory.category;
    const linkClass = `category ${selectedCategory.className}`;

    return `<a href="${url}" class="${linkClass}" target="_blank">
    ${linkText}
  </a>`;
};

const timeAgo = (time) => {
    const currentTime = new Date();
    const lastPost = new Date(time);

    const timeDifference = currentTime - lastPost;
    const msPerMinute = 1000 * 60;

    const minutesAgo = Math.floor(timeDifference / msPerMinute);
    const hoursAgo = Math.floor(minutesAgo / 60);
    const daysAgo = Math.floor(hoursAgo / 24);

    if (minutesAgo < 60) {
        return `${minutesAgo}m ago`;
    }

    if (hoursAgo < 24) {
        return `${hoursAgo}h ago`;
    }

    return `${daysAgo}d ago`;
};

const viewCount = (views) => {
    const thousands = Math.floor(views / 1000);

    if (views >= 1000) {
        return `${thousands}k`;
    }

    return views;
};

const avatars = (posters, users) => {
    return posters
        .map((poster) => {
            const user = users.find((user) => user.id === poster.user_id);
            if (user) {
                const avatar = user.avatar_template.replace(/{size}/, 30);
                const userAvatarUrl = avatar.startsWith("/user_avatar/")
                    ? avatarUrl.concat(avatar)
                    : avatar;
                return `<img src="${userAvatarUrl}" alt="${user.name}" />`;
            }
        })
        .join("");
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
        <a href="${forumTopicUrl}${slug}/${id}" class="post-title" target="_blank" >${title}</a>

        ${forumCategory(category_id)}
      </td>
      <td>
        <div class="avatar-container">
          ${avatars(posters, users)}
        </div>
      </td>
      <td>${posts_count - 1}</td>
      <td>${viewCount(views)}</td>
      <td>${timeAgo(bumped_at)}</td>
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




Шаг 29

Добавьте новый ключ для числа 409 со значением пустого объекта. Внутри этого объекта добавьте свойство с ключом category и строковым значением "Обратная связь по проекту". Ниже этого свойства добавьте еще один ключ с именем className и строковым значением "обратная связь".


  409: { category: "Project Feedback", className: "feedback" }




Шаг 30

Добавьте новый ключ для числа 417 со значением пустого объекта. Внутри этого объекта добавьте свойство с ключом category и строковым значением "freeCodeCamp Support". Ниже этого свойства добавьте еще один ключ с именем className и строковым значением "support".


417: { category: "freeCodeCamp Support", className: "support"}




Шаг 31

Остальная часть объекта allCategories уже создана. На следующих нескольких шагах вы создадите функцию для получения названия категории из объекта allCategories. Начните с создания стрелочной функции с именем forumCategory, используя id в качестве имени параметра.


const forumCategory = (id) => {

};




Шаг 32

Внутри функции forumCategory создайте новую переменную let с именем selectedCategory и присвойте ей пустой объект. Она будет использоваться для хранения названия категории и имени класса для каждой категории.


let selectedCategory = {}




Шаг 33

Создайте оператор if для проверки наличия у объекта allCategories свойства с идентификатором. Помните, что для этого можно использовать метод hasOwnProperty().


  if (allCategories.hasOwnProperty(id)) {

  }




Шаг 34

Внутри оператора if деструктурируйте классы className и category из объекта allCategories[id].


const { className, category } = allCategories[id];




Шаг 35

Теперь вам необходимо добавить свойства className и category к вашему объекту selectedCategory. Начните с присвоения переменной className значения selectedCategory.className. Затем присвойте переменной category значение selectedCategory.category.


    selectedCategory.className = className;
    selectedCategory.category = category;




Шаг 36

Если id отсутствует в объекте allCategories, вам потребуется отобразить категорию General. После оператора if добавьте блок else.




Шаг 37

Внутри блока else присвойте строку "general" переменной selectedCategory.className. Ниже присвойте строку "General" переменной selectedCategory.category. Наконец, присвойте число 1 переменной selectedCategory.id.


 else {
    selectedCategory.className = "general";
    selectedCategory.category = "General";
    selectedCategory.id = 1;
  }




Шаг 38

Каждая категория будет иметь URL-адрес, указывающий на эту категорию на форуме freeCodeCamp. Создайте константу с именем url и назначьте ей шаблонный литерал. Внутри этого шаблонного литерала поместите значение ${forumCategoryUrl}${selectedCategory.className}/${id}.


const url = `${forumCategoryUrl}${selectedCategory.className}/${id}`;




Шаг 39

Создайте константу с именем linkText и присвойте ей значение selectedCategory.category. Это позволит отображать название категории в элементе привязки.


const linkText = selectedCategory.category;




Шаг 40

Создайте константу с именем linkClass и назначьте ей шаблонный литерал. Внутри этого шаблонного литерала добавьте значение category ${selectedCategory.className}. Эти имена классов будут использоваться для применения стилей к элементу привязки.


const linkClass = `category ${selectedCategory.className}`;




Шаг 41

Далее верните элемент привязки внутри шаблонных литералов. Для атрибута href присвойте значение константы url.


return `<a href="${url}"></a>`;




Шаг 42

После атрибута href установите атрибут class равным константе linkClass. После атрибута class установите атрибут target равным "_blank". Наконец, поместите константу linkText между тегами привязки, чтобы отобразить текст ссылки.


return `<a href="${url}" class="${linkClass}" target="_blank">${linkText}</a>`;




Шаг 43

Внутри первого элемента td добавьте встроенное выражение ${}. Внутри этого выражения вызовите функцию forumCategory с аргументом category_id. Теперь под каждой темой сообщения должна отображаться категория.


${forumCategory(category_id)}




Шаг 44

Каждое сообщение на форуме будет содержать список изображений аватаров пользователей, представляющих всех пользователей, участвующих в обсуждении данной темы. Начните с создания стрелочной функции с именем avatars и двумя параметрами: posters и users.


const avatars = (posters, users) => {};




Шаг 45 Следующий шаг — пройтись по массиву posters, чтобы получить все их аватары. Начните с добавления ключевого слова return, за которым следует posters.map(). В функцию обратного вызова добавьте параметр с именем poster.


return posters.map((poster) => {});




Шаг 46

Следующий шаг — найти нужного пользователя в массиве users. Начните с создания константы с именем user и присвойте ей значение users.find(). Метод find должен иметь функцию обратного вызова с параметром user. Внутри функции обратного вызова метода find неявно верните результат проверки того, строго ли user.id равен poster.user_id.


const user = users.find(user => user.id === poster.user_id);




Шаг 47

Далее проверьте, существует ли пользователь. Добавьте оператор if с указанием user в качестве условия.


if (user) {}




Шаг 48

Чтобы настроить размер аватара, вы можете установить его значение равным 30. Начните с создания константы с именем avatar. Затем присвойте ей результат использования метода replace для user.avatar_template. Для метода replace используйте /{size}/ в качестве первого аргумента и число 30 в качестве второго аргумента.


const avatar = user.avatar_template.replace(/{size}/, 30);




Шаг 49

Далее вы создадите объект userAvatarUrl. Начните с создания константы с именем userAvatarUrl. Затем используйте тернарный оператор, чтобы проверить, начинается ли аватар с "/user_avatar/". Если да, используйте метод concat для объединения avatar и avatarUrl. В противном случае верните avatar. Это гарантирует правильное формирование URL-адреса аватара независимо от того, является ли он относительным или абсолютным.


const userAvatarUrl = avatar.startsWith("/user_avatar/") ? avatarUrl.concat(avatar) : avatar;




Шаг 50

Наконец, вам нужно будет вернуть изображение для аватара пользователя. Начните с добавления оператора return, за которым следует набор шаблонных литералов. Внутри шаблонных литералов добавьте элемент img. Внутри тега img добавьте атрибут src со значением ${userAvatarUrl}. Для атрибута alt добавьте значение ${user.name}.


return `<img src="${userAvatarUrl}" alt="${user.name}" />`;




Шаг 51

В конце метода map вызовите метод join(). В качестве разделителя передайте пустую строку.




Шаг 52

На следующих шагах вам нужно будет добавить функциональность для отображения аватаров пользователей. Внутри второго элемента td добавьте элемент div с классом "avatar-container".


<div class="avatar-container"></div>




Шаг 53

Внутри элемента div вызовите функцию avatars и передайте в нее аргументы posters и users. Теперь вы должны увидеть аватары, отображаемые на странице.


${avatars(posters, users)}




Шаг 54

Ваш проект почти завершен. Осталось только добавить последний элемент. Пользователи должны иметь возможность кликнуть по любому заголовку сообщения и перейти к самому сообщению на форуме freeCodeCamp. Начните с изменения существующего элемента абзаца внутри первого элемента td на элемент привязки.




Шаг 55

Для открывающего тега установите атрибут target в значение "_blank". Затем установите атрибут href в значение ${forumTopicUrl}${slug}/${id}. И с этими изменениями ваш проект таблицы лидеров форума freeCodeCamp завершен!

 */