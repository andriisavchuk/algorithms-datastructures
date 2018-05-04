// Write a function that counts vowels letters in the string.
// Examples
//   countVowels('Hello friend!'); --> 4
/*
function countVowels(str) {
  let vowels = 0;
  const vowelsArray = ['a', 'e', 'i', 'o', 'u'];

  for (const char of str.toLowerCase()) {
    if (vowelsArray.includes(char)) {
      vowels++;
    }
  }

  return vowels;
}
*/

function countVowels(str) {
  const vowels = str.match(/[aeiou]/gi);
  let count = vowels.length;
  return `There are ${count} vowels in the string.`;
}

let result = countVowels("Hello friend");
console.log(result);
