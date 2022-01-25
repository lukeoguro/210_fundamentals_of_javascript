function logMultiples(number) {
  let multiple = Math.floor(100 / number) * number;
  for (; multiple > 0; multiple -= number) {
    if (multiple % 2 === 1) {
      console.log(multiple);
    }
  }
}

logMultiples(17);
logMultiples(21);