function cleanUp(string) {
  let newString = '';

  for (let i = 0; i < string.length; i += 1) {
    let char = string[i];
    if (/[a-z]/i.test(char)) {
      newString += char;
    } else if (newString[newString.length - 1] !== ' ') {
      newString += ' ';
    }
  }

  return newString;
}

function cleanUpRegex(string) {
  return string.replace(/[^a-z]+/ig, ' ');
}

console.log(cleanUp("---what's my +*& line?") === " what s my line ");
console.log(cleanUpRegex("---what's my +*& line?") === " what s my line ");
