function rollCall(array) {
  for (let i = 0; i < array.length; i += 1) {
    console.log(array[i]);
  }
}

const NAMES = ['Steve', 'Martha', 'Pat'];

rollCall(NAMES);