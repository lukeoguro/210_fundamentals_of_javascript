let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let keys = Object.keys(obj).map((el) => el.toUpperCase());

console.log(keys);
console.log(obj);