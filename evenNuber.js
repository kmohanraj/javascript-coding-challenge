const a = [1,2,3,4,5,6,7,8]
const odd = []
const even = []
a.filter((x) => x % 2 === 0  ? even.push(x) : odd.push(x))
console.log(odd, even)

// => [ 1, 3, 5, 7 ] [ 2, 4, 6, 8 ]