function capsLong(string) {
  return (string.length > 10 ? string.toUpperCase() : string);
}

console.log(capsLong('hello world'));
console.log(capsLong('goodbye'));