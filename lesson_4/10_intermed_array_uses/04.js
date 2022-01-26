function matrixSums(arr) {
  return arr.map((subArr) => subArr.reduce((acc, num) => acc + num));
}

let matrixArr = [[2, 8, 5], [12, 48, 0], [12]];
console.log(matrixSums(matrixArr));  // returns [15, 60, 12]
console.log(matrixArr);