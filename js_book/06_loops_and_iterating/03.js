let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

// Loop condition never becomes false because line 3 always returns 1.
// Also, if clause on line 7 always evaluates as false.