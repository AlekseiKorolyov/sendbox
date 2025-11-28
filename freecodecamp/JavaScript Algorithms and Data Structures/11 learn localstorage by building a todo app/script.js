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






















/*



Шаг 5

Создайте константу taskData и присвойте ей пустой массив. Этот массив будет хранить все задачи вместе с их данными, включая название, срок выполнения и описание. Это хранилище позволит вам отслеживать задачи, отображать их на странице и сохранять в localStorage. Используйте let для создания переменной currentTask и присвойте ей пустой объект. Эта переменная будет использоваться для отслеживания состояния при редактировании и отмене задач.


const taskData = [];
let currentTask = {};




 */