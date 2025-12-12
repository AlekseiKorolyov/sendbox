const messageInput = document.getElementById("message-input");
const result = document.getElementById("result");
const checkMessageButton = document.getElementById("check-message-btn");




























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









 */