let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83

function sumOfSquares(array) {
  return array.reduce((acc, num) => acc + num * num, 0);
}