/*
  Given an array and chunk size, divide the array into many subarrays
  where each subaaray is of length size

  Examples:
    chunk([1, 2, 3, 4], 2); ----> [[1, 2], [3, 4]]
    chunk([1, 2, 3, 4, 5], 2); ----> [[1, 2], [3, 4], [5]]
    chunk([1, 2, 3, 4, 5, 6, 7, 8], 3); ----> [[1, 2, 3], [4, 5, 6], [7, 8]]
    chunk([1, 2, 3, 4, 5], 10); ----> [[1, 2, 3, 4, 5]]
*/

/*
function chunkArray (arr, size) {
  let chunkedArray = [];

  for (let element of arr) {
    const lastElement = chunkedArray[chunkedArray.length - 1];
    console.log(lastElement);
    if (!lastElement || lastElement.length === size) {
      chunkedArray.push([element]);
    } else {
      lastElement.push(element);
    }
  }

  return chunkedArray;
}
*/

function chunkArray (arr, size) {
  let chunkedArray = [];
  let index = 0;

  while (index < arr.length) {
    chunkedArray.push(arr.slice(index, index + size));
    index += size;
  }

  return chunkedArray;
}

let result = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3);
console.log(result);
