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

console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"