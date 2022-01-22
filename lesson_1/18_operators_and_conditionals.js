let apples = 3;
let bananas = "3";

if (apples === bananas) {
  console.log('Strictly equal!');
}
else {
  if (apples == bananas) {
    console.log('Non-strictly equal!');
  } else {
    console.log('Not equal.');
  }
}

bananas = 3;
let areEqual = (apples === bananas);
console.log(areEqual);

bananas = undefined;
let eitherOr = (apples || bananas);
console.log(eitherOr);

bananas = 1;
eitherOr = (apples || bananas);
console.log(eitherOr);
eitherOr = (bananas || apples);
console.log(eitherOr);

let lastName = 'Johnson';
let familyMessage = (lastName === 'Johnson') ? 'You\'re part of the family!' : 'You\'re not family.';
console.log(familyMessage);

