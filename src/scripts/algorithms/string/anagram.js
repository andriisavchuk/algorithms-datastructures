/*
  Check to see if two provided strings are anagrams of eachother.
    One string is an anagram of another if it uses the same characters
    in the same quantity. Only consider characters, not spaces
    or punctuation.  Consider capital letters to be the same as lower case

  Examples
    anagrams('rail safety', 'fairy tales') --> True
    anagrams('RAIL! SAFETY!', 'fairy tales') --> True
    anagrams('Hi there', 'Bye there') --> False
*/

/*
function isAnagram (string1, string2) {
  const charsMapOfStr1 = strToCharMap(string1);
  const charsMapOfStr2 = strToCharMap(string2);

  if (Object.keys(charsMapOfStr1).length !== Object.keys(charsMapOfStr2).length) {
    return false;
  }

  for (const char in charsMapOfStr1) {
    if (charsMapOfStr1[char] !== charsMapOfStr2[char]) {
      return false;
    }
  }

  return true;
}
*/

/*
function strToCharMap (str) {
  const charsMap = {};

  for (const char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charsMap[char] = charsMap[char] || 1;
  }

  return charsMap;
}
*/

function isAnagram(str1, str2) {
  return cleanString(str1) === cleanString(str2);
}

function cleanString(str) {
  return str
          .replace(/[^\w]/g, '')
          .toLowerCase()
          .split()
          .sort()
          .join('');
}

let result = isAnagram('Hi there', 'Bye there');
console.log(result);
