const range = (start, end) => Array();

window.onload =  () => {
    const container = document.getElementById("container");
    const createLabel = (name) => {
        const label = document.createElement("div");
        label.className = "label";
        label.textContent = name;
        container.appendChild(label);
    };
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










*/