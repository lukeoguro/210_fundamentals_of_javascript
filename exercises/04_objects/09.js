const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function timeOfDay(deltaMinutes) {
  let date = new Date('January 1, 2000 00:00:00');
  date.setMinutes(deltaMinutes);

  let hours = date.getHours();
  let minutes = date.getMinutes();

  return `${padWithZeroes(hours, 2)}:${padWithZeroes(minutes, 2)}`;
}

function padWithZeroes(number, length) {
  let numberString = String(number);

  while (numberString.length < length) {
    numberString = `0${numberString}`;
  }

  return numberString;
}

console.log(timeOfDay(0));          // "00:00"
console.log(timeOfDay(-3));         // "23:57"
console.log(timeOfDay(35));         // "00:35"
console.log(timeOfDay(-1437));      // "00:03"
console.log(timeOfDay(3000));       // "02:00"
console.log(timeOfDay(800));        // "13:20"
console.log(timeOfDay(-4231));      // "01:29"
