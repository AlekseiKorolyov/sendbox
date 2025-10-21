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
    const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
    const HTMLString = `
    <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
    <input type="text" placeholder="Name" id="${entryDropdown.value}-${entryNumber}-name" />
    <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
    <input type="number" min="0" placeholder="Calories" id="${entryDropdown.value}-${entryNumber}-calories" />`;
    targetInputContainer.insertAdjacentHTML("beforeend", HTMLString);
}

function calculateCalories(e) {
    e.preventDefault();
    isError = false;

    const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type='number']");
    const lunchNumberInputs = document.querySelectorAll("#lunch input[type='number']");
    const dinnerNumberInputs = document.querySelectorAll("#dinner input[type='number']");
    const snacksNumberInputs = document.querySelectorAll("#snacks input[type='number']");
    const exerciseNumberInputs = document.querySelectorAll("#exercise input[type='number']");

    const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
    const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
    const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
    const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
    const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
    const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);

    if (isError) {
        return
    }

    const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
    const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
    const surplusOrDeficit = (remainingCalories < 0) ? "Surplus" : "Deficit";
    output.innerHTML = `
    <span class="${surplusOrDeficit.toLowerCase()}">${Math.abs(remainingCalories)} Calorie ${surplusOrDeficit}</span>
    <hr>
    <p>${budgetCalories} Calories Budgeted</p>
    <p>${consumedCalories} Calories Consumed</p>
    <p>${exerciseCalories} Calories Burned</p>
    `;

    output.classList.remove("hide");
}

function getCaloriesFromInputs(list) {
    let calories = 0;
    function getCaloriesFromInputs(list) {
        let calories = 0;
        for (const item of list) {
            const currVal = cleanInputString(item.value);
            const invalidInputMatch = isInvalidInput(currVal);
            if (invalidInputMatch) {
                alert(`Invalid Input: ${invalidInputMatch[0]}`);
                isError = true;
                return null;
            }
            calories += Number(currVal);
        }
        return calories;
    }
}

function clearForm() {
    const inputContainers = Array.from(document.querySelectorAll('.input-container'));
    for (const container of inputContainers) {
        container.innerHTML = "";
    }
    budgetNumberInput.value = "";
    output.innerText = "";
}

addEntryButton.addEventListener("click", addEntry);
calorieCounter.addEventListener("submit", calculateCalories);





















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
53          метод addEventListener
55 - 56     .insertAdjacentHTML();
59          for...of
82          метод toLowerCase() 'JESSICA'; console.log(firstName.toLowerCase()); // Вывод: jessica
84          Math.abs() возвращает абсолютное значение числа.
85          <hr/>  чтобы создать горизонтальную линию
88          метод .remove(), который принимает строку, представляющую класс, который нужно удалить из элемента
92          метод .from(), который принимает значения, подобные массиву, и возвращает массив
95          innerText






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




 Шаг 53

 В проекте «Ролевая игра» вы узнали, как настроить поведение кнопки, отредактировав её свойство onclick. Вы также можете изменить поведение элемента, добавив прослушиватель событий. В следующем примере метод addEventListener используется для добавления события click к кнопке. При нажатии кнопки вызывается функция printName.
 Пример кода

 <button class="btn">Print name</button>

 Пример кода

 const button = document.querySelector('.btn');
 function printName() {
  console.log("Jessica");
  }
  button.addEventListener('click', printName);


  Метод addEventListener принимает два аргумента. Первый — это событие, которое нужно отследить (например, 'click'). Второй — это функция обратного вызова, или функция, которая запускается при срабатывании события. Вызовите метод .addEventListener() для addEntryButton. Передайте строку «click» в качестве первого аргумента и функцию addEntry в качестве второго аргумента. Обратите внимание, что не следует вызывать addEntry, а следует передавать переменную (или ссылку на функцию) напрямую.


  addEntryButton.addEventListener("click", addEntry);




Шаг 54

Попробуйте добавить несколько записей в категорию «Завтрак», и вы можете заметить некоторые ошибки! Первое, что нам нужно исправить, — это количество записей: у первой записи оно должно быть равно 1, а не 0. Эта ошибка возникает, потому что вы запрашиваете элементы input[type="text"] перед добавлением новой записи на страницу. Чтобы исправить это, обновите переменную entryNumber, указав значение длины запроса плюс 1. Добавьте это значение в строку объявления, а не в строки шаблона.




Шаг 55

Другая ошибка возникает, если вы добавляете запись «Завтрак», заполняете её, а затем добавляете вторую запись «Завтрак». Вы увидите, что добавленные вами значения исчезли. Это происходит потому, что вы обновляете innerHTML напрямую, что не сохраняет содержимое входных данных. Измените назначение innerHTML так, чтобы вместо этого использовался метод insertAdjacentHTML() объекта targetInputContainer. Пока не передавайте аргументы.


targetInputContainer.insertAdjacentHTML();




Шаг 56

Метод insertAdjacentHtml принимает два аргумента. Первый аргумент — строка, указывающая позицию вставляемого элемента. Второй аргумент — строка, содержащая HTML-код для вставки. В качестве первого аргумента передайте строку "beforeend", чтобы вставить новый элемент как последний дочерний элемент targetInputContainer. В качестве второго аргумента передайте переменную HTMLString.


targetInputContainer.insertAdjacentHTML("beforeend", HTMLString);



Шаг 59

Параметр list будет результатом селектора запроса, который вернет NodeList. NodeList — это список элементов, подобный массиву. Он содержит элементы, соответствующие селектору запроса. Вам нужно будет выполнить цикл по этим
элементам в списке. На предыдущих шагах вы узнали, как перебирать массив с помощью цикла for. Вы также можете использовать цикл for...of для перебора массива и NodeList. Цикл for...of используется для перебора элементов итерируемого объекта, например массива. Переменная, объявленная в цикле, представляет текущий элемент, по которому выполняется итерация.
Пример кода

for (const element of elementArray) {
 console.log(element);
 }

 Создайте цикл for...of, который перебирает список. В качестве имени переменной цикла используйте const для объявления переменной с именем item.


 function getCaloriesFromInputs(list) {
  let calories = 0;
  for (const item of list) {

  }
}



Шаг 60

Значения NodeList, которые вы передадите в list, будут состоять из элементов ввода. Поэтому вам нужно будет проверить атрибут value каждого элемента. Присвойте item.value константной переменной currVal.

const currVal = item.value;




Шаг 63

Помните, что функция isInvalidInput возвращает String.match, представляющий собой массив совпадений, или null, если совпадений не найдено. В JavaScript значения могут быть либо истинными, либо ложными. Значение истинно, если при преобразовании в логическое значение оно становится истинным. Значение ложно, если при преобразовании в логическое значение оно становится ложным. NULL — пример ложного значения. Вам необходимо проверить истинность invalidInputMatch. Это можно сделать, передав переменную непосредственно в условие if (без оператора сравнения). Вот пример проверки истинности helloWorld.
Пример кода

if (helloWorld) {

}

Добавьте оператор if, который проверяет истинность invalidInputMatch.


if (invalidInputMatch) {

    }



    Шаг 64

    В браузерах есть встроенная функция alert(), которую можно использовать для отображения всплывающего сообщения пользователю. Отображаемое сообщение передаётся в качестве аргумента функции alert(). Используя шаблонный литерал, в блоке if вызовите функцию alert(), чтобы сообщить пользователю «Недопустимый ввод:», а затем укажите первое значение из массива invalidInputMatch.


if (invalidInputMatch) {
      alert(`Invalid Input: ${invalidInputMatch[0]}`)
    }



Шаг 66

Помните, что return завершает выполнение функции. После блока if необходимо обработать логику, когда входные данные допустимы. Поскольку оператор if возвращает значение, оператор else не нужен. Используйте оператор присваивания сложения, чтобы прибавить currVal к общему количеству калорий. Для преобразования currVal в число вам потребуется конструктор Number. Конструктор Number — это функция, преобразующая значение в число. Если значение невозможно преобразовать, он возвращает NaN, что означает «Не число». Вот пример:
Пример кода

Number('10'); // возвращает число 10
Number('abc'); // возвращает NaN


calories += Number(currVal);



Шаг 69

Эту функцию нужно прикрепить к событию отправки формы. Событие отправки срабатывает при отправке формы. Действие по умолчанию для события отправки — перезагрузка страницы. Вам необходимо предотвратить это действие по умолчанию с помощью метода preventDefault() параметра e. Добавьте в функцию calculateCalories строку, которая вызывает метод preventDefault() параметра e. Затем сбросьте глобальный флаг ошибки isError до false.




Шаг 76

Вам также необходимо получить значение вашего входного параметра #budget. Вы уже запросили его в начале кода и присвоили его переменной budgetNumberInput. Однако вы использовали getElementById, которая возвращает Element, а не NodeList. NodeList — это объект, подобный массиву, что означает возможность итерации по нему, и он использует некоторые общие методы с массивом. Для функции getCaloriesFromInputs массив будет работать в качестве аргумента так же, как и NodeList. Объявите переменную budgetCalories и присвойте ей результат вызова getCaloriesFromInputs, передав в качестве аргумента массив, содержащий ваш budgetNumberInput.






Шаг 80

Вам необходимо узнать, находится ли пользователь в состоянии избытка или дефицита калорий. Избыток калорий — это когда вы потребляете больше калорий, чем сжигаете, а дефицит калорий — когда вы сжигаете больше калорий, чем потребляете. Сжигание такого же количества калорий, как и потребляемые, называется поддержанием и может рассматриваться как нулевой избыток или нулевой дефицит, в зависимости от ваших целей. Объявите переменную surplusOrDeficit. Затем используйте тернарный оператор, чтобы присвоить surplusOrDeficit строку «Surplus» или «Deficit» в зависимости от того, меньше ли значение remainCalories 0. Если оно меньше 0, то surplusOrDeficit должно быть «Surplus». В противном случае — «Deficit».


const surplusOrDeficit = (remainingCalories < 0) ? "Surplus" : "Deficit";




Шаг 82

Если вам нужно преобразовать строку в строчные буквы, можно использовать метод toLowerCase(). Этот метод возвращает вызывающее строковое значение, преобразованное в строчные.
Пример кода

const firstName = 'JESSICA';
console.log(firstName.toLowerCase()); // Вывод: jessica

Для вашей строки output.innerHTML потребуется элемент span. Создайте его и присвойте ему атрибут class, равный переменной surplusOrDeficit. Переменную surplusOrDeficit следует преобразовать в строчные буквы с помощью метода toLowerCase(). Пока не добавляйте текст в элемент span.


output.innerHTML = `
  <span class="${surplusOrDeficit.toLowerCase()}"></span>`;



Шаг 83

Введите в поле «Оставшиеся калории» текст «Избыток калорий или дефицит», заменив «Оставшиеся калории» и «Избыток калорий или дефицит» соответствующими переменными с помощью интерполяции.


${remainingCalories} Calorie ${surplusOrDeficit}




Шаг 84

Если у пользователя избыток калорий, значение remainCalories будет отрицательным. Отображение отрицательного числа в строке результата нежелательно. Math.abs() — это встроенный метод JavaScript, который возвращает абсолютное значение числа.
Пример кода

const num = -5;
Math.abs(num); // 5

В тексте span заключите ссылку remainCalories в Math.abs(), чтобы гарантировать положительное значение.

${Math.abs(remainingCalories)}



Шаг 88

Наконец, вам нужно сделать элемент #output видимым, чтобы пользователь мог видеть ваш текст. Ваша выходная переменная — это Element со свойством classList. У этого свойства есть метод .remove(), который принимает строку, представляющую класс, который нужно удалить из элемента.
Пример кода

const paragraphElement = document.getElementById('paragraph');
paragraphElement.classList.remove('hide');

Используйте метод .remove() свойства classList выходной переменной, чтобы удалить класс скрытия. Не забудьте заключить слово hide в кавычки.

output.classList.remove("hide");




Шаг 89

Если вы нажмёте кнопку «Рассчитать оставшиеся калории», вы увидите, что ничего не происходит. Вам всё равно нужно подключить прослушиватель событий. Добавьте прослушиватель событий к элементу calorieCounter. Тип события должен быть «submit», а функция обратного вызова — «calculateCalories».

calorieCounter.addEventListener("submit", calculateCalories);



Шаг 91

Вам необходимо получить все контейнеры ввода. Объявите переменную inputContainers и присвойте ей значение запроса всех элементов документа с классом input-container.

const inputContainers = document.querySelectorAll(".input-container");



Шаг 92

Помните, что document.querySelectorAll возвращает NodeList, который подобен массиву, но не является им. Однако у объекта Array есть метод .from(), который принимает значения, подобные массиву, и возвращает массив. Это полезно, когда вам нужен доступ к более надёжным методам работы с массивами, о которых вы узнаете в будущем проекте. В следующем примере NodeList из элементов li преобразуется в массив элементов li:
Пример кода
<ul>
<li>Список 1</li>
<li>Список 2</li>
<li>Список 3</li>
</ul>

Пример кода

const listItemsArray = Array.from(document.querySelectorAll('li'));
console.log(listItemsArray); //Вывод: (3) [li, li, li]

Оберните селектор запроса inputContainers в Array.from(). Сделайте это в той же строке, что и ваше заявление.




Шаг 95

Также необходимо очистить текст выходного элемента. Это можно сделать, установив свойство innerText в пустую строку. Разница между innerText и innerHTML заключается в том, что innerText не отображает HTML-элементы, а отображает теги и содержимое в виде необработанного текста.






 */