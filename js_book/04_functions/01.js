let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar); // => 1

// bar on line 3 is not the same as bar on line 1.