console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []

function missing(arr) {
  let newArr = [];

  for (let i = arr[0] + 1; i < arr[arr.length - 1]; i += 1) {
    if (arr.indexOf(i) === -1) {
      newArr.push(i);
    }
  }

  return newArr;
}