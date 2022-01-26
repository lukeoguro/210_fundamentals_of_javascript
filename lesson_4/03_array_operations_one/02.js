let count = [1, 2, 3];
console.log(pop(count));             // 3
console.log(count);                  // [ 1, 2 ]

console.log(pop([]));                // undefined

function pop(array) {
  if (array.length === 0) {
    return undefined;
  }

  let value = array[array.length - 1];
  array.length -= 1;
  return value;
}