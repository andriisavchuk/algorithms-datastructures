/* eslint-disable no-console,consistent-return,no-param-reassign,no-plusplus */
/*
  Calculate the sum of all elements in an array which has nested sub-arrays.
*/

function sumArrayElements(arr) {
  let sum = 0

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      sum += sumArrayElements(arr[i])
    } else {
      sum += arr[i]
    }
  }

  return sum
}

const result = sumArrayElements([3, [5, 12, 7], [5], [4, 8], 2])
console.log(result)
