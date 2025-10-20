const calorieCounter = document.getElementById("calorie-counter");
const budgetNumberInput = document.getElementById("budget");
const entryDropdown = document.getElementById("entry-dropdown");
const addEntryButton = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");
const output = document.getElementById("output");
let isError = false;

function cleanInputString(str) {
    const regex = /[+-\s]/g;
    return str.replace(regex, "");
}

function isInvalidInput(str) {
    const regex = /\d+e\d+/i;
    return str.match(regex);
}

function addEntry() {
    const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
    const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length;
    const HTMLString = `
    <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
    <input type="text" placeholder="Name" id="${entryDropdown.value}-${entryNumber}-name" />
    <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
    <input type="number" min="0" placeholder="Calories" id="${entryDropdown.value}-${entryNumber}-calories" />`;
    targetInputContainer.innerHTML += HTMLString;
}





















/*

17          is или has
19          регулярные выражения
20          экранирование символа «+»
23          Регулярное выражение Флаг g
30          флаг i, который означает «нечувствительный»
32          Модификатор + в регулярном выражении
33          сокращённый класс символов для любой цифры
34          метод .match()  Метод match возвращает null, если совпадений не найдено
42          Шаблонные литералы обозначаются обратными кавычками ``, а не одинарными или двойными кавычками.
44          метод querySelectorAll()
52          Свойство innerHTML







Шаг 17

В программировании добавление префикса is или has к переменной — распространённая практика, указывающая на то, что переменная представляет собой логическое значение. Вот несколько примеров:
Пример кода

let isRunning = true;
let hasCompleted = false;

Объявите переменную с именем isError с помощью let и инициализируйте её значением false, что позволит впоследствии переназначить её. Позже в проекте вы обновите значение isError, если пользователь введёт недопустимое значение.



Шаг 19

Для поиска определённых символов в строке можно использовать регулярные выражения, или сокращённо «регулярное выражение». Регулярное выражение в JavaScript обозначается шаблоном, заключённым в косые черты. Следующий пример будет соответствовать строковому литералу «hello»:
Пример кода

const regex = /hello/;

Объявите переменную регулярного выражения и присвойте ей значение из примера выше. В дальнейшем вы обновите этот шаблон регулярного выражения для поиска определённых символов, необходимых для счётчика калорий.





Шаг 20

Текущий шаблон будет точно соответствовать тексту «hello», что не является желаемым результатом. Вместо этого нужно искать +, - или пробелы. Замените шаблон в переменной регулярного выражения на \+- для соответствия символам «плюс» и «минус». Обратите внимание, что для экранирования символа «+» необходимо использовать обратную косую черту \, поскольку он имеет особое значение в регулярных выражениях.

const regex = /\+-/;



Шаг 21

В регулярных выражениях сокращённые классы символов позволяют сопоставлять определённые символы без необходимости их указания в шаблоне. Классы символов начинаются с обратной косой черты (\). Класс символов \s будет соответствовать любому пробелу. Добавьте его в шаблон регулярного выражения.

const regex = /\+-\s/;



Шаг 22

Ваш текущий шаблон пока не работает. /+-\s/ ищет +, - и пробел по порядку. Это будет соответствовать +- hello, но не +hello. Чтобы шаблон соответствовал каждому из этих символов по отдельности, необходимо преобразовать их в класс символов. Это делается путем заключения соответствующих символов в скобки. Например, этот шаблон будет соответствовать символам h, e, l или o:
Пример кода

const regex = /[helo]/;

Преобразуйте ваш шаблон +-\s в класс символов. Обратите внимание, что вам больше не нужно экранировать символ +, поскольку вы используете класс символов.


const regex = /[+-\s]/;




Шаг 23

Регулярное выражение также может принимать определённые флаги для изменения поведения сопоставления с шаблоном. Флаги добавляются после закрывающего символа /. Флаг g, который означает «глобальный», указывает шаблону продолжать поиск после нахождения совпадения. Вот пример:
Пример кода

const helloRegex = /hello/g;

Добавьте флаг g к шаблону регулярного выражения.

 function cleanInputString(str) {
  console.log("original string: ", str);
  const regex = /[+-\s]/g;
  return str.replace(regex, '');
}

console.log(cleanInputString("+-99"));



Шаг 30

Буква «e» в числовом вводе также может быть заглавной буквой «E». Однако в регулярном выражении для этого есть флаг i, который означает «нечувствительный».
Пример кода

/Hello/i

Регулярное выражение выше будет соответствовать hello, Hello, HELLO и даже hElLo благодаря флагу i. Этот флаг делает ваш шаблон нечувствительным к регистру. Добавьте флаг i к шаблону вашего регулярного выражения.

const regex = /e/i;





Шаг 32

Модификатор + в регулярном выражении позволяет найти соответствие шаблону, который встречается один или несколько раз. Чтобы найти соответствие шаблону цифры один или несколько раз, добавьте знак плюс после каждого класса символов цифры. Например: [0-9]+.

const regex = /[0-9]+e[0-9]+/i;




Шаг 33

Существует сокращённый класс символов для любой цифры: \d. Замените классы символов [0-9] этим сокращённым классом.

const regex = /[0-9]+e[0-9]+/i;
const regex = /\d+e\d+/i;


Шаг 34

У строк есть метод .match(), принимающий в качестве аргумента регулярное выражение. .match() вернёт массив результатов сопоставления, содержащий либо первое совпадение, либо все совпадения, если используется глобальный флаг.
Пример кода

const str = 'example string';
const regex = /example/;
const result = str.match(regex); // Возвращает ['example']

Вернет результат вызова метода .match() для str и передачи переменной регулярного выражения в качестве аргумента. Этот результат сопоставления понадобится вам позже.

function isInvalidInput(str) {
  const regex = /\d+e\d+/i;

}

***

function isInvalidInput(str) {
  const regex = /\d+e\d+/i;
  return str.match(regex);
}



Шаг 40

Вам нужно знать, к какой категории относится запись. К счастью, вы добавили раскрывающийся список, позволяющий пользователю выбрать категорию. Помните, что ранее вы запросили этот раскрывающийся список в JavaScript и присвоили его переменной entryDropdown. Вы можете использовать свойство value, чтобы получить значение выбранного варианта. Используйте конкатенацию, чтобы добавить символ # в начало свойства value переменной entryDropdown и присвоить результат переменной targetId.




Шаг 42

В JavaScript есть функция, называемая шаблонными литералами, которая позволяет вставлять переменные непосредственно в строку. Шаблонные литералы обозначаются обратными кавычками ``, а не одинарными или двойными кавычками. Переменные можно передать в шаблонный литерал, заключив переменную в ${} — значение переменной будет вставлено в строку. Например: Пример кода

const name = "Naomi";
const templateLiteral = `Hello, my name is ${name}~!`;
console.log(templateLiteral);

В консоли будет отображена строка "Hello, me name is Naomi~!". Замените объединенную строку в querySelector шаблонным литералом, не забыв оставить пробел между переменной targetId и .input-container.

const targetInputContainer = document.querySelector(targetId + " .input-container");

***

const targetInputContainer = document.querySelector(`${targetId} .input-container`);




Шаг 44

Вам потребуется пронумеровать записи, добавляемые пользователем. Чтобы получить все введённые числа, можно использовать метод querySelectorAll(). Метод querySelectorAll() возвращает список NodeList всех элементов, соответствующих селектору. NodeList — это объект, подобный массиву, поэтому доступ к элементам можно получить, используя скобки. Объявите переменную entryNumber и присвойте ей значение targetInputContainer.querySelectorAll(). Передавать аргумент селектору запроса пока не нужно.

function addEntry() {
  const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);

}

***

const entryNumber = targetInputContainer.querySelectorAll();



Шаг 45.

Выполнено Каждая запись будет иметь текстовое поле для ввода названия и числовое поле для калорийности. Чтобы получить количество записей, можно выполнить запрос по текстовым полям. Передайте строку input[type="text"] методу querySelectorAll(). Помните, что если вы используете одинарные кавычки для строки, внутри неё необходимо использовать двойные кавычки (и наоборот). Это вернёт список NodeList всех текстовых полей в форме. Затем вы можете получить количество записей, обратившись к свойству length списка NodeList. Сделайте это в той же строке.

const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length;







Шаг 46

Теперь вам нужно создать динамическую HTML-строку для добавления на веб-страницу. Объявите новую переменную HTMLString и присвойте ей пустую строку-шаблон.


const HTMLString = ``;




Шаг 47

Внутри шаблонного литерала создайте элемент label и присвойте ему текст Entry # Name. Используя синтаксис шаблонного литерала, замените # на значение entryNumber.

`<label>Entry ${entryNumber} Name</label>`





Шаг 48

Добавьте к элементу label атрибут for со значением X-#-name, где X — значение элемента entryDropdown, а # — значение entryNumber. Помните, что атрибуты HTML должны быть заключены в двойные кавычки.

`<label>Entry ${entryNumber} Name</label>`

***

<label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>`;






Шаг 52

Чтобы увидеть новое HTML-содержимое для targetInputContainer, необходимо использовать свойство innerHTML. Свойство innerHTML задаёт или возвращает HTML-содержимое внутри элемента. Вот элемент формы с вложенными в него меткой и элементом ввода.
Пример кода

<form id="form">
    <label for="first-name">Имя</label>
    <input id="first-name" type="text">
</form>

 Если вы хотите добавить ещё одну метку и элемент ввода внутрь формы, используйте свойство innerHTML, как показано ниже:
 Пример кода

 const formElement = document.getElementById("form");
 const formContent = `
    <label for="last-name">Фамилия</label>
    <input id="last-name" type="text">
 `;
 formElement.innerHTML += formContent;

 Используйте оператор присваивания сложения +=, чтобы добавить переменную HTMLString к targetInputContainer.innerHTML.


 targetInputContainer.innerHTML += HTMLString;



 */