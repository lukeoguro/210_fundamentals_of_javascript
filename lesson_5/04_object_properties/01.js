let pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

console.log(objectHasProperty(pets, 'dog') === true);
console.log(objectHasProperty(pets, 'lizard') === false);
console.log(objectHasProperty(pets, 'mice') === true);

function objectHasProperty(object, string) {
  let keys = Object.keys(object);
  return keys.indexOf(string) !== -1;
}