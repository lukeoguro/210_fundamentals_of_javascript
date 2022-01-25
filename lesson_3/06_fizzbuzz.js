function fizzbuzz() {
  for (let num = 1; num <= 100; num++) {
    let message = '';

    if (num % 3 === 0) {
      message += 'Fizz';
    }

    if (num % 5 === 0) {
      message += 'Buzz';
    }

    console.log(message || num)
  }
}

fizzbuzz();