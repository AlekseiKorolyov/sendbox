/*
Теперь учителю нужна ваша помощь в переводе баллов ученика в буквенную оценку. Завершите функцию getGrade, которая принимает числовой балл в качестве параметра. Ваша функция должна возвращать строку, представляющую буквенную оценку, основанную на балле.
Вот баллы и соответствующие им буквенные оценки:

Диапазон баллов Оценка 100 "A++" 90 - 99 "A" 80 - 89 "B" 70 - 79 "C" 60 - 69 "D" 0 - 59 "F"

Советы Вспомните, что вы узнали об условных операторах (if, else if и else). Вспомните, что вы узнали об операторах сравнения (>, <, >=, <=, ===). Вспомните, что вы узнали о логическом операторе "И" (&&).




function getGrade(score) {

}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));
 */


function getGrade(score) {
    if (score === 100) {
        return "A++";
    } else if (score >= 90 && score <= 99) {
        return "A";
    } else if (score >= 80 && score <= 89) {
        return "B"
    } else if (score >= 70 && score <= 79) {
        return "C";
    } else if (score >= 60 && score <= 69) {
        return "D";
    } else {
        return "F";
    }
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));


/*
function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}
 */