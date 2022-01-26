function splice(array, startIndex, deleteCount) {
  let newArray = [];

  for (let i = startIndex; i < array.length; i += 1) {
    if (i < startIndex + deleteCount) {
      push(newArray, array[i]);
    }

    array[i] = array[i + deleteCount];
  }

  array.length -= newArray.length;
  return newArray;
}

function push(array, value) {
  array[array.length] = value;
  return array.length;
}

let count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
console.log(count);                                 // [ 1, 2, 8 ]