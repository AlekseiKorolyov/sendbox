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

openTaskFormBtn.addEventListener("click", () => {
    taskForm.classList.toggle("hidden");
});

closeTaskFormBtn.addEventListener("click", () => {
    confirmCloseDialog.showModal();
});

cancelBtn.addEventListener("click", () => {
    confirmCloseDialog.close();
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






 */