const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");

const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
























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





Шаг 5

Метод .getMonth() возвращает число от 0 до 11. Оно представляет собой месяц для указанной даты, где 0 — январь, а 11 — декабрь. Поскольку возвращаемое этим методом число начинается с нуля, необходимо прибавить к нему 1, чтобы получить ожидаемый номер месяца. Используя const, создайте переменную с именем month и присвойте ей месяц из date с помощью метода .getMonth(). Не забудьте прибавить 1 к числу, возвращаемому .getMonth().


const month = date.getMonth() + 1;




Шаг 6

Метод .getFullYear() возвращает число, представляющее год для указанной даты. Используя const, создайте переменную с именем year и присвойте ей год из date с помощью метода .getFullYear().


const year = date.getFullYear();








 */