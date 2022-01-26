function triangle(n) {
  for (let starCount = 1; starCount <= n; starCount += 1) {
    let spaceCount = n - starCount;
    console.log(' '.repeat(spaceCount) + '*'.repeat(starCount));
  }
}

triangle(5);

triangle(9);