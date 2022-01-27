greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

// console output
// Hello, John Q Doe! Nice to have a Master Plumber around.


function greetings(array, object) {
  console.log(`Hello, ${array.join(' ')}! Nice to have a ${object.title} ${object.occupation} around.`)
}