/*
Учитель очень доволен программой, которую вы создали. Но теперь ему нужен простой способ проверки проходного балла ученика. Проходной балл — это любой балл, кроме «F». Завершите функцию hasPassingGrade, которая принимает балл ученика в качестве параметра. Ваша функция должна возвращать true, если у ученика проходной балл, и false, если нет. Советы Используйте функцию getGrade для получения оценки ученика. Затем проверьте, проходной балл или нет.



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

***

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}
 */


function hasPassingGrade(score) {
    let grade = getGrade(score);
    if (grade === "A++") {
        return true;
    } else if (grade == "A") {
        return true;
    } else if (grade === "B") {
        return true;
    } else if (grade === "C") {
        return true;
    } else if (grade === "D") {
        return true;
    } else if (grade === "F") {
        return false;
    }
}

console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));
