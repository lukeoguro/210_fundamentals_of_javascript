function slice(array, begin, end) {
  let newArray = [];

  begin = (begin > array.length ? array.length : begin);
  end = (end > array.length ? array.length : end);

  for (let i = begin; i < end; i += 1) {
    newArray.push(array[i]);
  }

  return newArray;
}

console.log(slice([1, 2, 3], 1, 2));               // [2]
console.log(slice([1, 2, 3], 2, 0));               // []
console.log(slice([1, 2, 3], 5, 1));               // []
console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

const arr1 = [1, 2, 3];
console.log(slice(arr1, 1, 3));                     // [2, 3]
console.log(arr1);                                  // [1, 2, 3]

function splice(array, start, deleteCount, ...args) {
  if (start > array.length) {
    start = array.length;
  }

  if (deleteCount > array.length - start) {
    deleteCount = array.length - start;
  }

  let deletedElements = array.slice(start, start + deleteCount)

  let offset = args.length - deleteCount;
  if (offset > 0) {
    for (let i = array.length - 1; i >= start; i -= 1) {
      array[i + offset] = array[i];
    }
  } else if (offset < 0) {
    for (let i = start + deleteCount; i < array.length; i += 1) {
      array[i + offset] = array[i];
    }
    array.length += offset;
  }

  for (let i = 0; i < args.length; i += 1) {
    array[start + i] = args[i];
  }

  return deletedElements;
}

console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
console.log(splice([1, 2, 3], 1, 0));              // []
console.log(splice([1, 2, 3], 0, 1));              // [1]
console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

const arr2 = [1, 2, 3];
console.log(splice(arr2, 1, 1, 'two'));             // [2]
console.log(arr2);                                  // [1, "two", 3]

const arr3 = [1, 2, 3];
console.log(splice(arr3, 1, 2, 'two', 'three'));    // [2, 3]
console.log(arr3);                                  // [1, "two", "three"]

const arr4 = [1, 2, 3];
console.log(splice(arr4, 1, 0));                    // []
console.log(splice(arr4, 1, 0, 'a'));               // []
console.log(arr4);                                  // [1, "a", 2, 3]

const arr5 = [1, 2, 3];
console.log(splice(arr5, 0, 0, 'a'));               // []
console.log(arr5);                                  // ["a", 1, 2, 3]

const arr6 = [1, 2, 3, 4, 5];
console.log(splice(arr6, 0, 2, 'a'));               // [1, 2]
console.log(arr6);                                  // ["a", 3, 4, 5]

const arr7 = [1, 2, 3, 4, 5];
console.log(splice(arr7, 2, 10, 'a'));              // [3, 4, 5]
console.log(arr7);                                  // [1, 2, 'a']

const arr8 = [1, 2, 3, 4, 5];
console.log(splice(arr8, 1, 3, 'a', 'b'));          // [2, 3, 4]
console.log(arr8);                                  // [1, 'a', 'b', 5]