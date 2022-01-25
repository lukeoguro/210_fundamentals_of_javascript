let readlineSync = require('readline-sync');

let int = readlineSync.question('Please enter an integer greater than 0: ');
let operation = readlineSync.question('Enter "s" to compute the sum, or "p" to compute the product: ');

if (operation === 's') {
  let sum = 0;
  for (let i = 1; i <= int; i += 1) {
    sum += i;
  }
  console.log(`The sum of the integers between 1 and ${int} is ${sum}.`)
} else if (operation === 'p') {
  let product = 1
  for (let i = 1; i <= int; i += 1) {
    product *= i;
  }
  console.log(`The product of the integers between 1 and ${int} is ${product}.`)
} else {
  console.log('Oops, unknown operation.')
}