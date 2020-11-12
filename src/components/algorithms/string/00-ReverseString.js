/*
  Given a string, return a new string with the reversed order of characters
  Example reverse('apple') === 'leppa'
*/

const ReverseString = async () => {
  /*---- For loop ----*/

  function reverseString(str) {
    let reversedString = ''

    for (let i = str.length - 1; i >= 0; i--) {
      reversedString += str[i].toLowerCase()
    }

    // for (let char of str) {
    //   reversedString = char + reversedString;
    // }

    return reversedString
  }

  const result = reverseString('Apple')
  console.log(result)

  return `
    <div class="card">
      <h2>Reverse String</h2>
    </div>
  `
}

export default ReverseString
