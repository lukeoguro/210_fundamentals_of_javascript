function trimLeft(string) {
  let trimmedString = '';
  let copyMode = false;

  for (let index = 0; index < string.length; index += 1) {
    if (string[index] !== ' ' && !copyMode) {
      copyMode = true;
    }

    if (copyMode) {
      trimmedString += string[index];
    }
  }

  return trimmedString;
}

function trimRight(string) {
  let trimmedString = '';
  let copyMode = false;

  for (let index = string.length - 1; index >= 0; index -= 1) {
    if (string[index] !== ' ' && !copyMode) {
      copyMode = true;
    }

    if (copyMode) {
      trimmedString = string[index] + trimmedString;
    }
  }

  return trimmedString;
}

function trim(string) {
  let trimmedString = trimLeft(string);
  trimmedString = trimRight(trimmedString);
  return trimmedString;
}

console.log(trim('  abc  ') === "abc");
console.log(trim('abc   ') === "abc");
console.log(trim(' ab c') === "ab c");
console.log(trim(' a b  c') === "a b  c");
console.log(trim('      ') === "");
console.log(trim('') === "");