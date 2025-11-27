const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport");
const worldCupYear = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");
const myFavoriteFootballTeam = {
    team: "Argentina",
    sport: "Football",
    year: 1986,
    isWorldCupWinner: true,
    headCoach: {
        coachName: "Carlos Bilardo",
        matches: 7,
    },
    players: [
        {
            name: "Sergio Almirón",
            position: "forward",
            number: 1,
            isCaptain: false,
            nickname: null,
        },
        {
            name: "Sergio Batista",
            position: "midfielder",
            number: 2,
            isCaptain: false,
            nickname: null,
        },
        {
            name: "Ricardo Bochini",
            position: "midfielder",
            number: 3,
            isCaptain: false,
            nickname: "El Bocha",
        },
        {
            name: "Claudio Borghi",
            position: "midfielder",
            number: 4,
            isCaptain: false,
            nickname: "Bichi",
        },
        {
            name: "José Luis Brown",
            position: "defender",
            number: 5,
            isCaptain: false,
            nickname: "Tata",
        },
        {
            name: "Daniel Passarella",
            position: "defender",
            number: 6,
            isCaptain: false,
            nickname: "El Gran Capitán",
        },
        {
            name: "Jorge Burruchaga",
            position: "forward",
            number: 7,
            isCaptain: false,
            nickname: "Burru",
        },
        {
            name: "Néstor Clausen",
            position: "defender",
            number: 8,
            isCaptain: false,
            nickname: null,
        },
        {
            name: "José Luis Cuciuffo",
            position: "defender",
            number: 9,
            isCaptain: false,
            nickname: "El Cuchu",
        },
        {
            name: "Diego Maradona",
            position: "midfielder",
            number: 10,
            isCaptain: true,
            nickname: "El Pibe de Oro",
        },
        {
            name: "Jorge Valdano",
            position: "forward",
            number: 11,
            isCaptain: false,
            nickname: "The Philosopher of Football",
        },
        {
            name: "Héctor Enrique",
            position: "midfielder",
            number: 12,
            isCaptain: false,
            nickname: null,
        },
        {
            name: "Oscar Garré",
            position: "defender",
            number: 13,
            isCaptain: false,
            nickname: null,
        },
        {
            name: "Ricardo Giusti",
            position: "midfielder",
            number: 14,
            isCaptain: false,
            nickname: null,
        },
        {
            name: "Luis Islas",
            position: "goalkeeper",
            number: 15,
            isCaptain: false,
            nickname: "El loco",
        },
        {
            name: "Julio Olarticoechea",
            position: "defender",
            number: 16,
            isCaptain: false,
            nickname: null,
        },
        {
            name: "Pedro Pasculli",
            position: "forward",
            number: 17,
            isCaptain: false,
            nickname: null,
        },
        {
            name: "Nery Pumpido",
            position: "goalkeeper",
            number: 18,
            isCaptain: false,
            nickname: null,
        },
        {
            name: "Oscar Ruggeri",
            position: "defender",
            number: 19,
            isCaptain: false,
            nickname: "El Cabezón",
        },
        {
            name: "Carlos Tapia",
            position: "midfielder",
            number: 20,
            isCaptain: false,
            nickname: null,
        },
        {
            name: "Marcelo Trobbiani",
            position: "midfielder",
            number: 21,
            isCaptain: false,
            nickname: "Calesita",
        },
        {
            name: "Héctor Zelada",
            position: "goalkeeper",
            number: 22,
            isCaptain: false,
            nickname: null,
        },
    ],
};

Object.freeze(myFavoriteFootballTeam);
const { sport, team, year, players } = myFavoriteFootballTeam;

const { coachName } = myFavoriteFootballTeam.headCoach;
typeOfSport.textContent = sport;
teamName.textContent = team;
worldCupYear.textContent = year;
headCoach.textContent = coachName;

const setPlayerCards = (arr = players) => {
    playerCards.innerHTML += arr.map(() => {
        return `
            <div class="player-card">
                <h2>${isCaptain ? "(Captain)" : ""} ${name}</h2>
                <p>Position: ${position}</p>
                <p>Number: ${number}</p>
                <p>Nickname: ${nickname ? nickname : "N/A"}</p>
            </div>
        `;
    }).join("");
};


playersDropdownList.addEventListener("change", (e) => {
    playerCards.innerHTML = "";
    switch (e.target.value) {
        case "nickname":
            setPlayerCards(players.filter((player) => player.nickname != null));
            break;
    }
});









/*
Шаг 5

Теперь пора создать структуру данных, которая будет хранить всю информацию о вашей футбольной команде. Под переменными, которые вы только что создали, создайте новую константную переменную с именем myFavoriteFootballTeam и присвойте ей пустой объект.


const myFavoriteFootballTeam = {};



Шаг 6

Внутри объекта myFavoriteFootballTeam добавьте новое свойство с ключом «team» и строковым значением «Argentina».


const myFavoriteFootballTeam = {
  team: "Argentina",
};


Шаг 7

Под свойством команды добавьте четыре пары «ключ-значение». Ключ с именем «спорт» и строковое значение «Футбол». Ключ с именем «год» и числовое значение «1986». Ключ с именем «isWorldCupWinner» и логическое значение, равное true. Новый ключ с именем «headCoach» и значением пустого объекта.

team: "Argentina",
sport: "Football",
year: 1986,
isWorldCupWinner: true,
headCoach: {}



Шаг 8

В объект headCoach добавьте свойство с ключом coachName и строковым значением «Carlos Bilardo». Под этим свойством добавьте ещё один ключ с именем matches и числовым значением 7.

headCoach: {
    coachName: "Carlos Bilardo",
    matches: 7,
  },




Шаг 9

Под свойством headCoach создайте новое свойство с ключом с именем players и значением пустого массива.

  headCoach: {
    coachName: "Carlos Bilardo",
    matches: 7,
  },
  players: [],




Шаг 10

В массиве игроков создайте новый объект со следующими свойствами:
Пример кода

Имя: "Серхио Альмирон"
Позиция: "нападающий"
Номер: 1
isCaptain: false
Прозвище: null

ПРИМЕЧАНИЕ: Номера игроков команды расположены в алфавитном порядке по фамилии. Это отличается от традиционной нумерации, где номера соответствуют номерам на футболках игроков.


{
name: "Sergio Almirón",
position: "forward",
number: 1,
isCaptain: false,
nickname: null,
},




Шаг 12

Остальные данные для массива myFavoriteFootballTeam.players уже заполнены. Следующий шаг — гарантировать невозможность изменения этого объекта путём добавления или удаления каких-либо свойств. Мы воспользуемся методом Object.freeze(obj), который заморозит этот объект и предотвратит внесение в него любых изменений. Используйте метод Object.freeze(), чтобы заморозить объект myFavoriteFootballTeam.


Object.freeze(myFavoriteFootballTeam);



Шаг 13

Следующий шаг — получить доступ к ключу sport объекта myFavoriteFootballTeam и присвоить его новой константной переменной sport. Напомним, что для этого можно использовать точечную нотацию.


const sport = myFavoriteFootballTeam.sport;



Шаг 14

Под переменной «спорт» найдите ключ «команда» из объекта myFavoriteFootballTeam и присвойте его новой константной переменной «команда».


const team = myFavoriteFootballTeam.team;



Шаг 15

На последних двух шагах вы обращались к свойствам объекта myFavoriteFootballTeam, используя точечную нотацию, и присваивали их новым константным переменным. Но в JavaScript есть более простой способ добиться той же цели. Синтаксис деструктуризации объектов позволяет извлекать значения из массивов и объектов:
Пример кода

const developerObj = {
 name: "Jessica Wilkins",
 isDeveloper: true
};

// Деструктуризация объекта

const {name, isDeveloper } = developerObj;

Перепишите две строки кода ниже, используя новый синтаксис деструктуризации. Ваш ответ должен состоять из одной строки кода.



const sport = myFavoriteFootballTeam.sport;
const team = myFavoriteFootballTeam.team;

***

const { sport, team } = myFavoriteFootballTeam;



Шаг 16

Далее добавьте год и игроков в ваше задание по деструктуризации.


const { sport, team, year, players }



Шаг 17

Теперь вам нужно получить доступ к значению coachName объекта myFavoriteFootballTeam.headCoach, используя синтаксис деструктуризации.


const { coachName } = myFavoriteFootballTeam.headCoach;




Шаг 18

Теперь вам нужно начать отображать информацию о команде на экране. Под назначениями деструктуризации присвойте переменной «sport» значение typeOfSport.textContent. После завершения этой задачи вы увидите результат в окне предварительного просмотра.

typeOfSport.textContent = sport;




Шаг 21

Теперь приступим к созданию функции, которая будет отображать карточки игроков в зависимости от выбора, сделанного пользователем в раскрывающемся меню «Фильтрация товарищей по команде». Начнем с создания пустой стрелочной функции с именем setPlayerCards. Добавлять параметр не нужно, так как он будет реализован на следующем шаге.


const setPlayerCards = () => {};




Шаг 22

Параметры функции можно инициализировать значениями по умолчанию. Если функция вызывается без аргумента, будет использовано значение по умолчанию:
Пример кода

const greeting = (name = "Anonymous") => {
 return "Hello " + name;
}
console.log(greeting("John")); // Привет, John
console.log(greeting()); // Привет, Anonymous

Добавьте в функцию setPlayerCards новый параметр с именем arr и присвойте ему значение по умолчанию для игроков. Помните, что вы деструктурировали переменную players из объекта myFavoriteFootballTeam в строке 175.


const setPlayerCards = (arr = players) => {};



Шаг 23

Следующий шаг — создание нового массива, который будет отвечать за добавление информации о карточке игрока на страницу. Внутри функции setPlayerCards добавьте метод map к arr, который будет принимать пустую функцию обратного вызова. Затем используйте оператор сложения и присваивания +=, чтобы присвоить новый массив элементу playerCards.innerHTML. Помните, что свойство innerHTML получает, или, в данном случае, задаёт HTML-разметку для элемента playerCards.


playerCards.innerHTML += arr.map(() => {});



Шаг 24

arr содержит ряд объектов, каждый из которых содержит свойства name, position, number, isCaptain и nickname. Чтобы получить доступ к каждому из этих свойств внутри функции обратного вызова, необходимо использовать деструктуризацию объектов для их распаковки в переменные. Вот пример:
Пример кода

function myExampleFunction({ name, age, job, city }) {
 }

 В списке параметров функции обратного вызова для метода map распакуйте все 5 свойств объектов из arr, используя деструктуризацию объектов.


 playerCards.innerHTML += arr.map(({ name, position, number, isCaptain, nickname }) => {

  })





Шаг 25

В теле функции обратного вызова необходимо вернуть шаблонный литерал ``, который будет содержать HTML-контент карточек игроков. Внутри шаблонных литералов добавьте пустой div с классом «player-card».




return `<div class="player-card"></div>`;




Шаг 26

Внутри div добавьте элемент h2, содержащий параметр name. Поскольку вы работаете с шаблонными литералами, вам потребуется использовать встроенное выражение для параметра name:
Пример кода

${expression goes here}


<h2>${name}</h2>



Шаг 27

Следующий шаг — отобразить слово (Captain) рядом с игроком, если он указан как капитан команды. Перед выражением ${name} добавьте новое встроенное выражение. Внутри этого выражения используйте тернарный оператор для проверки истинности isCaptain. Если да, верните "(Captain)", в противном случае верните пустую строку.


<h2>${isCaptain ? "(Captain)" : ""} ${name}</h2>




28

Под элементом h2 добавьте элемент абзаца с текстом Position: и встроенным выражением, содержащим параметр position.


<p>Position: ${position}</p>



Шаг 29

Под элементом абзаца добавьте ещё один элемент абзаца с текстом Number: и встроенным выражением, содержащим параметр number.


<p>Number: ${number}</p>



Шаг 30

Под существующими элементами абзаца добавьте ещё один элемент абзаца с текстом «Псевдоним:».


<p>Nickname: </p>




Шаг 31

Рядом с текстом «Псевдоним» добавьте встроенное выражение, которое покажет псевдоним игрока, если он у него есть. Используйте тернарный оператор для проверки того, что псевдоним не равен нулю. Если у игрока есть псевдоним, выведите псевдоним, иначе выведите «Н/Д».


<p>Nickname: ${nickname ? nickname : "N/A"}</p>



Шаг 32

Метод .map() вернет новый массив элементов карточек игроков, разделённых запятыми. Чтобы убрать запятые между карточками игроков и не отображать их на экране, свяжите метод .join() с методом .map(). Передайте пустую строку в качестве аргумента методу .join().


  playerCards.innerHTML += arr.map(
    ({ name, position, number, isCaptain, nickname }) => {
     return `
        <div class="player-card">
          <h2>${isCaptain ? "(Captain)" : ""} ${name}</h2>
          <p>Position: ${position}</p>
          <p>Number: ${number}</p>
          <p>Nickname: ${nickname !== null ? nickname : "N/A"}</p>
        </div>
      `;
    }
  ).join("")






Шаг 33

Следующий шаг — создание функции, которая будет определять, когда пользователь делает выбор из списка playersDropdownList. Используйте метод .addEventListener() для playersDropdownList. В прослушивателе событий передайте тип события «change» и пустую функцию обратного вызова.


playersDropdownList.addEventListener("change", () => {});




Шаг 34

Для функции обратного вызова передайте e в качестве параметра. e представляет собой объект, содержащий информацию об этом событии.




Шаг 35

Внутри функции обратного вызова добавьте console.log со значением e.target.value. Откройте консоль и выберите игрока из выпадающего списка. Вы должны увидеть значение этого выбора в консоли. e.target.value представляет собой свойство value элемента playersDropdownList. В дальнейшем вы будете использовать это значение для отображения карточек игроков в зависимости от их позиции.


console.log(e.target.value);




Шаг 36

Удалите оператор console.log, созданный на предыдущем шаге. Следующим шагом будет сброс содержимого элемента playerCards. Внутри функции обратного вызова обратитесь к свойству innerHTML элемента playerCards и присвойте ему значение пустой строки.


playerCards.innerHTML = "";




Шаг 37

Следующим шагом будет добавление оператора switch, который будет проверять выбор пользователя в раскрывающемся меню игроков и отфильтровывать карты в зависимости от позиции игрока. Добавьте оператор switch и используйте e.target.value для выражения.


switch (e.target.value) {

};



Шаг 38

Если пользователь выбирает «Псевдонимы» в раскрывающемся меню, вам нужно отфильтровать карточки игроков с псевдонимами. Начните с добавления условия case для «псевдоним» в оператор switch.

case "nickname":



Шаг 39

Вызовите функцию setPlayerCards с аргументом players.filter(). Внутри метода filter добавьте функцию обратного вызова с параметром player и неявно верните player.nickname как ненулевое значение.
Неявный возврат в JavaScript достигается путём удаления ключевого слова return и фигурных скобок {} из стрелочной функции, помещая возвращаемое выражение на ту же строку, что и тело функции, или используя круглые скобки () для выражения, которое занимает несколько строк. Этот синтаксис делает код короче, когда нужно вернуть одно значение.


setPlayerCards(players.filter((player) => player.nickname != null));




Шаг 40

Прежде чем перейти к следующему случаю, вам необходимо добавить оператор break. Добавьте оператор break под вызовом setPlayerCards.




 */