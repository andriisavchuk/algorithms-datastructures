/*
  Write a program that console logs the number from 1 to n. But for multiples
  of three print "fizz" instead of the number and for the multiples of five print
  "buzz". For number multiples of both three and five print "fizzbuzz"

  Example:
   fizzBuzz(5);
   1
   2
   fizz
   4
   buzz
*/

const FizzBuzz = () => {
  function fizzBuzz(n) {
    // for (let i = 1; i <= n; i++) {
    //   if ((i % 3 === 0) && (i % 5 === 0)) {
    //     console.log('FizzBuzz');
    //   } else if (i % 3 === 0) {
    //     console.log('Fizz');
    //   } else if (i % 5 === 0) {
    //     console.log('Buzz');
    //   } else {
    //     console.log(i);
    //   }
    // }

    for (let i = 1; i <= n; i++) {
      if (i % 15 === 0) console.log('FizzBuzz')
      else if (i % 3 === 0) console.log('Fizz')
      else if (i % 5 === 0) console.log('Buzz')
      else console.log(i)
    }
  }

  fizzBuzz(50)

  /* 2-nd solution */

  //
  // function isFizz(n) {
  //   return n % 3 === 0
  // }
  //
  // function isBuzz(n) {
  //   return n % 5 === 0
  // }
  //
  // function isFizzBuzz(n) {
  //   return n % 3 === 0 && n % 5 === 0
  // }
  //
  // for (let i = 0; i < 100; i++) {
  //   switch (true) {
  //     case isFizzBuzz(i):
  //       console.log('FizzBuzz')
  //       break
  //     case isFizz(i):
  //       console.log('Fizz')
  //       break
  //     case isBuzz(i):
  //       console.log('Buzz')
  //       break
  //     default:
  //       console.log(i)
  //   }
  // }

  /* 3-rd solution, declarative(functional) */

  // const gen = (n, w) => (num) => (num % n === 0 ? w : '')
  // const fizz = gen(3, 'Fizz')
  // const buzz = gen(5, 'Buzz')
  //
  // console.log(
  //     [...Array(99).keys()]
  //         .map((i) => i + 1)
  //         .forEach((i) => console.log(fizz(i) + buzz(i) || i))
  // )

  return `
    <div class="card">
      <h2>FizzBuzz</h2>
    </div>
  `
}

export default FizzBuzz
