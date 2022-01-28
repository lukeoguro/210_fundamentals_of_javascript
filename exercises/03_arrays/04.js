function concat(...args) {
  let newArray = [];

  for (let arg of args) {
    if (Array.isArray(arg)) {
      for (let el of arg) {
        newArray.push(el);
      }
    } else {
      newArray.push(arg);
    }
  }

  return newArray;
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]