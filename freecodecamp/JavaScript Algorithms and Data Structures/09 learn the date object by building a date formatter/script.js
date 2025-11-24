const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");

const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();

const formattedDate = `${day}-${month}-${year}`;
currentDateParagraph.textContent = formattedDate;

dateOptionsSelectElement.addEventListener("change", () => {});
switch (dateOptionsSelectElement.value) {}






















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




Шаг 7

Метод .getHours() возвращает число от 0 до 23. Оно представляет собой час для указанной даты, где 0 — полночь, а 23 — 23:00. Создайте константную переменную с именем hours и присвойте ей час для указанной даты с помощью метода .getHours().

const hours = date.getHours();



Шаг 8

Метод .getMinutes() возвращает число от 0 до 59, представляющее минуты для указанной даты. Создайте константную переменную с именем minutes и присвойте ей минуты для указанной даты с помощью метода .getMinutes().


const minutes = date.getMinutes();



Шаг 9

Далее создайте константную переменную с именем formattedDate и присвойте ей пустые шаблонные литералы.


const formattedDate = ``;



Шаг 10

Внутри шаблонного литерала добавьте встроенное выражение, содержащее переменную дня.




Шаг 11

После переменной дня добавьте тире (-), а затем ещё одно встроенное выражение, содержащее переменную месяца.



Шаг 12

После переменной месяца добавьте тире, а затем ещё одно встроенное выражение, содержащее переменную года.



Шаг 13

Чтобы увидеть результаты переменной formattedDate, добавьте оператор console.log() и передайте переменную formattedDate в качестве аргумента. Откройте консоль, и вы увидите распечатанную дату.

console.log(formattedDate);




Шаг 14

Используйте свойство textContent для currentDateParagraph, чтобы установить его текстовое содержимое в соответствии со значением переменной formattedDate. Также обязательно удалите строку console.log(formattedDate);.


currentDateParagraph.textContent = formattedDate;



Шаг 15

В JavaScript событие change используется для обнаружения изменения значения HTML-элемента:
Пример кода

element.addEventListener("change", () => { });

Присоедините метод addEventListener к dateOptionsSelectElement. Первым аргументом прослушивателя событий должна быть строка "change", а вторым — пустая стрелочная функция.


dateOptionsSelectElement.addEventListener("change", () => {});



Шаг 16

Когда пользователь делает выбор из раскрывающегося меню, функция должна получить значение пользователя и отобразить дату в выбранном формате. Для этого можно использовать оператор switch. Оператор switch используется для сравнения выражения с несколькими возможными значениями и выполнения различных блоков кода в зависимости от совпадения. Он обычно используется для ветвления логики. Например, вот как сравнить выражение dayOfWeek с возможными значениями:
Пример кода

switch (dayOfWeek) {
 case 1:
  console.log("Сегодня понедельник!");
  break;
 case 2:
  console.log("Сегодня вторник!");
  break;
 // ...cases для других рабочих дней
 default:
  console.log("Сегодня выходные!");
}

Создайте оператор switch и используйте dateOptionsSelectElement.value в качестве выражения.


switch (dateOptionsSelectElement.value) {}







 */