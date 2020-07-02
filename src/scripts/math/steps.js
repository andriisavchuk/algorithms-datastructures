/* eslint-disable no-console,consistent-return,no-param-reassign,no-plusplus */

/*
  Write a function that takes a positive number 'n'.
  The function should print a step shape with n levels using the character #
  and the spaces on the right hand side.

  Examples:
    steps(2)
      '# '
      '##'
    steps(3)
      '#  '
      '## '
      '###'
*/

function stepsImperative(n) {
  for (let i = 0; i < n; i++) {
    let row = "'"

    for (let j = 0; j < n; j++) {
      if (j <= i) {
        row += '#'
      } else {
        row += ' '
      }
    }

    console.log(`${row}'`)
  }
}

stepsImperative(5)

/* Recursive solution */

function stepsRecursive(n, row = 0, steps = '') {
  if (n === row) {
    return
  }

  if (n === steps.length) {
    console.log(steps)
    return stepsRecursive(n, row + 1)
  }

  if (steps.length <= row) {
    steps += '#'
  } else {
    steps += ' '
  }

  stepsRecursive(n, row, steps)
}

stepsRecursive(5)
