function indexOf(array, value) {
  for (let i = 0; i < array.length; i += 1) {
    if (value === array[i]) {
      return i;
    }
  }

  return -1;
}

console.log(indexOf([1, 2, 3, 3], 3));         // 2
console.log(indexOf([1, 2, 3], 4));            // -1