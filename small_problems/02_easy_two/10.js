function century(year) {
  let centuryNum = Math.floor((year - 1) / 100) + 1;

  return centuryNum + centurySuffix(centuryNum);
}

function centurySuffix(centuryNum) {
  let ones = Math.floor(centuryNum % 10);
  let tens = Math.floor(centuryNum / 10 % 10);

  if (tens === 1) {
    return 'th';
  }

  switch (ones) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

console.log(century(2000) === "20th");
console.log(century(2001) === "21st");
console.log(century(1965) === "20th");
console.log(century(256) === "3rd");
console.log(century(5) === "1st");
console.log(century(10103) === "102nd");
console.log(century(1052) === "11th");
console.log(century(1127) === "12th");
console.log(century(11201) === "113th");