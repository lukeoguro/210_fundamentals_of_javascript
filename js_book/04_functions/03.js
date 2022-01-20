let readlineSync = require('readline-sync');

let multiply = (num1, num2) => num1 * num2;

let getNumber = function (prompt) {
  return Number(readlineSync.question(prompt));
}

num1 = getNumber('Enter the first number: ');
num2 = getNumber('Enter the second number: ');

console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`);