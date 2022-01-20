let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

function oddLengths(array) {
  return array.reduce((acc, el) => {
    let length = el.length;

    if (length % 2 === 1) {
      acc.push(length);
    }

    return acc;
  }, [])
}