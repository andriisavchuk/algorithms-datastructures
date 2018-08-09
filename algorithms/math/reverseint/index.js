// Given an integer, return an integer that is the reverse ordering of numbers.
// Examples:
//   reverseInt(12) === 21
//   reverseInt(981) === 189
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(number) {
  let reversedNumber = number
  .toString()
  .split('')
  .reverse()
  .join('');

  // if (number < 0) {
  //   return parseInt(reversedNumber) * -1;
  // }

  return parseInt(reversedNumber) * Math.sign(number);

}

let result = reverseInt(-90);
console.log(result);
