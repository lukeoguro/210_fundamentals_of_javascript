function arrayToString(array) {
  let string = '';
  for (let i = 0; i < array.length; i += 1) {
    string += array[i];
  }
  return string;
}

console.log(arrayToString([1, 2, 3]));