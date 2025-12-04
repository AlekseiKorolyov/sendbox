const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

const checkUserInput = () => {
    console.log(numberInput.value);
};

convertBtn.addEventListener("click", checkUserInput);




























/*
Шаг 1

В этом проекте вы создадите десятичную и двоичную систему счисления и познакомитесь с обеими системами счисления. Вы также узнаете о рекурсии, используя её для выполнения преобразований. Весь HTML и CSS для этого проекта предоставлены вам. Когда будете готовы начать, используйте метод .getElementById(), чтобы получить элемент ввода с идентификатором "number-input" и сохранить его в переменной numberInput. Используйте тот же метод, чтобы получить элемент кнопки с идентификатором "convert-btn" и сохранить его в переменной convertBtn, а также элемент вывода с идентификатором "result" и сохранить его в переменной result. ПРИМЕЧАНИЕ: В этом проекте будут преобразованы только положительные числа в двоичные.


const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");



Шаг 2

Теперь нужно настроить проверку значения в поле ввода числа при каждом нажатии пользователем кнопки «Преобразовать». Сначала создайте пустую функцию с именем checkUserInput.


const checkUserInput = () => {};




Шаг 3

Хороший способ проверить работоспособность — вывести значение атрибута value элемента numberInput на консоль. Напоминаем, что доступ к значению атрибута value элемента можно получить, используя точку или скобки. В функции checkUserInput используйте console.log() для выведения значения numberInput на консоль.


console.log(numberInput.value);




Шаг 4

Теперь, когда функция checkUserInput() настроена для тестирования, вы можете использовать прослушиватель событий для вызова функции при нажатии кнопки «Конвертировать». Свяжите метод .addEventListener() с convertBtn. Прослушиватель событий должен отслеживать события нажатия и принимать ссылку на функцию checkUserInput в качестве обратного вызова. Помните, что ссылки на функции не вызываются в скобках. После этого при каждом нажатии кнопки «Конвертировать» значение введённого числа должно выводиться в консоль.


convertBtn.addEventListener("click", checkUserInput);










 */