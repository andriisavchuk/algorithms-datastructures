/* eslint-disable no-restricted-syntax,no-unused-vars,no-continue,no-console,consistent-return,no-plusplus */

/*
  Write a function that capitalize the first letter of each word.
  Examples
    capitalize('that challenge looks great!') --> 'That Challenge Looks Great '
*/

function capitalizeStr(str) {
  let newStr = ''
  const wordsArray = str.split(' ')

  for (let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i]
    const newWord = word[0].toUpperCase() + word.slice(1)
    newStr += `${newWord} `
  }

  return newStr
}

const result = capitalizeStr('this challenge looks great!')
console.log(result)

/*--------------------------------*/

function capitalizeStr2(str) {
  let newStr = ''
  const wordsArray = []

  for (const word of str.split(' ')) {
    wordsArray.push(word[0].toUpperCase() + word.slice(1))
  }

  newStr = wordsArray.join(' ')
  return newStr
}

const result2 = capitalizeStr2('this challenge looks great at all!')
console.log(result2)

/*--------------------------------*/

function capitalizeStr3(str) {
  let newStr = str[0].toUpperCase()

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      newStr += str[i].toUpperCase()
    } else {
      newStr += str[i]
    }
  }

  return newStr
}

const result3 = capitalizeStr3('this challenge looks great! i think so')
console.log(result3)
