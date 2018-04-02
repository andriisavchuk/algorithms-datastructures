// Given a string, return the character that is most commonly used in the string
// Examples:
//   maxChar("abccccccba") === "c"
//   palindrome("abg 12311111111") === "1"

function maxChar(str) {
  let chars = {};
  let maxValue = 0;
  let maxChar = '';

  for (const char of str) {
    if (!chars[char]) {
      chars[char] = 1;
    } else {
      chars[char]++;
    }
  }

  for (const char in chars) {
    if (chars[char] > maxValue) {
      maxValue = chars[char];
      maxChar = char;
    }
  }

  return maxChar;

}

let result = maxChar("abccccccba");
console.log(`Maximum chars in string have ${result}`);
