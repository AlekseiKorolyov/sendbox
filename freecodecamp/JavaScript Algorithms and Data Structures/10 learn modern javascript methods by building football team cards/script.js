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



 */