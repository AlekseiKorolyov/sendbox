/*
Теперь, когда у преподавателя есть вся необходимая информация, он хочет сообщить результаты студенту. Заполните функцию studentMsg параметрами totalScores и studentScore. Функция должна возвращать строку, представляющую собой сообщение студенту. Если студент сдал курс, строка должна иметь следующий формат:
Пример кода Средний балл по классу:

Средний балл по классу: средний балл. Ваша оценка: оценка. Вы сдали курс.
Class average: average-goes-here. Your grade: grade-goes-here. You passed the course.

Если студент не сдал курс, строка должна иметь следующий формат:
Пример кода Средний балл по классу:

Средний балл по классу: средний балл. Ваша оценка: оценка. Вы провалили курс.
Class average: average-goes-here. Your grade: grade-goes-here. You failed the course.

Замените average-goes-here средним баллом по всем баллам. Замените grade-goes-here оценкой студента. Советы Используйте функцию getAverage для получения среднего балла по классу. Используйте функцию getGrade для получения оценки студента. Используйте конкатенацию строк (+) для построения сообщения. Будьте внимательны с пунктуацией и пробелами в сообщении.


function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}

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

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

function studentMsg(totalScores, studentScore) {

}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));

 */


function studentMsg(totalScores, studentScore) {
    if (hasPassingGrade(studentScore)) {
        return "Class average: " + getAverage(totalScores) + ". " + "Your grade: " + getGrade(studentScore) +". " + "You passed the course.";
    } else {
        return "Class average: " + getAverage(totalScores) + ". " + "Your grade: " + getGrade(studentScore) +". " + "You failed the course.";
    }

}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));