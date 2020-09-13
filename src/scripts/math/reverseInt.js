/* eslint-disable radix,no-console */

/*
 Math.sign() - function returns the sign of a number,
 indicating whether number is positive, negative or zero.
*/

function reverseInteger(n) {
  const reversedNumber = n
    .toString()
    .split('')
    .reverse()
    .join('')

  // if (n < 0) {
  //   return parseInt(reversedNumber) * -1;
  // }

  return parseInt(reversedNumber) * Math.sign(n)
}

const result = reverseInteger(-51)
console.log(result)
