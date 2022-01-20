let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

function oddLengths(array) {
  let lengths = array.map((element) => element.length);
  return lengths.filter((element) => element % 2 == 1);
}