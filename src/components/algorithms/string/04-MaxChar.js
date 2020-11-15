/*
  Given a string, return the character that is most commonly used in the string

  Examples:
   maxChar("abccccccba") === "c"
   maxChar("abg 12311111111") === "1"
*/

const MaxChar = () => {
  function maxCharacter(str) {
    const chars = {}
    let maxValue = 0
    let maxChar = ''

    for (const char of str) {
      if (!chars[char]) {
        chars[char] = 1
      } else {
        chars[char]++
      }
    }

    for (const char in chars) {
      if (chars[char] > maxValue) {
        maxValue = chars[char]
        maxChar = char
      }
    }

    return maxChar
  }

  const result = maxCharacter('abccbaffxccsssfxffgf')
  console.log(`Maximum chars in string: '${result}'`)

  return `
    <div class="card">
      <h2>Max Chars in String</h2>
    </div>
  `
}

export default MaxChar
