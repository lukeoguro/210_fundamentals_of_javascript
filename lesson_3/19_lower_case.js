function toLowerCase(string) {
  const OFFSET = 32;
  let lowerCaseString = '';

  for (let index = 0; index < string.length; index++) {
    let asciiNumeric = string.charCodeAt(index);
    let char = string[index];

    if (char >= 'A' && char <= 'Z') {
      lowerCaseString += String.fromCharCode(asciiNumeric + OFFSET);
    } else {
      lowerCaseString += char;
    }
  }

  return lowerCaseString;
}

console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEF'));      // "abcdef"