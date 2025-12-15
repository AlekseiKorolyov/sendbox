const messageInput = document.getElementById("message-input");
const result = document.getElementById("result");
const checkMessageButton = document.getElementById("check-message-btn");

const helpRegex = /please help/i;

const isSpam = (msg) => msg.match(helpRegex);

checkMessageButton.addEventListener("click", () => {
    if (messageInput.value === "") {
        alert("Please enter a message.");
        return;
    }
    result.textContent = isSpam(messageInput.value) ? "Oh no! This looks like a spam message." : "This message does not seem to contain any spam.";
    messageInput.value = "";
});


























/*
Шаг 1

Для начала проекта используйте метод `.getElementById()`, чтобы получить элементы `#message-input`, `#result` и `#check-message-btn` из HTML-документа и присвойте их переменным `messageInput`, `result` и `checkMessageButton` соответственно.





Шаг 2

Прикрепите обработчик событий к вашей кнопке checkMessageButton, отслеживающий событие клика. Добавьте к нему пустую функцию обратного вызова.





Шаг 3

Если поле messageInput пустое, выведите пользователю сообщение "Пожалуйста, введите сообщение." Затем завершите выполнение функции.


checkMessageButton.addEventListener("click", () => {
  if (messageInput.value === "") {
    alert("Please enter a message.");
    return;
  }
});





Шаг 4

Создайте функцию isSpam, используя ключевое слово const и стрелочный синтаксис. Функция должна принимать один параметр msg и пока что неявно возвращать false.


const isSpam = (msg) => false;





Шаг 5

В обработчике событий необходимо обновить текст элемента результата. Для этого можно использовать тернарный оператор. Вот пример присвоения результата тернарного оператора текстовому содержимому элемента:
Пример кода

el.textContent = condition ? "Use this text if the condition is true" : "Use this text if the condition is false";

После оператора if используйте тернарный оператор для проверки истинности вызова функции isSpam() с аргументом messageInput.value. Если истинно, установите свойство textContent элемента результата в значение "О нет! Это похоже на спам-сообщение." В противном случае установите его в значение "Это сообщение, похоже, не содержит спама." Затем установите свойство value элемента messageInput в пустую строку.


checkMessageButton.addEventListener("click", () => {
  if (messageInput.value === "") {
    alert("Please enter a message.");
    return;
  }
  result.textContent = isSpam(messageInput.value) ? "Oh no! This looks like a spam message." : "This message does not seem to contain any spam.";
  messageInput.value = "";
});





Шаг 6

Ваше первое регулярное выражение будет использоваться для перехвата запросов на помощь. Объявите переменную helpRegex и присвойте ей регулярное выражение, соответствующее строке "пожалуйста, помогите". В качестве напоминания, вот регулярное выражение для сопоставления строки "hello world": Пример кода const regex = /hello world/;


const helpRegex = /please help/;





Шаг 7

Регулярные выражения могут принимать флаги для изменения своего поведения. Например, флаг i можно использовать, чтобы выражение игнорировало регистр, в результате чего оно будет соответствовать словам hello, HELLO и Hello для выражения /hello/. Флаги добавляются после завершающей косой черты. Добавьте флаг i в ваше helpRegex.


const helpRegex = /please help/i;





Шаг 8

Строки имеют метод `.match()`, который принимает в качестве аргумента регулярное выражение и определяет, соответствует ли строка этому выражению. Обновите функцию `isSpam()` так, чтобы она неявно возвращала результат вызова метода `.match()` для `msg`, передавая в качестве аргумента `helpRegex`. Затем попробуйте ввести несколько сообщений на вашей странице и посмотрите результат.


const isSpam = (msg) => msg.match(helpRegex);










 */