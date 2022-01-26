function concat(arr1, arr2) {
  let newArray = [];

  for (let el of arr1) {
    push(newArray, el);
  }

  for (let el of arr2) {
    push(newArray, el);
  }

  return newArray;
}

function push(array, value) {
  array[array.length] = value;
  return array.length;
}

console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]