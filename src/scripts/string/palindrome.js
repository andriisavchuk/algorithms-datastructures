/* eslint-disable no-restricted-syntax,no-unused-vars,no-continue,no-console,consistent-return,no-plusplus */

/*
  Given a string, return true if the string is a palindrome
  or false if it is not.  Palindromes are strings that
  form the same word if it is reversed. *Do* include spaces
  and punctuation in determining if the string is a palindrome.

  Examples:
    palindrome("abba") === true
    palindrome("abcdefg") === false
*/

function isPalindrome(str) {
  let reversedString = ''

  // for (let i = str.length - 1; i >= 0; i--) {
  //   reversedString += str[i];
  // }

  for (const char of str) {
    reversedString = char + reversedString
  }

  return reversedString === str
}

// const result = isPalindrome('abba')
// console.log(result)

/*------------------------------*/

function isPalindrome2(str) {
  const reversedString = str
    .split('')
    .reverse()
    .join('')

  return reversedString === str
}

// const result2 = isPalindrome2('abba')
// console.log(result2)

/*------------------------------*/

function isPalindrome3(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1]
  })
}

// const result3 = isPalindrome3('abbart')
// console.log(result3)

/*------------------------------*/

function isPalindrome4(str) {
  let charArray = []
  const stringValue = str.toLowerCase()
  const lettersArray = []
  const validCharacters = 'abcdefghijklmnopqrstuvwxyz'

  charArray = stringValue.split('')

  charArray.forEach(char => {
    if (validCharacters.indexOf(char) > -1) lettersArray.push(char)
  })

  return lettersArray.join('') === lettersArray.reverse().join('')
}

const result4 = isPalindrome4('Madam I`m Adam')
console.log(result4)
