const DIGITS = {
  '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
  '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
};

function stringToInteger(string) {
  let int = 0;

  for (let i = 0; i < string.length; i += 1) {
    let power = string.length - i - 1;
    int += DIGITS[string[i]] * (10 ** power);
  }

  return int;
}

console.log(stringToInteger('4321'));      // 4321
console.log(stringToInteger('570'));       // 570
