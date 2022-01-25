let readlineSync = require('readline-sync');
const PASSWORD = 'password';

let guess;
let counter = 0;

while (counter < 3 && guess !== PASSWORD) {
  guess = readlineSync.question('What is the password: ');
  counter += 1;
}

if (guess === PASSWORD) {
  console.log('You have successfully logged in.');
} else {
  console.log('You have been denied access.');
}