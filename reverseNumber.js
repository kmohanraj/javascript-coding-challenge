const reverseNumber = (num) => {
  let lastDigit, result = 0;
  while(num != 0) {
    lastDigit = num % 10;
    result = (result * 10) + lastDigit
    num = num/10 | 0
  }
  return result;
}

console.log(reverseNumber(123))
// => 321
console.log(reverseNumber(-123))
// => -321
console.log(reverseNumber(120))
// => 21