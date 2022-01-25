function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let index = 2; index < number; index++) {
    if (number % index === 0) {
      return false;
    }
  }

  return true;
}

function checkGoldbach(expectedSum) {
  if (expectedSum < 4 || expectedSum % 2 === 1) {
    console.log(null);
    return;
  }

  for (let num1 = 2; num1 < expectedSum / 2; num1++) {
    let num2 = expectedSum - num1;
    if (isPrime(num1) && isPrime(num2)) {
      console.log(num1, num2);
    }
  }
}

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53