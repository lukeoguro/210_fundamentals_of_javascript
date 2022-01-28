const MILLISECONDS_PER_MINUTE = 60000;
const MINUTES_PER_DAY = 1440;

function afterMidnight(timeStr) {
  let midnight = new Date('January 1, 2000 00:00:00');
  let date = new Date(`January 1, 2000 ${timeStr}:00`);

  return (date - midnight) / MILLISECONDS_PER_MINUTE;
}

function beforeMidnight(timeStr) {
  let midnight = new Date('January 1, 2000 00:00:00');
  let date = new Date(`December 31, 1999 ${timeStr}:00`);

  return (midnight - date) / MILLISECONDS_PER_MINUTE % MINUTES_PER_DAY;
}

console.log(afterMidnight('00:00'));       // 0
console.log(beforeMidnight('00:00'));      // 0
console.log(afterMidnight('12:34'));       // 754
console.log(beforeMidnight('12:34'));      // 686