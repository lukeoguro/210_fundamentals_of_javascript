function formattedMonth(date) {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[date.getMonth()];
}

function formattedDay(date) {
  let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return daysOfWeek[date.getDay()];
}

function dateSuffix(date) {
  let ones = date % 10;
  let tens = Math.floor(date / 10 % 10);

  let suffix = 'th';
  if (tens !== 1) {
    if (ones === 1) {
      suffix = 'st';
    } else if (ones === 2) {
      suffix = 'nd';
    } else if (ones === 3) {
      suffix = 'rd';
    }
  }

  return String(date + suffix);
}

function formattedDate(date) {
  let day = formattedDay(date);
  let month = formattedMonth(date);

  console.log(`Today's day is ${day}, ${month} ${dateSuffix(date.getDate())}`);
}

let today = new Date();
formattedDate(today);

console.log(today.getFullYear());
console.log(today.getYear());

console.log(today.getTime());

let tomorrow = new Date(today.getTime());

tomorrow.setDate(today.getDate() + 1);
formattedDate(tomorrow);

let nextWeek = new Date(today.getTime());

console.log(today === nextWeek);

console.log(today.toDateString() === nextWeek.toDateString());

nextWeek.setDate(today.getDate() + 7);

console.log(today.toDateString() === nextWeek.toDateString());

function formatTime(date) {
  let hours = String(date.getHours());
  let minutes = String(date.getMinutes());

  return `${addZero(hours)}:${addZero(minutes)}`;
}

function addZero(value) {
  return value.length === 1 ? '0' + value : value;
}

console.log(formatTime(new Date(2013, 2, 1, 1, 10)));