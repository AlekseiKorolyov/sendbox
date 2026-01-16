const isEven = (num) => num % 2 === 0;
const sum = (nums) => nums.reduce((acc, el) => acc + el);
const average = (nums) => sum(nums) / nums.length;

const median = (nums) => {
    const sorted = nums.slice().sort((a, b) => a - b);
    const length = sorted.length;
    const middle = length / 2 - 1;
    return isEven(length) ? average([sorted[middle], sorted[middle + 1]]) : sorted[Math.ceil(middle)];
};

const range = (start, end) => Array(end - start + 1).fill(start).map((element, index) => element + index);
const charRange = (start, end) => range(start.charCodeAt(0), end.charCodeAt(0)).map((code) => String.fromCharCode(code));

window.onload =  () => {
    const container = document.getElementById("container");
    const createLabel = (name) => {
        const label = document.createElement("div");
        label.className = "label";
        label.textContent = name;
        container.appendChild(label);
    };
    const letters = charRange("A", "J");
    letters.forEach(createLabel);
    range(1, 99).forEach(number => {
        createLabel(number)
        letters.forEach((letter) => {
            const input = document.createElement("input");
            input.type = "text";
            input.id = letter + number;
            input.ariaLabel = letter + number;
            container.appendChild(input);
        });
    });
};





























/*
Шаг 1

Ваш проект начинается с базового HTML-контейнера и соответствующего CSS. Ваша первая задача — программно сгенерировать ячейки для вашей электронной таблицы. Глобальный объект window представляет собой окно браузера (или вкладку). Он имеет свойство onload, которое позволяет определить поведение после загрузки всей страницы окном, включая таблицы стилей и скрипты. Начните с установки свойства onload объекта window в стрелочную функцию без параметров. В функции объявите переменную container и присвойте ей значение, полученное путем получения элемента по идентификатору "container".


window.onload =  () => {
  const container = document.getElementById("container");
};




Шаг 2

Функции идеально подходят для многократно используемой логики. Когда самой функции необходимо повторно использовать логику, можно объявить вложенную функцию для обработки этой логики. Вот пример вложенной функции:
Пример кода

const outer = () => {
 const inner = () => {
  };
 };

Объявите вложенную функцию createLabel, используя стрелочный синтаксис. Она должна принимать параметр name.


  const createLabel = (name) => {

  };




Шаг 3

Помните, что у объекта документа есть метод `.createElement()`, который позволяет динамически создавать новые HTML-элементы. В функции `createLabel` объявите переменную `label` и присвойте ей новый элемент `div`.


const label = document.createElement("div");




Шаг 4

Установите для элемента label значение className равным "label", а для параметра textContent — значение name.


  label.className = "label";
  label.textContent = name;





Шаг 5

Наконец, используйте метод `.appendChild()`, чтобы добавить элемент label к элементу container.


container.appendChild(label);




Шаг 6

Вам понадобится функция для генерации диапазона чисел. Объявите пустую функцию range, которая принимает параметры start и end. Используйте конструктор Array() и неявно верните пустой массив.


const range = (start, end) => Array();




Шаг 7 Размер вашего массива должен соответствовать размеру диапазона. Вы можете вычислить это, найдя разницу между end и start и добавив 1 к результату. Передайте это вычисление в качестве аргумента конструктору Array().


end - start + 1




Шаг 8

Конструктор Array() имеет метод .fill(), который можно использовать для заполнения массива значением. Вы можете использовать его для заполнения массива start значением. Привяжите метод .fill() к конструктору Array() и передайте ему start значение.


const range = (start, end) => Array(end - start + 1).fill(start);




Шаг 9

В настоящее время ваша функция range возвращает массив правильной длины, но все значения в нем равны значению переменной start. Чтобы это исправить, свяжите метод .map() с вашим методом .fill(). Передайте методу .map() функцию обратного вызова, которая принимает в качестве параметров element и index и возвращает сумму этих параметров.


const range = (start, end) => Array(end - start + 1).fill(start).map((element, index) => element + index);




Шаг 10

Теперь, когда у вас есть функция range, вы можете использовать ее и для создания диапазона букв. Объявите функцию charRange, используя синтаксис const и стрелка. Она должна принимать параметры start и end. Функция должна неявно возвращать результат вызова функции range() с аргументами start и end.


const charRange = (start, end) => range(start, end);




Шаг 11

Ваша функция range ожидает числа, но начальное и конечное значения будут строками (в частности, это будут отдельные символы, например, A). Преобразуйте начальное и конечное значения в вызове range() в числа, используя метод .charCodeAt(), передав в качестве аргумента этому методу число 0.


const charRange = (start, end) => range(start.charCodeAt(0), end.charCodeAt(0));




Шаг 12

Функция range() вернет массив чисел, которые вам нужно преобразовать обратно в символы. Привяжите метод .map() к вызову range(). Передайте функцию обратного вызова, которая принимает code в качестве параметра и неявно возвращает значение переданного code методу String.fromCharCode().


const charRange = (start, end) => range(
  start.charCodeAt(0), end.charCodeAt(0)).map((code) => String.fromCharCode(code));




Шаг 13

Теперь, когда ваши вспомогательные функции готовы, в обработчике события onload вам следует объявить переменную letters. Присвойте ей результат вызова функции charRange() с буквами "A" и "J" в качестве аргументов.


const letters = charRange("A", "J");




Шаг 14

Теперь вызовите метод `.forEach()` вашего массива letters и передайте ссылку на функцию `createLabel` в качестве функции обратного вызова. Вы должны увидеть несколько букв в верхней части вашей электронной таблицы.


letters.forEach(createLabel);




Шаг 15

Помните, что метод range() возвращает массив, поэтому вы можете напрямую привязывать методы массивов к вызову функции. Вызовите метод range() с аргументами 1 и 99 и вызовите метод .forEach(). Передайте методу .forEach() пустую функцию обратного вызова, которая принимает number в качестве параметра.


range(1, 99).forEach((number) => {});




Шаг 16

В функции обратного вызова вам потребуется сделать два вызова. Начните с вызова функции createLabel() и передайте в качестве аргумента number. Вы должны увидеть несколько чисел в вашей электронной таблице. Затем вызовите метод .forEach() для вашего массива letters. Передайте пустую функцию обратного вызова, которая принимает параметр в виде letter.


    createLabel(number)
    letters.forEach((letter) => {});




Шаг 17

Теперь во вложенном вызове метода .forEach() объявите input переменную. Используйте метод .createElement() объекта document для создания элемента input. Установите атрибут type в значение "text", а атрибут id — в значение "letter + number".


      const input = document.createElement("input");
      input.type = "text";
      input.id = letter + number;




Шаг 18

В предыдущих проектах вы изучили метод setAttribute. Другой способ обновить атрибут в JavaScript — использовать следующий синтаксис:
Пример кода

el.attribute = value;

Названия свойств для значений HTML-атрибутов с дефисом, таких как aria-label, следуют верблюжьему регистру и становятся ariaLabel.
Пример кода

el.ariaLabel = "Значение метки Aria";

Установите атрибут aria-label для элемента input на то же значение, что и атрибут id.


input.ariaLabel = letter + number;




Шаг 19

Добавьте элемент input к вашему элементу container в качестве дочернего элемента. Теперь вы должны видеть ячейки вашей электронной таблицы.


container.appendChild(input);




Шаг 20

Большинство программ для работы с электронными таблицами включают встроенные функции для вычислений. Объявите функцию sum, которая принимает параметр nums, представляющий собой массив чисел. Она должна возвращать результат вызова функции reduce для этого массива, суммирующего все числа.


const sum = (nums) => nums.reduce((acc, el) => acc + el);




Шаг 21

Объявите функцию isEven, которая принимает параметр num и возвращает true, если число четное, и false в противном случае. Используйте оператор деления по модулю % для определения того, является ли число четным или нечетным.


const isEven = (num) => num % 2 === 0 ? true : false;




Шаг 22

Объявите average функцию  вычисления среднего значения, которая принимает массив чисел в качестве параметра nums. Она должна возвращать среднее арифметическое всех чисел в массиве. Среднее значение можно вычислить, разделив сумму всех чисел в массиве на длину массива. Помните, что у вас есть функция sum, которую вы можете использовать.


const average = (nums) => sum(nums) / nums.length;




Шаг 23

Следующая функция вычислит медианное значение массива чисел. Начните с объявления стрелочной функции median вычисления медианы, которая принимает параметр типа nums. В функции объявите переменную sorted и присвойте ей значение отсортированной копии массива nums. Для создания поверхностной копии массива следует использовать метод slice().


const median = (nums) => {
  const sorted = nums.slice().sort((a, b) => a - b);
  };




Шаг 24

Теперь объявите переменную length и присвойте ей длину отсортированного массива, а также middle переменная, значение которой равно длине, деленной на 2, вычтено 1.


  const length = sorted.length;
  const middle = length / 2 - 1;




Шаг 25

Проверьте, является ли length четной, используя функцию isEven. Если да, верните middle в середине списка и числа после него. Если оно нечетное, верните middle в середине списка — вам нужно будет округлить middle в большую сторону.



return isEven(length) ? average([sorted[middle], sorted[middle + 1]]) : sorted[Math.ceil(middle)];










*/