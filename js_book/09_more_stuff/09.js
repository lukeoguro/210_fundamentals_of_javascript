function isNegativeZero(num) {
  return (num === 0) && (1 / num === -Infinity);
}

console.log(isNegativeZero(-0));