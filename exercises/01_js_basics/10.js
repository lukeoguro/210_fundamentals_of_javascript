const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(int) {
  let string = '';

  do {
    let remainder = int % 10;
    int -= remainder;
    int /= 10;

    string = DIGITS[remainder] + string;
  } while (int > 0);

  return string;
}

function signedIntegerToString(int) {
  if (int > 0) {
    return '+' + integerToString(int);
  } else if (int < 0) {
    return '-' + integerToString(-int);
  } else {
    return integerToString(int);
  }
}


console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));         // "0"