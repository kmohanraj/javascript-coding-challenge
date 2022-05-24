// const isPalindrome = (str) => {
//   const reversed = str.split('').reverse().join('');
//   return str === reversed
// }

// console.log(isPalindrome('malayalam'))

const isPalindrome = (str) => {
  let i = 0;
  let j = str.length - 1;
  while(i < j) {
    if(str[i] == str[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome('malayalam'))