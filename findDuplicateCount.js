function findDuplicate(arr) {
  const counts = {}
  arr.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1
  })
  return counts
}
const list = ["a", "b", "c", "a", "d", "c"]
const a = ['a', 1, 'a', 2, '1']; 
console.log(findDuplicate(list))
console.log(findDuplicate(a))

// => { a: 2, b: 1, c: 1, d: 1 }