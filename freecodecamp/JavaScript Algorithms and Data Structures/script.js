const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");

const date = new Date();
const day = date.getDate();
























/*


Шаг 3

 В JavaScript существует множество встроенных конструкторов, создающих объекты. Конструктор похож на обычную функцию, но начинается с заглавной буквы и инициализируется оператором new. Например, вы можете использовать конструктор Date() с оператором new для создания нового объекта Date, который возвращает строку с текущей датой и временем:
 Пример кода

 const currentDate = new Date();
 console.log(currentDate);
 // Вывод:
 // Пн, 23 августа 2021 г., 15:31:00 GMT-0400 (восточное летнее время)

 Создайте новую константную переменную с именем date и присвойте ей объект Date с помощью оператора new Date().


const date = new Date();



Шаг 4

Объект Date имеет ряд методов, позволяющих получать дату и время в различных форматах. Один из них — метод .getDate(), который возвращает число от 1 до 31, представляющее день месяца для этой даты. Например:
Пример кода

const date = new Date();
const dayOfTheMonth = date.getDate();
console.log(dayOfTheMonth); // 20

Используя const, создайте переменную с именем day и присвойте ей день месяца из date с помощью метода .getDate().


const day = date.getDate();







 */