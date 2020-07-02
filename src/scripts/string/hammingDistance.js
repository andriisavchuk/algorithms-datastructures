/* eslint-disable no-console */

/*
  The Hamming distance between two strings of equal length is the number of
  positions at which the corresponding symbols are different.
  In other words, it measures the minimum number of substitutions required to change
  one string into the other, or the minimum number of errors that could have
  transformed one string into the other. In a more general context,
  the Hamming distance is one of several string metrics for measuring the edit
  distance between two sequences.
*/

function hammingDistance(str1, str2) {
  let distance = 0

  if (str1.length !== str2.length) {
    throw new Error('Length of comparing strings should be equal')
  }

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      distance += 1
    }
  }
  return distance
}

const result = hammingDistance('karolin', 'kathrin')
console.log(result)
