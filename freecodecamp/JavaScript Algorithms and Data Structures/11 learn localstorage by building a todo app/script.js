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

openTaskFormBtn.addEventListener("click", () =>
    taskForm.classList.toggle("hidden")
);

closeTaskFormBtn.addEventListener("click", () => {
    confirmCloseDialog.showModal();
});

cancelBtn.addEventListener("click", () => confirmCloseDialog.close());

discardBtn.addEventListener("click", () => {
    confirmCloseDialog.close();
    taskForm.classList.toggle("hidden");
});

taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);
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




 */