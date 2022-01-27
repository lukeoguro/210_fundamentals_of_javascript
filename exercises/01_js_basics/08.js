const DIGITS = {
  '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
  '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
};

function stringToSignedInteger(string) {
  switch (string[0]) {
    case '+': return stringToInteger(string.slice(1));
    case '-': return -stringToInteger(string.slice(1));
    default: return stringToInteger(string);
  }
}

function stringToInteger(string) {
  let int = 0;

  for (let i = 0; i < string.length; i += 1) {
    let power = string.length - i - 1;
    int += DIGITS[string[i]] * (10 ** power);
  }

  return int;
}

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100