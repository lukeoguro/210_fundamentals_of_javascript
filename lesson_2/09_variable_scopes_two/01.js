function say() {
  if (false) {
    var a = 'hello from inside a block';
  }

  console.log(a); // => undefined
}

say();