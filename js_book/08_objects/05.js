let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

for (let key in myObj) {
  console.log(`${key}: ${myObj[key]}`);
}