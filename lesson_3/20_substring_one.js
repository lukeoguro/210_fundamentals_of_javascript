function substr(string, start, length) {
  if (start < 0) {
    start = string.length + start;
  }

  if (length > string.length - start) {
    length = string.length - start;
  }

  let substring = '';

  for (let index = start; index < start + length; index += 1) {
    substring += string[index];
  }

  return substring;
}

let string = 'hello world';

console.log(substr(string, 2, 4));      // "llo "
console.log(substr(string, -3, 2));     // "rl"
console.log(substr(string, 8, 20));     // "rld"
console.log(substr(string, 9, 3));      // "ld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 0, 0));      // ""
