let number = 4936;

let ones = number % 10;
let tens = (number - ones) / 10 % 10;
let hundreds = (number - tens * 10 - ones) / 100 % 10;
let thousands = (number - hundreds * 100 - tens * 10 - ones) / 1000;

console.log(thousands, hundreds, tens, ones);