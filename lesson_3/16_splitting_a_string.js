function splitString(string, delimiter) {
  if (delimiter === undefined) {
    console.log('ERROR: No delimiter');
    return;
  }

  let substring = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === delimiter) {
      console.log(substring);
      substring = '';
    } else if (delimiter === '') {
      console.log(string[index]);
    } else {
      substring += string[index];
    }
  }

  if (substring.length >= 1) {
    console.log(substring);
  }
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello