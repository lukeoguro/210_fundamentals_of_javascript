let count = [1, 2, 3];
console.log(unshift(count, 0));      // 4
console.log(count);                  // [ 0, 1, 2, 3 ]

function unshift(array, value) {
  for (let i = array.length; i >= 1; i -= 1) {
    array[i] = array[i - 1];
  }

  array[0] = value;
  return array.length;
}