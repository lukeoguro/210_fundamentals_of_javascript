let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

myObj.qux = 3;

// Snippet 1
let objKeys = Object.keys(myObj);
objKeys.forEach(function (key) {
  console.log(key); // Outputs qux only
});

// Snippet 2
for (let key in myObj) {
  console.log(key); // Outputs qux, foo, bar
}

// Snippet 3
for (let key in myObj) {
  if (myObj.hasOwnProperty(key)) {
    console.log(key); // Outputs qux only
  }
}

// For loop iterates over properties of the prototype as well.

