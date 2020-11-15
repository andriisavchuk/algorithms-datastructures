/*
 Math.sign() - function returns the sign of a number,
 indicating whether number is positive, negative or zero.
*/

const ReverseNumber = () => {
  function reverseInteger(n) {
    const reversedNumber = n.toString().split('').reverse().join('')

    // if (n < 0) {
    //   return parseInt(reversedNumber) * -1;
    // }

    return parseInt(reversedNumber) * Math.sign(n)
  }

  const result = reverseInteger(-5132)
  console.log(result)

  return `
    <div class="card">
      <h2>Reverse Number</h2>
    </div>
  `
}

export default ReverseNumber
