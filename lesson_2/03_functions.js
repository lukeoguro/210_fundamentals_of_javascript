function sum(array) {
  let total = 0;
  for (let num of array) {
    total += num;
  }
  return total;
}

function average(array) {
  return sum(array) / array.length;
}

let temperatures = [73, 58, 81, 64, 67];

console.log(sum(temperatures));
console.log(average(temperatures));