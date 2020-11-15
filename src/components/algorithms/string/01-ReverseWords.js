/*
  Reverse words in string.
  Given a string, return a new string with the reversed order of words
*/

const ReverseWords = () => {
  function reverseWords(str) {
    let reversedWordsString = ''
    let arrOfWords = []
    const arrOfReversedWords = []

    arrOfWords = str.split(' ')

    for (const word of arrOfWords) {
      let reversedWord = ''
      for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i]
      }
      arrOfReversedWords.push(reversedWord)
    }

    // arrOfWords.forEach(word => {
    //   let reversedWord = '';
    //   for (let i = word.length - 1; i >= 0; i--) {
    //     reversedWord += word[i];
    //   }
    //   arrOfReversedWords.push(reversedWord);
    // });

    reversedWordsString = arrOfReversedWords.join(' ')
    return reversedWordsString
  }

  const result = reverseWords('Apples from the garden')
  console.log(result)

  return `
    <div class="card">
      <h2>Reverse Words in String</h2>
    </div>
  `
}

export default ReverseWords
