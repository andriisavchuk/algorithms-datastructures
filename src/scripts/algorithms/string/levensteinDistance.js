/* Taken from https://github.com/trekhleb/javascript-algorithms */

/**
 * @param {string} str1
 * @param {string} str2
 * @return {number}
 */

function levenshteinDistance(str1, str2) {
  // Create empty distance matrix for all possible modifications of
  // substrings of str1 to substring str2
  const distanceMatrix = Array(str2.length + 1)
    .fill(null)
    .map(() => Array(str1 + 1).fill(null));

  // Fill the first row of the matrix.
  // If this is first row then we're transforming empty string to str1.
  // In this case number of transformations equals to size of a substring.
  for (let i = 0; i <= str1.length; i++) {
    distanceMatrix[0][i] = i;
  }

  // Fill the first column of the matrix.
  // If this is first column then we're transforming empty string to b.
  // In this case the number of transformations equals to size of b substring.
  for (let j = 0; j <= str2.length ; j++) {
    distanceMatrix[j][0] = j;
  }

  for (let j = 1; j <= str2.length; j++) {
    for (let i = 1; i <= str1.length; i++) {
      const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
      distanceMatrix[j][i] = Math.min(
        distanceMatrix[j][i - 1] + 1, // deletion
        distanceMatrix[j - 1][i] + 1,       // insertion
        distanceMatrix[j - 1][i - 1] + indicator, // substitution
      );
    }
  }
  console.log(distanceMatrix);
  return distanceMatrix[str2.length][str1.length];
}

const result = levenshteinDistance('hello', 'lehho');
console.log(result);
