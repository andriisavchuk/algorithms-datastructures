/*
  Fibonacci Sequence. The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
  The next number is found by adding up the two numbers before it.
*/

function fibonacci(n) {
  let fibArray = [0, 1];

  for (let i = 2; i <= n; i++) {
    let a = fibArray[i - 1];
    let b = fibArray[i - 2];

    fibArray.push(a + b);
  }

  console.log(fibArray[n]);
  return fibArray;
}

const result = fibonacci(10);
console.log(result);

/* Recursive solution. O(2 ^ n) an exponential runtime complexity */

// Sum on numbers in Fibonacci sequence
function fibRecursive(n) {
  if (n < 2) {
    return 2;
  }

  return fibRecursive(n - 1) + fibRecursive(n - 2);
}

const result2 = fibRecursive(10);
console.log(result2);

// Number in a specific position of Fibonacci sequence. 0 included
function fibonacciNumber(position) {
  if (position < 3) return 1;
  else return fibonacciNumber(position - 1) + fibonacciNumber(position - 2);
}

const result3 = fibonacciNumber(10);
console.log(result3);

/* Improved recursive algorithm with memoization method
  index - position of the number in sequence
  cache array used as memory to store calculated number in a position

  - check if number is already exist in cache
  - if is - use that number
  - if not - calculate and save to cache
*/

function memoizeFibonacci(index, cache) {
  cache = cache || [];
  //check if number is already exist in cache
  if (cache[index]) {
    return cache[index];
  } else {
    if (index < 3) return 1;
    else {
      cache[index] =
        memoizeFibonacci(index - 1, cache) + memoizeFibonacci(index - 2, cache);
    }
  }

  return cache[index];
}

const result4 = memoizeFibonacci(10);
console.log(result4);
