/*
  Write a function that capitalize the first letter of each word.

  Examples
    capitalize('that challenge looks great!') --> 'That Challenge Looks Great '
*/

function capitalizeStr (str) {
  // let newStr = '';
  // let wordsArray = [];

  // wordsArray = str.split(' ');

  // for (let i = 0; i < wordsArray.length; i++) {
  //   let word = wordsArray[i];
  //   let newWord = '';
  //   newWord = word[0].toUpperCase() + word.slice(1);
  //   newStr += newWord + ' ';
  // }

  // return newStr;

  // let wordsArray = [];

  // for (let word of str.split(' ')) {
  //   wordsArray.push(word[0].toUpperCase() + word.slice(1));
  // }

  // return words.join(' ');

  let newStr = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i];
    }
  }

  return newStr;
}

let result = capitalizeStr('this challenge looks great!');
console.log(result);
