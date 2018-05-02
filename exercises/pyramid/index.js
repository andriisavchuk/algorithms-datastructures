// Write a function that takes a positive number 'n'.
// The function should print a pyramid shape with n levels using the character #
//
// Examples
//   pyramid(2)
//      ' # '
//      '###'
//   pyramid(3)
//     '  #  '
//     ' ### '
//     '#####'

function pyramid(n) {
  const midpoint = Math.floor((2 * n - 1) / 2);

  for (let row = 0; row < n; row++) {
    let level = '';

    for (let column = 0; column < 2 * n - 1 ; column++) {
       if (midpoint - row <= column && midpoint + row >= column) {
         level += '#';
       } else {
         level += ' ';
       }
     }

     console.log(level);
  }
}

let result = pyramid(3);
console.log(result);
