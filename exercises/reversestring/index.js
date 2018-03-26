// Given a string, return a new string with the reversed order of characters
// Example reverse('apple') === 'leppa'

/*---- Inbuilt methods ----*/

/*
function reverseString(str) {
  let splitedString = [];
  let reversedString = '';

  splitedString = str.split('');
  splitedString.reverse();
  reversedString = splitedString.join('');

  return reversedString;
}

let result = reverseString('hello world');
console.log(result);
*/

/*---- Inbuilt methods chaining ----*/

/*
function reverseString(str) {
  return str.split('').reverse().join('');
}

let result = reverseStr('hello');
console.log(result);
*/

/*---- For loop ----*/

/*
  1.Create an empty string that will host the new created string

  2.The starting point of the loop will be (str.length - 1) which corresponds to the
    last character of the string, "o"
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

/*
function reverseString (str) {
  let reversedString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }

  // for (let character of str) {
  //   reversedString = character + reversedString;
  //   console.log(reversedString);
  // }
  return reversedString;
}

let result = reverseString('apple');
console.log(result);
*/

/*---- Recursion ----*/

/*
function reverseString(str) {
  if (str === ''){
    return '';
  } else {
    return reverseString(str.substr(1)) + str.charAt(0);
  }
}

let result = reverseString('hello');
console.log(result);
*/

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
*/

/*---- ES6 Reduce method ----*/

/*
function reverseString(str) {
  return str.split('').reduce((reversed, char) => char + reversed, '');
}

let result = reverseString('hello');
console.log(result);
*/
