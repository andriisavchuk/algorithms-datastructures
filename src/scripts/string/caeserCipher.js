/* eslint-disable no-restricted-syntax,no-unused-vars,no-continue,no-console,consistent-return,no-plusplus */

/*
  It is a type of substitution cipher in which each letter in the plaintext is
  'shifted' a certain number of places down the alphabet. For example,
  with a shift of 1, A would be replaced by B, B would become C, and so on.
*/

function caeserCipher(str, num) {
  const cipherNumber = num % 26 // if num > 26 or < -26 module the num
  const alphabetArray = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ]
  const newString = str.toLowerCase()
  let shiftedStr = ''

  for (let i = 0; i < newString.length; i++) {
    const currentLetter = newString[i]
    if (currentLetter === ' ') {
      shiftedStr += currentLetter
      continue
    }
    const currentLetterIndex = alphabetArray.indexOf(currentLetter)
    let newLetterIndex = currentLetterIndex + cipherNumber
    if (newLetterIndex > 25) newLetterIndex -= 26
    if (newLetterIndex < 0) newLetterIndex = 26 + newLetterIndex
    if (str[i] === str[i].toUpperCase()) {
      shiftedStr += alphabetArray[newLetterIndex].toUpperCase()
    } else {
      shiftedStr += alphabetArray[newLetterIndex]
    }
  }

  return shiftedStr
}

// const result = caeserCipher('zoo Keeper', 2);
// const result = caeserCipher('Big Car', -16);
const result = caeserCipher('Javascript', 1)
console.log(result)
