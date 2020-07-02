/* eslint-disable no-console,consistent-return,no-plusplus */

/*
  Write a function that takes a positive number 'n'.
  The function should print a pyramid shape with n levels using the character #

  Examples:
   pyramid(2)
     ' # '
     '###'
   pyramid(3)
    '  #  '
    ' ### '
    '#####'
*/

function pyramid(n) {
  const midpoint = Math.floor((2 * n - 1) / 2)

  for (let row = 0; row < n; row++) {
    let level = "'"

    for (let column = 0; column < 2 * n - 1; column++) {
      if (midpoint - row <= column && midpoint + row >= column) {
        level += '#'
      } else {
        level += ' '
      }
    }

    console.log(`${level}'`)
  }
}

pyramid(3)

/* Recursive Example */

function pyramid2(n, row = 0, level = '') {
  if (row === n) {
    return
  }

  if (level.length === 2 * n - 1) {
    console.log(level)
    return pyramid2(n, row + 1)
  }

  const midpoint = Math.floor((2 * n - 1) / 2)
  let add

  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#'
  } else {
    add = ' '
  }

  pyramid2(n, row, level + add)
}

pyramid2(5)
