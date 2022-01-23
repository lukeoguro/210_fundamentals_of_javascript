let readlineSync = require('readline-sync');

let phrase = readlineSync.question('Please enter a phrase: ');

console.log(`There are ${phrase.length} characters in "${phrase}".`);
console.log(`There are ${phrase.replace(/\s/g, '').length} non-whitespace characters.`);
console.log(`There are ${phrase.replace(/[^a-z]/ig, '').length} alphabetical characters.`);

// => Please enter a phrase: walk don't run
// => There are 14 characters in "walk don't run".
// => There are 12 characters without spaces.
// => There are 11 alphabetical characters.