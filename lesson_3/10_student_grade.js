let readlineSync = require('readline-sync');

let total = 0;
for (let index = 1; index <= 3; index++) {
  let score = parseInt(readlineSync.question(`Enter score ${index}: `), 10);
  total += score;
}

let average = total / 3;
let grade;

if (average >= 90) {
  grade = 'A';
} else if (average >= 70) {
  grade = 'B';
} else if (average >= 50) {
  grade = 'C';
} else {
  grade = 'F';
}

let message = `Based on the average of your 3 scores your letter grade is "${grade}".`;
console.log(message);