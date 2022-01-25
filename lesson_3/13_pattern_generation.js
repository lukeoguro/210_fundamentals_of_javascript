function generatePattern(nStars) {

  let maxString = '';

  for (let lineNumber = 1; lineNumber <= nStars; lineNumber++) {
    maxString += String(lineNumber);
  }

  let maxWidth = maxString.length;

  for (let lineNumber = 1; lineNumber <= nStars; lineNumber++) {
    let string = '';

    for (let int = 1; int <= lineNumber; int++) {
      string += String(int);
    }

    string += '*'.repeat(maxWidth - string.length);

    console.log(string);
  }
}

generatePattern(7);

generatePattern(20);

