let readlineSync = require('readline-sync');

const METERS_TO_FEET = 10.7639;

console.log('Enter the length of the room in meters: ');
let length = Number(readlineSync.prompt());

console.log('Enter the width of the room in meters: ');
let width = Number(readlineSync.prompt());

let areaInMeters = length * width;
let areaInFeet = areaInMeters * METERS_TO_FEET;
console.log(`The area of the room is ${areaInMeters.toFixed(2)} square meters \
(${areaInFeet.toFixed(2)} square feet).`);
