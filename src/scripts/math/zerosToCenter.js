/* eslint-disable no-console,no-plusplus,func-names */
const digitsArray = [3, 9, 11, 0, 1, 5, 0, 7, 0, 8, 5, 0, 6];

const moveZeroesToTheEnd = function(arr) {
  let i;
  let temp;

  for (i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 0) {
      temp = arr.splice(i, 1);
      arr.push(temp[0]);
    }
  }
  return arr;
};

const moveZeroesToTheStart = function(arr) {
  let i;
  let temp;

  for (i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 0) {
      temp = arr.splice(i, 1);
      arr.unshift(temp[0]);
    }
  }
  return arr;
};

function zerosToCenter(arr) {
  const middleIndex = Math.floor(arr.length / 2);

  const firstArray = arr.slice(0, middleIndex);
  const secondArray = arr.slice(middleIndex, arr.length);

  let newFirstArray = [];
  let newSecondArray = [];

  newFirstArray = moveZeroesToTheEnd(firstArray);
  newSecondArray = moveZeroesToTheStart(secondArray);
  return [...newFirstArray, ...newSecondArray];
}

const result = zerosToCenter(digitsArray);
console.log(result);
