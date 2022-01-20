let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

myArray.forEach((nestedArray) => {
  nestedArray.forEach((element) => {
    if (element % 2 === 0) {
      console.log(element);
    }
  })
})

// myArray.flat().forEach((element) => {
//   if (element % 2 === 0) {
//     console.log(element);
//   }
// })