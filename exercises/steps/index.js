// Write a function that takes a positive number 'n'.
// The function should print a step shape with n levels using the character #
// and the spaces on the right hand side.
// Examples
//   steps(2)
//      '# '
//      '##'
//   steps(3)
//      '#  '
//      '## '
//      '###'

function steps(n) {

  for (let i = 0; i < n; i++) {
    let row = "\'";

    for (let j = 0; j < n; j++) {
      if (j <= i) {
        row += '#';
      } else {
        row += ' ';
      }
    }

    console.log(row + "\'" );
  }
}

let result = steps(10);
console.log(result);
