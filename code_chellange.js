function foo() {
  let a = b = 0;
  a++;
  console.log(a)
  return a;
}

foo();
console.log(typeof a); // => undefined
console.log(typeof b); // => number
//--------------------------------------------------------------------
const clothes = ['jacket', 't-shirt'];
clothes.length = 0; // the length set zero so the output is undefined
console.log(clothes[0]) // => undefined 
//--------------------------------------------------------------------                                                                                                                                                                    

const length = 4;
const numbers = [];
for (var i = 0; i < length; i++);{
  numbers.push(i + 1); // i is 4 and + 1 is 5
}

console.log(numbers); // => [5]
