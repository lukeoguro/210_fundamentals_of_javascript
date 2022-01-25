function substringMatch(index, firstString, secondString) {
  for (let secondStringIndex = 0; secondStringIndex < secondString.length; secondStringIndex += 1) {
    let firstStringIndex = secondStringIndex + index;
    if (firstString[firstStringIndex] !== secondString[secondStringIndex]) {
      return false;
    }
  }
  return true;
}

function indexOf(firstString, secondString) {
  let maxIndex = firstString.length - secondString.length;
  for (let index = 0; index <= maxIndex; index += 1) {
    if (substringMatch(index, firstString, secondString)) {
      return index;
    }
  }
  return -1;
}

function lastIndexOf(firstString, secondString) {
  let startIndex = firstString.length - secondString.length;
  for (let index = startIndex; index >= 0; index -= 1) {
    if (substringMatch(index, firstString, secondString)) {
      return index;
    }
  }
  return -1;
}

console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'leB'));                      // -1

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1