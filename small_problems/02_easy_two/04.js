function findFibonacciIndexByLength(length) {
  let prevNum = 1n;
  let currNum = 1n;
  let tempNum;

  let index = 2n;

  while (String(currNum).length < length) {
    tempNum = prevNum;
    prevNum = currNum;
    currNum = tempNum + currNum;

    index += 1n;
  }

  return index;
}

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.