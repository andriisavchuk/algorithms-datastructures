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

/*
function chunkArray (arr, size) {
  let chunkedArray = [];
  let index = 0;

  while (index < arr.length) {
    chunkedArray.push(arr.slice(index, index + size));
    index += size;
  }

  return chunkedArray;
}
*/

/*
function chunkArray(arr, size) {
  let chunkedArray = [];
  let copied = [...arr];
  const numOfChunks = Math.ceil(arr.length / size);
  for (let i = 0; i < numOfChunks ; i++) {
    chunkedArray.push(copied.splice(0, size));
  }

  return chunkedArray;

}
*/

function chunkArray(array, size) {
  if (!array) return [];
  const firstChunk = array.slice(0, size); // create the first chunk of the given array
  if (!firstChunk.length) {
    return array; // this is the base case to terminal the recursive
  }
  return [firstChunk].concat(chunkArray(array.slice(size, array.length), size));
}

/*
Let's take an example to make it more easy to understand
chunk([1, 2, 3, 4], 2);
1st call - chunk([1,2 3,4], 2) = [[1,2]].concat(chunk([3,4], 2));
2nd call - chunk([3, 4], 2) = [[3 ,4]].concat(chunk([], 2));
3rd call - chunk([], 2) = [] //base case
so basically, chunk([1, 2, 3, 4], 2) = [[1,2]].concat([[3 ,4]].concat([])) = [[1,2], [3, 4]]
*/

let result = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3);
console.log(result);