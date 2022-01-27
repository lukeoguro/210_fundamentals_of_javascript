console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }

function repeatedCharacters(string) {
  let countHash = {};

  for (let char of string.toLowerCase()) {
    countHash[char] = (char in countHash ? countHash[char] + 1 : 1);
  }

  for (let char in countHash) {
    if (countHash[char] == 1) {
      delete countHash[char];
    }
  }

  return countHash;
}