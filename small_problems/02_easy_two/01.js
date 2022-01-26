function crunch(string) {
  let newString = '';
  for (let i = 0; i < string.length; i += 1) {
    if (newString[newString.length - 1] !== string[i]) {
      newString += string[i];
    }
  }
  return newString;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""