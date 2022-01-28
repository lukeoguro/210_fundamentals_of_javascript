function reverse(inputForReversal) {
  if (Array.isArray(inputForReversal)) {
    return reverseArray(inputForReversal);
  } else {
    return reverseArray(inputForReversal.split('')).join('');
  }
}

function reverseArray(array) {
  let newArray = [];

  for (let i = array.length - 1; i >= 0; i -= 1) {
    newArray.push(array[i]);
  }

  return newArray;
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

const array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]