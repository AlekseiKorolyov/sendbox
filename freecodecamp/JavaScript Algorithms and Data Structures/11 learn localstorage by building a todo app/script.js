const taskForm = document.getElementById("task-form");
const confirmCloseDialog = document.getElementById("confirm-close-dialog");
const openTaskFormBtn = document.getElementById("open-task-form-btn");
const closeTaskFormBtn = document.getElementById("close-task-form-btn");
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");
const cancelBtn = document.getElementById("cancel-btn");
const discardBtn = document.getElementById("discard-btn");
const tasksContainer = document.getElementById("tasks-container");
const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById("date-input");
const descriptionInput = document.getElementById("description-input");

const taskData = [];
let currentTask = {};

const reset = () => {
    titleInput.value = "";
    dateInput.value = "";
    descriptionInput.value = "";
    taskForm.classList.toggle("hidden");
    currentTask = {};
};

openTaskFormBtn.addEventListener("click", () =>
    taskForm.classList.toggle("hidden")
);

closeTaskFormBtn.addEventListener("click", () => {
    const formInputsContainValues = titleInput.value || dateInput.value || descriptionInput.value;

    if (formInputsContainValues) {
        confirmCloseDialog.showModal();
    } else {
        reset();
    }
});

cancelBtn.addEventListener("click", () => confirmCloseDialog.close());

discardBtn.addEventListener("click", () => {
    confirmCloseDialog.close();
    reset();
});

taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);

    const taskObj = {
        id: `${titleInput.value.toLowerCase().split(" ").join("-")}-${Date.now()}`,
        title: titleInput.value,
        date: dateInput.value,
        description: descriptionInput.value,
    };

    if (dataArrIndex === -1) {
        taskData.unshift(taskObj);
    }

    taskData.forEach(({id, title, date, description}) => {
        tasksContainer.innerHTML += `
            <div class="task" id="${id}">
                <p><strong>Title:</strong> ${title}</p>
                <p><strong>Date:</strong> ${date}</p>
                <p><strong>Description:</strong> ${description}</p>
                <button type="button" class="btn">Edit</button>
                <button type="button" class="btn">Delete</button>
            </div>
        `;
    });
    reset();
});



















/*



Шаг 5

Создайте константу taskData и присвойте ей пустой массив. Этот массив будет хранить все задачи вместе с их данными, включая название, срок выполнения и описание. Это хранилище позволит вам отслеживать задачи, отображать их на странице и сохранять в localStorage. Используйте let для создания переменной currentTask и присвойте ей пустой объект. Эта переменная будет использоваться для отслеживания состояния при редактировании и отмене задач.


const taskData = [];
let currentTask = {};




Шаг 6

Теперь вам предстоит поработать над открытием и закрытием модального окна формы. В предыдущих проектах вы научились добавлять и удалять классы элемента с помощью методов el.classList.add() и el.classList.remove(). Другой метод, используемый со свойством classList, — это метод toggle. Метод toggle добавит класс, если его нет в элементе, и удалит его, если он есть в элементе.
Пример кода

element.classList.toggle("class-to-toggle");

Добавьте прослушиватель событий к элементу openTaskFormBtn и передайте событие click в качестве первого аргумента и анонимную функцию обратного вызова в качестве второго аргумента. Внутри функции обратного вызова используйте метод classList.toggle() для переключения скрытого класса элемента taskForm. Теперь вы можете нажать кнопку «Добавить новую задачу» и увидеть модальное окно формы.


openTaskFormBtn.addEventListener("click", () => {
  taskForm.classList.toggle("hidden");
});





Шаг 7

Модальное окно — это элемент, который предотвращает любое взаимодействие с внешними элементами до тех пор, пока не будет закрыто. Элемент HTML dialog имеет метод showModal(), который можно использовать для отображения модального диалогового окна на веб-странице.
Пример кода

dialogElement.showModal();

Добавьте прослушиватель событий к переменной closeTaskFormBtn и передайте событие click в качестве первого аргумента и функцию обратного вызова в качестве второго аргумента. Для функции обратного вызова вызовите метод showModal() элемента confirmCloseDialog. Это отобразит модальное окно с кнопками «Отменить» и «Отмена».



closeTaskFormBtn.addEventListener("click", () => {
  confirmCloseDialog.showModal();
});




Шаг 8

Если пользователь нажимает кнопку «Отмена», необходимо отменить процесс и закрыть модальное окно, чтобы пользователь мог продолжить редактирование. HTML-элемент dialog имеет метод close(), который можно использовать для закрытия модального диалогового окна на веб-странице.
Пример кода

dialogElement.close();

Добавьте прослушиватель событий к элементу cancelBtn и передайте событие click в качестве первого аргумента и функцию обратного вызова в качестве второго аргумента. Для функции обратного вызова вызовите метод close() элемента confirmCloseDialog.


cancelBtn.addEventListener("click", () => {
  confirmCloseDialog.close();
});




Шаг 9

Если пользователь нажмёт кнопку «Отменить», необходимо закрыть модальное окно с кнопками «Отмена» и «Отменить», а затем скрыть модальное окно формы. Добавьте прослушиватель событий click к discardBtn, затем используйте метод close() для переменной confirmCloseDialog. Также используйте classList для переключения класса hidden в taskForm, чтобы модальное окно формы также закрылось.


discardBtn.addEventListener("click", () => {
  confirmCloseDialog.close();
  taskForm.classList.toggle("hidden");
});




Шаг 10

Теперь, когда вы поработали над открытием и закрытием модального окна, пора получить значения из полей ввода, сохранить их в массиве taskData и отобразить на странице. Для начала добавьте прослушиватель событий submit к элементу taskForm и передайте e в качестве параметра стрелочной функции. Внутри фигурных скобок используйте метод preventDefault(), чтобы предотвратить обновление страницы браузером после отправки формы.

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
});



Шаг 11 Вам необходимо определить, существует ли уже задача, добавляемая в массив taskData. Если задача не существует, вы добавите её в массив. Если она существует, вы обновите её. Для этого можно использовать метод findIndex(). Метод массива findIndex() находит и возвращает индекс первого элемента в массиве, который соответствует критериям, указанным в предоставленной функции обратного вызова для тестирования. Если такой элемент не найден, метод возвращает -1. Функция обратного вызова должна возвращать истинное значение, указывающее на то, что соответствующий элемент найден, и ложное значение в противном случае. Вот пример:
Пример кода

const numbers = [3, 1, 5, 6];
const firstNumLargerThanThree = numbers.findIndex((num) => num > 3);
console.log(firstNumLargerThanThree); // выводит индекс 2

Используйте const для объявления переменной dataArrIndex и присвоения ей значения taskData.findIndex(). Для метода findIndex() передайте стрелочную функцию с item в качестве параметра. В стрелочной функции проверьте, строго ли равно свойство id объекта item свойству id объекта currentTask.


const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);



Шаг 12

Когда пользователь создаёт задачу, её следует сохранить в объекте. Создайте константную переменную taskObj и присвойте ей значение пустого объекта. Затем добавьте ниже оператор console, который выводит значение taskObj в консоль. Откройте консоль, чтобы увидеть пустой объект.


const taskObj = {};
console.log(taskObj);




Шаг 13

В объект taskObj добавьте свойство id name. В качестве значения используйте значение titleInput. Чтобы увидеть новый результат, нажмите кнопку «Добавить новую задачу». Затем добавьте заголовок и нажмите кнопку «Добавить задачу». Откройте консоль, чтобы увидеть результат.


const taskObj = {
    id: titleInput.value,
  };



Шаг 14

Пользователь должен иметь возможность вводить заголовок заглавными и строчными буквами. Однако значение идентификатора должно быть указано строчными буквами. Обновите titleInput.value, чтобы оно было написано строчными буквами. Для этого можно использовать метод toLowerCase().
Пример кода

str.toLowerCase();

Чтобы увидеть новый результат, нажмите кнопку «Добавить новую задачу». Затем добавьте заголовок «WALK DOG» и нажмите кнопку «Добавить задачу». Откройте консоль, чтобы увидеть результат поиска по запросу «walk dog».


id: titleInput.value.toLowerCase(),




Шаг 15

Сейчас ваше значение id представляет собой строку в нижнем регистре. Но конечный результат должен быть строкой с дефисами. Начните с привязки метода split к titleInput.value, чтобы разбить строку на массив слов. В качестве разделителя используйте пробел (" "). Чтобы увидеть новый результат, нажмите кнопку «Добавить новую задачу». Затем добавьте заголовок «WALK DOG» и нажмите кнопку «Добавить задачу». Откройте консоль, чтобы увидеть результат ['walk', 'dog'].


id: titleInput.value.toLowerCase().split(" ")




Шаг 16

Теперь, когда ваш идентификатор представляет собой массив слов, вы можете использовать метод join, чтобы преобразовать результат обратно в строку. В качестве разделителя используйте дефис (-). Чтобы увидеть новый результат, нажмите кнопку «Добавить новую задачу». Затем добавьте заголовок «WALK DOG» и нажмите кнопку «Добавить задачу». Откройте консоль, чтобы увидеть результат «walk-dog».


id: titleInput.value.toLowerCase().split(" ").join("-")



Шаг 17

Осталось сделать ещё одно, чтобы сделать этот идентификатор уникальным. Но сначала поместите всё значение ниже во встроенное выражение ${}.
Пример кода

titleInput.value.toLowerCase().split(" ").join("-")

Затем заключите это значение в строки шаблона. На следующем шаге вы добавите уникальный номер в конец значения идентификатора, чтобы сделать его по-настоящему уникальным.

id: `${titleInput.value.toLowerCase().split(" ").join("-")}`



Шаг 18

Чтобы сделать идентификатор более уникальным, добавьте ещё один дефис и используйте функцию Date.now(). Date.now() возвращает количество миллисекунд, прошедших с 1 января 1970 года 00:00:00 UTC.
Пример кода

console.log(Date.now()); // 1628586800000

Чтобы увидеть новый результат, нажмите кнопку «Добавить новую задачу». Затем добавьте название «WALK DOG» и нажмите кнопку «Добавить задачу». Откройте консоль, чтобы увидеть результат.

-${Date.now()}



Шаг 19

Теперь пора добавить оставшиеся свойства к объекту taskObj. Извлеките значения из полей titleInput, dateInput и descriptionInput, а затем сохраните их в свойствах title, date и description объекта taskObj. Добавьте новую задачу и откройте консоль, чтобы увидеть объект taskObj с новыми свойствами.


    title: titleInput.value,
    date: dateInput.value,
    description: descriptionInput.value,



Шаг 21

Теперь, когда вы получили значения из полей ввода и сгенерировали идентификатор, нужно добавить их в массив taskData, чтобы отслеживать каждую задачу. Однако это следует делать только если задача новая. Если задача уже существует, вы настроите её для редактирования. Именно поэтому у вас есть переменная dataArrIndex, которая содержит индекс каждой задачи. Создайте оператор if с условием dataArrIndex === -1. В операторе if используйте метод unshift(), чтобы добавить объект taskObj в начало массива taskData. unshift() — это метод работы с массивами, который используется для добавления одного или нескольких элементов в начало массива.
Пример кода

const arr = [1, 2, 3];
arr.unshift(0);

// [0, 1, 2, 3]
console.log(arr);


  if (dataArrIndex === -1) {
    taskData.unshift(taskObj);
  }



Шаг 22

Теперь, когда вы сохранили задачу в массиве taskData, вы должны отобразить её на странице, пройдя по ней циклом. Используйте forEach() для taskData, затем деструктурируйте идентификатор, заголовок, дату и описание в качестве параметров. Пока ничего не возвращайте.


taskData.forEach(({id, title, date, description}));



Шаг 23

Используя синтаксис стрелок, завершите функцию обратного вызова forEach. Внутри тела функции обратного вызова используйте дополнительное присваивание, чтобы установить значение innerHTML контейнера tasksContainer равным пустым обратным кавычкам.


taskData.forEach(({id, title, date, description}) => {
    tasksContainer.innerHTML += ``;
  });



Шаг 24

Создайте элемент div с классом task. Используйте строки шаблона, чтобы присвоить атрибуту id элемента div , полученный из данных task.

<div class="task" id="${id}"></div>


Шаг 25

Создайте элемент p и, используя строки шаблона, укажите в его содержимом title, который вы деструктурировали. Непосредственно перед содержимым элемента p создайте элемент strong с текстом Title:.

<p><strong>Title:</strong>${title}</p>



Шаг 26

Аналогично предыдущему шагу создайте ещё один элемент p и вставьте в него деструктурированную дату в качестве текстового содержимого. Внутри этого абзаца создайте элемент strong с текстом Date:.


<p><strong>Date:</strong>${date}</p>




Шаг 27

Создайте ещё один элемент p и вставьте в него description описание в виде текста. Также создайте внутри абзаца элемент strong с текстом Description:.

<p><strong>Description:</strong> ${description}</p>



Шаг 28

Чтобы обеспечить управление задачами, необходимо добавить кнопки «Удалить» и «Редактировать» для каждой задачи. Создайте два элемента «Кнопка» с атрибутом type, установленным на «button», и атрибутом class, установленным на «btn». Задайте текст первой кнопки как «Изменить», а текст второй кнопки как «Удалить».


          <button type="button" class="btn">Edit</button>
          <button type="button" class="btn">Delete</button>


Шаг 29

После добавления задачи на страницу необходимо закрыть модальное окно формы, чтобы увидеть её. Для этого используйте classList, чтобы включить/выключить скрытый класс элемента taskForm.


taskForm.classList.toggle("hidden");



Шаг 30

Если вы попытаетесь добавить ещё одну задачу, вы заметите, что поля ввода сохраняют значения, введённые вами для предыдущей задачи. Чтобы решить эту проблему, необходимо очистить поля ввода после добавления задачи. Вместо того, чтобы очищать поля ввода по одному, рекомендуется создать функцию, которая обрабатывает очистку этих полей. Затем вы можете вызывать эту функцию всякий раз, когда вам снова потребуется очистить поля ввода. Используйте синтаксис стрелок для создания функции reset и задайте ей пару фигурных скобок.


const reset = () => {};



Шаг 31

В функции сброса установите для каждого значения titleInput, dateInput и descriptionInput пустую строку. Также используйте classList для переключения класса, скрытого в taskForm, и установите currentTask как пустой объект. Это связано с тем, что на этом этапе currentTask будет заполнен задачей, которую мог добавить пользователь.


  titleInput.value = "";
  dateInput.value = "";
  descriptionInput.value = "";
  taskForm.classList.toggle("hidden");
  currentTask = {};



Шаг 32

Удалите существующий код, переключающий класс hidden на taskForm, и вместо этого вызовите функцию reset. Это очистит поля ввода и скроет модальное окно формы, чтобы пользователь мог увидеть добавленную задачу.




Шаг 33

Кроме того, удалите существующий код, переключающий класс, скрытый на taskForm, внутри прослушивателя событий discardBtn и вместо этого вызовите функцию сброса. Это связано с тем, что при нажатии кнопки «Отменить» все данные в полях ввода должны исчезнуть.




Шаг 34

Кнопки «Отмена» и «Отменить» должны отображаться пользователю только при наличии текста в полях ввода. Начните с удаления строки confirmCloseDialog.showModal();. Затем внутри прослушивателя событий closeTaskFormBtn напишите логику для проверки наличия значения в полях titleInput, dateInput или descriptionInput. Если какое-либо из этих полей ввода имеет значение, используйте метод showModal() для confirmCloseDialog. В противном случае, если изменений нет, вызовите функцию reset(), чтобы очистить поля ввода и скрыть модальное окно формы.


if (titleInput.value !== "" || dateInput.value !== "" || descriptionInput.value !== "") {
    confirmCloseDialog.showModal();
  } else {
    reset();
  }

***

 const formInputsContainValues = titleInput.value || dateInput.value || descriptionInput.value;

  if (formInputsContainValues) {
    confirmCloseDialog.showModal();
  } else {
    reset();
  }





 */