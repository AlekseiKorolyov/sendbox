const sortButton = document.getElementById("sort");

const sortInputArray = (event) => {
    event.preventDefault();
    const inputValues = document.getElementsByClassName("values-dropdown");
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




























 */