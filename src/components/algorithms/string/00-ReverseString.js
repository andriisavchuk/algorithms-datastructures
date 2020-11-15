/*
  Given a string, return a new string with the reversed order of characters
  Example reverseString('apple') === 'leppa'
*/

const ReverseString = () => {
  /*---- For loop ----*/

  // function reverseString(str) {
  //   let reversedString = ''
  //
  //   for (let i = str.length - 1; i >= 0; i--) {
  //     reversedString += str[i].toLowerCase()
  //   }
  //
  //   // for (let char of str) {
  //   //   reversedString = char + reversedString
  //   // }
  //
  //   return reversedString
  // }

  /*---- Inbuilt methods ----*/

  // function reverseString(str) {
  //   return str.split('').reverse().join('')
  // }

  // function reverseString(str) {
  //   return str.split('').reduce((reversed, char) => char + reversed, '')
  // }

  /*---- Recursion ----*/

  /*
    First Part of the recursion method
      You need to remember that you won’t have just one call, you’ll have several nested calls
      Each call: str === "?"        	                  reverseString(str.subst(1))     + str.charAt(0)
      1st call – reverseString("Hello")   will return   reverseString("ello")           + "h"
      2nd call – reverseString("ello")    will return   reverseString("llo")            + "e"
      3rd call – reverseString("llo")     will return   reverseString("lo")             + "l"
      4th call – reverseString("lo")      will return   reverseString("o")              + "l"
      5th call – reverseString("o")       will return   reverseString("")               + "o"

    Second part of the recursion method
      The method hits the if condition and the most highly nested call returns immediately
      5th call will return reverseString("") + "o" = "o"
      4th call will return reverseString("o") + "l" = "o" + "l"
      3rd call will return reverseString("lo") + "l" = "o" + "l" + "l"
      2nd call will return reverserString("llo") + "e" = "o" + "l" + "l" + "e"
      1st call will return reverserString("ello") + "h" = "o" + "l" + "l" + "e" + "h"

      The substring() method returns the part of the string between the start and end indexes, or to the end of the string.
  */

  function reverseString(str) {
    if (str === '') return ''
    return reverseString(str.substring(1)) + str.charAt(0)
  }

  const result = reverseString('Apple in the basket')
  console.log(result)

  return `
    <div class="card">
      <h2>Reverse String</h2>
    </div>
  `
}

export default ReverseString
