function uniqueElements(arr) {
  let newArr = [];

  for (let el of arr) {
    if (newArr.indexOf(el) === -1) {
      newArr.push(el);
    }
  }

  return newArr;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));  // returns [1, 2, 4, 3, 5]