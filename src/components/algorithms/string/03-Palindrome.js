/*
  Given a string, return true if the string is a palindrome
  or false if it is not.  Palindromes are strings that
  form the same word if it is reversed. *Do* include spaces
  and punctuation in determining if the string is a palindrome.

  Examples:
    palindrome("abba") === true
    palindrome("abcdefg") === false
*/

const Palindrome = () => {
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

  /* 2-nd solution */

  // function isPalindrome(str) {
  //   const reversedString = str.split('').reverse().join('')
  //
  //   return reversedString === str
  // }

  /* 3-rd solution */

  // function isPalindrome3(str) {
  //   return str.split('').every((char, i) => {
  //     return char === str[str.length - i - 1]
  //   })
  // }

  /* 4-th solution */

  // function isPalindrome(str) {
  //   let charArray = []
  //   const stringValue = str.toLowerCase()
  //   const lettersArray = []
  //   const validCharacters = 'abcdefghijklmnopqrstuvwxyz'
  //
  //   charArray = stringValue.split('')
  //
  //   charArray.forEach((char) => {
  //     if (validCharacters.indexOf(char) > -1) lettersArray.push(char)
  //   })
  //
  //   return lettersArray.join('') === lettersArray.reverse().join('')
  // }

  const result = isPalindrome('abba')
  console.log(result)

  return `
    <div class="card">
      <h2>Palindrome</h2>
    </div>
  `
}

export default Palindrome
