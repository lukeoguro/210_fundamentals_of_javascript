function join(array, separator) {
  let newString = '';

  for (let i = 0; i < array.length - 1; i += 1) {
    newString += array[i];
    newString += separator;
  }

  newString += array[array.length - 1];

  return newString;
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'