// Write a function that capitalize the first letter of each word.
// Examples
//   capitalize('that challenge looks great!') --> 'That Challenge Looks Great '

function capitalizeStr (str) {
  let newStr = '';
  let wordsArray = [];

  wordsArray = str.split(' ');

  for (let i = 0; i < wordsArray.length; i++) {
    let word = wordsArray[i];
    let newWord = '';
    newWord = word[0].toUpperCase() + word.slice(1);
    newStr += newWord + ' ';
  }

  return newStr;

  // let wordsArray = [];

  // for (let word of str.split(' ')) {
  //   wordsArray.push(word[0].toUpperCase() + word.slice(1));
  // }

  // return words.join(' ');
}

let result = capitalizeStr('this challenge looks great!');
console.log(result);
