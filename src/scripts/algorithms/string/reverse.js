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

/*
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
*/

/*---- Inbuilt methods ----*/

/*
function reverseString(str) {
  let arrayOfWords = [];
  let reversedString = '';

  arrayOfWords = str.split('');
  arrayOfWords.reverse();
  reversedString = arrayOfWords.join('');

  return reversedString;
}

const result = reverseString('Apple from the Heaven');
console.log(result);


function reverseString(str) {
  return str.split('').reverse().join('');
}

const result = reverseString('Apple from the Heaven');
console.log(result);
*/