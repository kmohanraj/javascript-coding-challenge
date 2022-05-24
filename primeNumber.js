const isPrime = (num) => {
  if(num < 2) {
    return `${num} is not prime`
  }
  for(let i = 2; i<num; i++) {
    if(num % i === 0) {
      return `${num} is not prime`
    }
  }
  return `${num} is prime`
}

const temp = [...new Array(50).keys()]
console.log(isPrime(5))
// temp.forEach((x) => console.log(isPrime(x)))
