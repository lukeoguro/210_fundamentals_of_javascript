let foo = 'bar';
{
  foo = 'qux';
}

console.log(foo); // => bar

// Line 3 declares a new variable foo that shadows foo from line 1.
// foo is never reassigned and therefore bar is output on line 6.