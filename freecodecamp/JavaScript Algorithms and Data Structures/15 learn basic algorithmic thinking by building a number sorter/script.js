const sortButton = document.getElementById("sort");

const sortInputArray = (event) => {
    event.preventDefault();

    const inputValues = [...document.getElementsByClassName("values-dropdown")].map((dropdown) => dropdown.value);
    console.log(inputValues);
}

sortButton.addEventListener("click", sortInputArray);




























/*
Шаг 1

В этом проекте вы будете создавать сортировщик чисел. HTML и CSS коды предоставлены. Можете свободно их изучить. Когда будете готовы, объявите переменную sortButton и присвойте ей значение из метода .getElementById() с аргументом "sort".




Шаг 2

Для подготовки логики вашего проекта используйте синтаксис const и arrow для объявления функции sortInputArray. Она должна принимать один параметр event.




Шаг 3

Вы будете использовать это в качестве обработчика событий для кнопки сортировки. Поскольку кнопки, связанные с элементом формы, отправляют данные по умолчанию, вам необходимо предотвратить такое поведение. Для этого вызовите event.preventDefault() в вашей функции.


const sortInputArray = (event) => {
  event.preventDefault();
}




Шаг 4

Чтобы протестировать свой код в процессе написания, добавьте обработчик событий к элементу sortButton. Он должен отслеживать событие "click" и принимать sortInputArray в качестве функции обратного вызова.


sortButton.addEventListener("click", sortInputArray);




Шаг 5

В функции sortInputArray вам нужно получить значения из элементов select. Поскольку все они имеют класс values-dropdown, вы можете запросить их все сразу. Используйте document.getElementsByClassName(), чтобы получить все элементы с этим классом, передав аргумент "values-dropdown". Присвойте его переменной inputValues с параметром const.


const inputValues = document.getElementsByClassName("values-dropdown");




Шаг 6

Помните, что метод `.getElementsByClassName()` возвращает `HTMLCollection`, который представляет собой массивоподобный объект, содержащий все элементы с совпадающим именем класса. Вы можете использовать оператор расширения (spread operator) для преобразования его в массив. Преобразуйте вызов `document.getElementsByClassName()` в массив с помощью оператора расширения и присвойте его переменной с именем `inputValues`.


const inputValues = [...document.getElementsByClassName("values-dropdown")];




Шаг 7

Вам нужно получить значения из выбранных элементов. В настоящее время эти значения будут строками, и вам нужно будет преобразовать их в числа. Используйте функцию `map` для итерации по массиву. Передайте в `map` функцию обратного вызова, которая принимает параметр типа `dropdown` и возвращает `dropdown.value`.


const inputValues = [...document.getElementsByClassName("values-dropdown")].map((dropdown) => dropdown.value);




Шаг 8

Для вывода результата inputValues следует использовать console.log(). Код для этого следует написать внутри функции sortInputArray. Чтобы увидеть выведенный в консоль массив inputValues, нажмите кнопку сортировки и откройте консоль. Вы должны увидеть массив строк, подобный этому: Пример кода [ "8", "2", "4", "1", "3" ] Прежде чем продолжить, убедитесь, что вы обратили внимание на тип данных выводимого в консоль результата. На следующем шаге вы преобразуете эти строки в числа.




























 */