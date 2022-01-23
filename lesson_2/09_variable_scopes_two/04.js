function hello() {
  a = 'hello';
  console.log(a); // => hello

  if (false) {
    let a = 'hello again';
  }
}

hello();
console.log(a); // => hello