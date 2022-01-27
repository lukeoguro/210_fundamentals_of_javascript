function randomInt(min, max) {
  if (min === max) {
    return min;
  } else if (min > max) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomInt(1, 5));