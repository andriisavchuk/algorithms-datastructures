/*
  Ransom note effect is the result of using an excessive number of juxtaposed typefaces.
  It takes its name from the appearance of a stereotypical ransom note,
  with the message formed from words or letters cut randomly from
  a magazine or newspaper in order to avoid using recognizable handwriting.
*/
/**
 * @param {string} noteText
 * @param {string} magazineText
 * @return {boolean}
 */
function ransomNote(noteText, magazineText) {
  let isNotePossible = true;
  let noteTextArray = noteText.split(' ');
  let magazineTextArray = magazineText.split(' ');
  const magazineObject = {};

  magazineTextArray.forEach(word => {
    if (!magazineObject[word]) {
      magazineObject[word] = 0;
    }
    magazineObject[word]++;
  });

  console.log(magazineObject);

  noteTextArray.forEach(word => {
    if (magazineObject[word]) {
      magazineObject[word]--;
      if (magazineObject[word] < 0) {
        isNotePossible = false;
      }
    } else {
      isNotePossible = false;
    }
  });

  return isNotePossible;
}

const result = ransomNote('This is a is', 'This is a magazine with text that is in this magazine about our planet');
console.log(result);