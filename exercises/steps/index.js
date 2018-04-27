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
  let char = '#';
  let space = ' ';

  for (let i = 0; i < n; i++) {
    console.log("'" + char + "'");
    char += char ;
  }

}

let result = steps(3);
console.log(result);
