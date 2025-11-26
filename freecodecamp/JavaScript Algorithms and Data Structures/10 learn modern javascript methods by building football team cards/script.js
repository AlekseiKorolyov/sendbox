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
    ],
};





















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



 */