const authorContainer = document.getElementById("author-container");
const loadMoreBtn = document.getElementById("load-more-btn");

fetch("https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json")
    .then((res) => console.log(res))


















/*
Шаг 1

Весь HTML и CSS для этого проекта предоставлены вам. Вы можете ознакомиться с двумя файлами, чтобы изучить их. Начните с получения элементов #author-container и #load-more-btn с помощью метода .getElementById(). Присвойте их переменным authorContainer и loadMoreBtn соответственно. Переменные не изменятся, поэтому используйте const для их объявления.




Шаг 2

В этом проекте нам нужны данные об авторах на freeCodeCamp News. Если вам нужны данные из онлайн-источника, вам необходимо использовать API (интерфейс прикладного программирования). API позволяет людям извне организации получать её внутренние данные. Существует метод `fetch`, который позволяет коду получать данные из API, отправляя GET-запрос. Вот как можно выполнить GET-запрос с помощью метода `fetch()`: `fetch("url-goes-here")` Выполните GET-запрос к этому URL: `https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json"` Пока не ставьте точку с запятой в конце кода.


fetch("https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json")




Шаг 3

Метод fetch() возвращает Promise, который представляет собой объект-заполнитель, который будет либо выполнен, если ваш запрос будет успешным, либо отклонен, если ваш запрос будет неуспешным. Если Promise выполнен, он разрешается в объект Response, и вы можете использовать метод .then() для доступа к Response. Вот как можно связать метод .then() с методом fetch():
Пример кода

fetch("sample-url-goes-here")
 .then((res) => res)

Свяжите метод .then() с вашим вызовом fetch. Внутри метода .then() добавьте функцию обратного вызова с параметром res, затем выведите res в консоль, чтобы увидеть объект Response. Откройте консоль браузера и разверните объект Response, чтобы увидеть, что он содержит. Ещё раз, пока не завершайте код точкой с запятой.


.then((res) => console.log(res))









 */