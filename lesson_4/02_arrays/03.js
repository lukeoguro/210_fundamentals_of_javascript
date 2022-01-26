function reverseArray(array) {
  let newArray = []
  for (i = array.length - 1; i >= 0; i -= 1) {
    newArray.push(array[i]);
  }
  return newArray;
}

const NUMBERS = [1, 2, 3, 4, 5];

console.log(reverseArray(NUMBERS));
console.log(NUMBERS);