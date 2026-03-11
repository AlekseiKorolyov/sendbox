const authorContainer = document.getElementById("author-container");
const loadMoreBtn = document.getElementById("load-more-btn");

fetch("https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json")


















/*
Шаг 1

Весь HTML и CSS для этого проекта предоставлены вам. Вы можете ознакомиться с двумя файлами, чтобы изучить их. Начните с получения элементов #author-container и #load-more-btn с помощью метода .getElementById(). Присвойте их переменным authorContainer и loadMoreBtn соответственно. Переменные не изменятся, поэтому используйте const для их объявления.




Шаг 2

В этом проекте нам нужны данные об авторах на freeCodeCamp News. Если вам нужны данные из онлайн-источника, вам необходимо использовать API (интерфейс прикладного программирования). API позволяет людям извне организации получать её внутренние данные. Существует метод `fetch`, который позволяет коду получать данные из API, отправляя GET-запрос. Вот как можно выполнить GET-запрос с помощью метода `fetch()`: `fetch("url-goes-here")` Выполните GET-запрос к этому URL: `https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json"` Пока не ставьте точку с запятой в конце кода.


fetch("https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json")









 */