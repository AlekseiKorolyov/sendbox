const messageInput = document.getElementById("message-input");
const result = document.getElementById("result");
const checkMessageButton = document.getElementById("check-message-btn");

const helpRegex = /please help|assist me/i;
const dollarRegex = /dollars/i;

const denyList = [helpRegex, dollarRegex];

const isSpam = (msg) => helpRegex.test(msg);

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





Шаг 9

Вместо использования метода `.match()`, вы можете использовать метод `.test()` регулярного выражения, чтобы проверить, соответствует ли строка шаблону. В отличие от `.match()`, `.test()` возвращает логическое значение, указывающее, соответствует ли строка шаблону или нет. Обновите функцию `isSpam()`, чтобы она использовала метод `.test()` функции `helpRegex` для проверки соответствия шаблону `msg`. Затем попробуйте ввести несколько сообщений на вашей странице и посмотрите результат.


const isSpam = (msg) => helpRegex.test(msg);





Шаг 10

Альтернативная последовательность | может использоваться для сопоставления либо текста слева, либо текста справа от |. Например, регулярное выражение /yes|no/ будет соответствовать либо yes, либо no. Обновите ваше helpRegex, чтобы оно соответствовало либо please help, либо assist me.


const helpRegex = /please help|assist me/i;





Шаг 11

Прежде чем начать создавать дополнительные регулярные выражения, необходимо обновить приложение, чтобы оно проверяло более одного регулярного выражения. Начните с объявления переменной denyList. Присвойте ей массив, содержащий ваше helpRegex.


const denyList = [helpRegex];





Шаг 12

У массивов есть метод `.some()`. Как и метод `.filter()`, `.some()` принимает функцию обратного вызова, которая должна принимать элемент массива в качестве аргумента. Метод `.some()` вернет `true`, если функция обратного вызова возвращает `true` хотя бы для одного элемента массива. Вот пример вызова метода `.some()` для проверки, является ли какой-либо элемент массива заглавной буквой.
Пример кода:

const arr = ["A", "b", "C"];
arr.some(letter => letter === letter.toUpperCase());

Используйте метод `.some()` для проверки того, возвращает ли проверка вашего msg на любом из ваших регулярных выражений `denyList` `true`. Для большей ясности используйте `regex` в качестве параметра для функции обратного вызова.


const isSpam = (msg) => denyList.some((regex) => regex.test(msg));





Шаг 13

Следующее регулярное выражение, с которым вы будете работать, — это выражение, которое соответствует упоминаниям сумм в долларах. Начните с объявления переменной dollarRegex и присвойте ей регистронезависимое регулярное выражение, которое соответствует тексту «доллары».





Шаг 14

Добавьте ваш dollarRegex в массив denyList, чтобы вы могли протестировать регулярное выражение. Затем попробуйте ввести сообщение в вашем приложении.


const denyList = [helpRegex, dollarRegex];











 */