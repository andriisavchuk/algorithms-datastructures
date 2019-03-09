/*
  Big O time is a language and metric we use to describe
  the efficiency of algorithms.

  Time is not the only thing that matters in an algorithm.
  We might also care about the amount of memory space required by
  an algorithm

  Space complexity is a parallel concept of time complexity. If we need
  array of size N, this will require O(N) space. If we need a two-dimensional
  array of size NxN, this will need O(N2) space.
*/

// Constant runtime example.
// Big O Notation: 'O(1)'

function log(array) {
  console.log(array[0]);
  console.log(array[1]);
}

log([1, 2, 3, 4]);
log([1, 2, 3, 4, 5, 6, 7, 8]);

// Linear runtime
// Big O Notation: 'O(n)'

function logAll(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

logAll([1, 2, 3, 4]);
logAll([1, 2, 3, 4, 5, 6]);
logAll([1, 2, 3, 4, 5, 6, 7, 8]);

// Iterating through two different collections
// with separate loops
// Big O Notation: 'O(n + m)'

function logBoth(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
  }

  for (let j = 0; j < arr2.length; j++) {
    console.log(arr2[j]);
  }
}

logBoth([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6, 7, 8]);

// Quadratic runtime
// Big O Notation: 'O(n^2)'

function addAndLog(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i] + array[j]);
    }
  }
}

addAndLog(['A', 'B', 'C']); // 9 pairs logged out
addAndLog(['A', 'B', 'C', 'D']); // 16 pairs logged out
addAndLog(['A', 'B', 'C', 'D', 'E']); // 25 pairs logged out

// Logarithmic runtime (searching in a sorted array)
// Big O Notation: 'O(log(n))'

function binarySearch(array, key) {
  let low = 0;
  let high = array.length - 1;
  let middle;
  let element;

  while (low <= high) {
    middle = Math.floor((low + high) / 2);
    element = array[middle];

    if (element < key) {
      low = middle + 1;
    } else if (element > key) {
      high = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
}

// Logarithmic runtime (sorting)
// Big O Notation: 'O(n*log(n))'








