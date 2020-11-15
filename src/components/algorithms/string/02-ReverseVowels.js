/*
  Reverse vowels in string.
  Given a string, return a new string with the reversed vowels
*/

const ReverseVowels = () => {
  function isVowel(character) {
    const arrOfVowels = ['a', 'e', 'i', 'o', 'u', 'y']
    return arrOfVowels.some((vowel) => character === vowel)
  }

  function reverseVowelsInString(str) {
    let reversedString = ''
    const symbolToBeReplacedForVowel = '-'
    const arrOfVowelsFromString = []
    const arrFromString = str.split('')

    for (let i = 0; i < arrFromString.length; i++) {
      if (isVowel(arrFromString[i])) {
        arrOfVowelsFromString.push(arrFromString[i])
        arrFromString[i] = symbolToBeReplacedForVowel
      }
    }

    arrOfVowelsFromString.reverse()

    for (let i = 0; i < arrFromString.length; i++) {
      if (arrFromString[i] === '-') {
        arrFromString[i] = arrOfVowelsFromString[0]
        arrOfVowelsFromString.shift()
      }
    }

    reversedString = arrFromString.join('')
    return reversedString
  }

  const result = reverseVowelsInString('underground')
  console.log(result)

  return `
    <div class="card">
      <h2>Reverse Vowels in String</h2>
    </div>
  `
}

export default ReverseVowels
