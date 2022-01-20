function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words); // => Not run, because line 3 terminates the function.
}

scream('Yipeee');