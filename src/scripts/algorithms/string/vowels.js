/*
  Write a function that counts vowels letters in the string.
  Examples:
    countVowels('Hello friend!'); --> 4
*/
/**
 * @param {string} str
 * @return {number}
 */
function countVowels(str) {
  let vowels = ['a', 'i', 'e', 'o', 'u'];
  let count = 0;

  let arrayFromString = str.toLowerCase().split('');

  for (let i = 0; i < arrayFromString.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (arrayFromString[i] === vowels[j]) {
        count++;
      }
    }
  }
  return count;
}

console.log(`There are ${countVowels('Hello Andrii')} vowels in the string`);

/*------------------------------*/

function countVowels2(str) {
  let vowels = 0;
  const vowelsArray = ['a', 'e', 'i', 'o', 'u'];

  for (const char of str.toLowerCase()) {
    if (vowelsArray.includes(char)) {
      vowels++;
    }
  }

  return vowels;
}

let result = countVowels3("Hello friend");
console.log(result);

/*------------------------------*/

function countVowels3(str) {
  const vowels = str.match(/[aeiou]/gi);
  let count = vowels.length;
  return `There are ${count} vowels in the string.`;
}

let result2 = countVowels3("Hello friend. How are you?");
console.log(result2);
