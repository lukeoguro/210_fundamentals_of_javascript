function rot13(string) {
  const ROTATION = 13;

  let newString = '';
  for (let index = 0; index < string.length; index += 1) {
    let charCode = string.charCodeAt(index);
    let char = string[index];

    if (/[A-M]/i.test(char)) {
      charCode += ROTATION;
    } else if (/[N-Z]/i.test(char)) {
      charCode -= ROTATION;
    }

    newString += String.fromCharCode(charCode);
  }

  return newString;
}

console.log(rot13('..hello world..') === '..uryyb jbeyq..');
console.log(rot13('abcdefghijklmnopqrstuvwxyz') === 'nopqrstuvwxyzabcdefghijklm');
console.log(rot13('ABCDEFGHIJKLMNOPQRSTUVWXYZ') === 'NOPQRSTUVWXYZABCDEFGHIJKLM');
console.log(rot13('Teachers open the door, but you must enter by yourself.') === 'Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.');
console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')) === 'Teachers open the door, but you must enter by yourself.');