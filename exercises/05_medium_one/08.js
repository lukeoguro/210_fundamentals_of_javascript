function productOfSums(array1, array2) {
  let result = total(array1) * total(array2);
  return result;
}

function total(numbers) {
  let sum; // needs to be initialized to 0

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  sum; // needs to be explicitly returned
}