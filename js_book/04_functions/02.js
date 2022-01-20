let readlineSync = require('readline-sync');

function getName(prompt) {
  return readlineSync.question(prompt);
}

let firstName = getName('What is your first name? ');
let lastName = getName('What is your last name? ')
console.log(`Hello, ${firstName} ${lastName}!`);