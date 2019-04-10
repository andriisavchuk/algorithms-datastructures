/*
  Given a string, return a new string with the reversed order of characters
  Example reverse('apple') === 'leppa'
*/

/*---- For loop ----*/

/*
  1.Create an empty string that will host the new created string

  2.The starting point of the loop will be (str.length - 1) which
    corresponds to the last character of the string, "o"
    As long as i is greater than or equals 0, the loop will go on
    We decrement i after each iteration

    Here hello's length equals 5
      For each iteration: i = str.length - 1 and newString = newString + str[i]
      First iteration:    i = 5 - 1 = 4,         newString = "" + "o" = "o"
      Second iteration:   i = 4 - 1 = 3,         newString = "o" + "l" = "ol"
      Third iteration:    i = 3 - 1 = 2,         newString = "ol" + "l" = "oll"
      Fourth iteration:   i = 2 - 1 = 1,         newString = "oll" + "e" = "olle"
      Fifth iteration:    i = 1 - 1 = 0,         newString = "olle" + "h" = "olleh

  3. Return the reversed string
*/
/**
 * @param {string} str
 * @return {string}
 */
function reverseString(str) {
  let reversedString = '';

  // for (let i = str.length - 1; i >= 0; i--) {
  //   //   reversedString += str[i].toLowerCase();
  //   // }

  for (let char of str) {
    reversedString = char + reversedString;
  }

  return reversedString;
}

const result = reverseString('Apple');
console.log(result);

/*---- Inbuilt methods ----*/

function reverseString2(str) {
  let arrayOfWords = [];
  let reversedString = '';

  arrayOfWords = str.split('');
  arrayOfWords.reverse();
  reversedString = arrayOfWords.join('');

  return reversedString;
}

const result2 = reverseString2('Apple from the Heaven');
console.log(result2);

/*-------------------------*/

function reverseString3(str) {
  return str.split('').reverse().join('');
}

const result3 = reverseString3('Apple from the Heaven');
console.log(result3);

/*---- ES6 Reduce method ----*/

function reverseString4(str) {
  return str.split('').reduce((reversed, char) => char + reversed, '');
}

const result4 = reverseString4('hello world');
console.log(result4);

/*---- Recursion ----*/

function reverseStringRecursive(str) {
  if (str === '') return '';
  return reverseStringRecursive(str.substring(1)) + str.charAt(0);
}

const result5 = reverseStringRecursive('Apple from the Heaven');
console.log(result5);

/*
  First Part of the recursion method
    You need to remember that you won’t have just one call, you’ll have several nested calls
    Each call: str === "?"        	                  reverseString(str.subst(1))     + str.charAt(0)
    1st call – reverseString("Hello")   will return   reverseString("ello")           + "h"
    2nd call – reverseString("ello")    will return   reverseString("llo")            + "e"
    3rd call – reverseString("llo")     will return   reverseString("lo")             + "l"
    4th call – reverseString("lo")      will return   reverseString("o")              + "l"
    5th call – reverseString("o")       will return   reverseString("")               + "o"

  Second part of the recursion method
    The method hits the if condition and the most highly nested call returns immediately
    5th call will return reverseString("") + "o" = "o"
    4th call will return reverseString("o") + "l" = "o" + "l"
    3rd call will return reverseString("lo") + "l" = "o" + "l" + "l"
    2nd call will return reverserString("llo") + "e" = "o" + "l" + "l" + "e"
    1st call will return reverserString("ello") + "h" = "o" + "l" + "l" + "e" + "h"

    The substring() method returns the part of the string between the start and end indexes, or to the end of the string.
*/

/* Reverse words in string.
   Given a string, return a new string with the reversed order of words
*/

function reverseWords(str) {
  let arrOfWords = [];
  let arrOfReversedWords = [];
  let reversedWordsString = '';

  arrOfWords = str.split(' ');

  for (let word of arrOfWords ) {
    let reversedWord = '';
    for (let i = word.length - 1; i >= 0 ; i--) {
      reversedWord += word[i];
    }

    arrOfReversedWords.push(reversedWord);
  }

  // arrOfWords.forEach(word => {
  //   let reversedWord = '';
  //   for (let i = word.length - 1; i >= 0; i--) {
  //     reversedWord += word[i];
  //   }
  //   arrOfReversedWords.push(reversedWord);
  // });

  return reversedWordsString = arrOfReversedWords.join(' ');
}

const reversedString = reverseWords('Apple from the Heaven');
console.log(reversedString);
