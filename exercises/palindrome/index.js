// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

/*
function isPalindrome(str) {
  let reversedString = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }

  // if (str === reversedString) {
  //   return true;
  // } else {
  //   return false;
  // }

  return str === reversedString ? true : false;
}

let result = isPalindrome('abba');
console.log(result);
*/

/*
function isPalindrome(str) {
  let reversedString = str
    .split('')
    .reverse()
    .join('');

  return reversedString === str;
}

let result = isPalindrome('abba');
console.log(result);
*/

/*
function isPalindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

let result = isPalindrome('abbart');
console.log(result);
*/
