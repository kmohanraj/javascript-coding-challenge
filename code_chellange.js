//1--------------------------------------------------------------------  
function foo() {
  let a = b = 0;
  a++;
  console.log(a)
  return a;
}

foo();
console.log(typeof a); // => undefined
console.log(typeof b); // => number

//2--------------------------------------------------------------------
const clothes = ['jacket', 't-shirt'];
clothes.length = 0; // the length set zero so the output is undefined
console.log(clothes[0]) // => undefined 

//3--------------------------------------------------------------------                                                                                                                                                                    
const length = 4;
const numbers = [];
for (var i = 0; i < length; i++);{
  numbers.push(i + 1); // i is 4 and + 1 is 5
}

console.log(numbers); // => [5]
//-------------------------------------------------------------------- 
//4. bject                                                                                                                                                                    
obj1 = {a: 10}
const obj2 = obj1
obj2.a = 20;
console.log(obj1)  // => {a: 20}
console.log(obj2)  // => {a: 20}
let obj1 // it will not throw error 
// -------------------------------------------------------------------- 
//4.1 Object with destructure

obj1 = {a: 10}
const obj2 = {...obj1}
obj2.a = 20;
console.log(obj1) // => {a: 20}
console.log(obj2) // => {a: 20}
// let obj1 // it will not throw error 

//5--------------------------------------------------------------------      
null === undefined
console.log(null === undefined) // => return false

//--------------------------------------------------------------------      
//6.Explain the MUL() function in JavaScript 

function mul(x) {
  return function(y) {
    return function(z) {
      return x*y*z
    }
  }
}

console.log(mul(2)(3)(4)) // => 24
console.log(mul(2)(3)(5)) // => 30
// explanation 2x3 => 6x4 => 24
//--------------------------------------------------------------------      
//6.5) Infinite currying

function add(a) {
    return function (b) {
        if(b) return add(a+b);
        return a;
    }
}
console.log(add(5)(2)(4)(2)(4)())

// -------------------------------------------------------------------- 
//6.1 Explain the MUL() in Arrow function

const mul = (x) => {
  return (y) => {
    return (z) => {
      return x*y*z
    }
  }
}

console.log(mul(2)(3)(4)) // => 24
console.log(mul(2)(3)(4)) // => 30

//--------------------------------------------------------------------      
let a = 2;
console.log(a *= 3);
// expected output: 6
console.log(a *= 'hello');
// expected output: NaN

//--------------------------------------------------------------------      
// 7. Find specific number length 

// ex: 1
const arr = [1,0,0,0,1,1,0,1,0,1] 
const checkLength = arr.filter((num) => num === 1)
console.log(checkLength.length)   // => 5

// ex: 2
const checkLength2 = arr.filter((num) => {
 return num === 1
})
console.log(checkLength2.length)   // => 5
//--------------------------------------------------------------------      
// 8. Find specific number based length 

// ex: 3
const findLength = (num) => {
  return arr.filter((val) => val === num)
}
console.log(findLength(1).length) // => 5
//--------------------------------------------------------------------      
console.log(0)
setTimeout(() => console.log(1), 100)
setTimeout(() => console.log(2), 0)
console.log(3)

// OutPut:
// 0
// 3
// 2
// 1

//--------------------------------------------------------------------      

function x() {
  setTimeout(function () {
    console.log(i)
  }, 1000)
  var i = 23;
}
x();

// Output: 
// 23

//--------------important------------------------------------------------------xxxxxxxxxxxxxx      
// Implement this code calc.add(10).multiply(5).substract(30).add(10)
const calc = {
  total: 0,
  add(a) {
    this.total += a;
    return this;
  },
  multiply(a) {
    this.total *= a;
    return this;
  },
  substract(a) {
    this.total -= a;
    return this;
  }
}
const result = calc.add(10).multiply(5).substract(30).add(10)
console.log(result.total)

//--------------important------------------------------------------------------xxxxxxxxxxxxxx      
function abc() {
  console.log(a,b,c)
  const a = 1;
  let b = 2;
  var c = 3;
}
abc()

//--------------important------------------------------------------------------xxxxxxxxxxxxxx      
console.log('1')
setTimeout(() => console.log("set"), 0);
Promise.resolve(() => console.log('promise')).then((res) =>  res());
console.log('3')

// output:
// 1
// 3
// promise
// set

//--------------important------------------------------------------------------xxxxxxxxxxxxxx      
