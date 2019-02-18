function replaceLetters(str) {
  let newString = '';
  for (let char of str) {
    if (char === 'a' || char === 'A') {
      char = 4;
    } else if (char === 'e' || char === 'E') {
      char = 3;
    } else if (char === 'i' || char === 'I') {
      char = 1;
    } else if (char === 'o' || char === 'O') {
      char = 0;
    } else if (char === 's' || char === 'S') {
      char = 5;
    } else if (char === 't' || char === 'T') {
      char = 7;
    } else if (char === 'b' || char === 'B') {
      char = 5;
    }

    newString += char;

    // console.log(newString);
  }

  return newString;
}

let result = replaceLetters(`Let's have some fun`);
console.log(result);
