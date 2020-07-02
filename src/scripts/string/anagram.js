/* eslint-disable no-restricted-syntax,no-unused-vars,no-continue,no-console,consistent-return,no-plusplus */
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

/* Utilize inbuilt methods */

const string1 = 'rAIl safety'
const string2 = 'fairy Tales'

function isAnagram1(str1, str2) {
  const sortedStr1 = str1
    .toLowerCase()
    .split('')
    .sort()
    .join('')

  const sortedStr2 = str2
    .toLowerCase()
    .split('')
    .sort()
    .join('')

  return sortedStr1 === sortedStr2
}

// const result = isAnagram1(string1, string2)
// console.log(result)

/*
  Utilize replace() method inside helper function with RegEx
  pattern to consider only letters in strings
*/

function cleanString(str) {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('')
}

function isAnagram2(str1, str2) {
  return cleanString(str1) === cleanString(str2)
}

// const result2 = isAnagram2('RAIL! SAFETY!', 'fairy tales')
// console.log(result2)

/*--------------------------------------*/

function strToCharMap(str) {
  const charsMap = {}

  for (const char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charsMap[char] = charsMap[char] + 1 || 1
  }

  return charsMap
}

function isAnagram3(str1, str2) {
  const charsMapOfStr1 = strToCharMap(str1)
  const charsMapOfStr2 = strToCharMap(str2)

  if (Object.keys(charsMapOfStr1).length !== Object.keys(charsMapOfStr2).length) {
    return false
  }

  for (const char in charsMapOfStr1) {
    if (charsMapOfStr1[char] !== charsMapOfStr2[char]) {
      return false
    }
  }

  return true
}

// const result1 = isAnagram3('RAIL! SAFETY!', 'fairy tales')
// console.log(result1)

/*--------------------------------------*/

const words = ['dell', 'ledl', 'abc', 'cba', 'monk', 'konm']

function anagrams(arr) {
  for (let i = 0; i < arr.length; i++) {
    const word = arr[i]
    const alphabeticalSort = word
      .split('')
      .sort()
      .join('')

    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        continue
      }

      const other = arr[j]
      if (
        alphabeticalSort ===
        other
          .split('')
          .sort()
          .join('')
      ) {
        console.log(`${word} - ${other}`)
      }
    }
  }
}

anagrams(words)

/*--------------------------------------*/

function sortStrChars(str) {
  if (!str) return
  return str
    .split('')
    .sort()
    .join('')
}

function getGroupedAnagrams(arr) {
  const anagramsObj = {}
  arr.forEach(word => {
    const sortedWord = sortStrChars(word)
    if (anagramsObj[sortedWord]) {
      return anagramsObj[sortedWord].push(word)
    }
    anagramsObj[sortedWord] = [word]
  })
  return anagramsObj
}

// const groupedAnagrams = getGroupedAnagrams(words);
// console.log(groupedAnagrams);
