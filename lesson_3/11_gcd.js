function gcd(num1, num2) {
  let starting_num = (num1 > num2 ? num1 : num2);
  for (let divisor = starting_num; divisor >= 1; divisor--) {
    if (num1 % divisor === 0 && num2 % divisor === 0) {
      return divisor;
    }
  }
}

console.log(gcd(12, 4));   // 4
console.log(gcd(15, 10));  // 5
console.log(gcd(9, 2));    // 1