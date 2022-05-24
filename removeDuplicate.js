const arr = ["a", "b", "d", "a", "c", "b", "1", 1]
// const arr = ["a", "b", "d", "a", "c", "b"]
const result = []

for (i=0; i < arr.length; i++) {
  if(result.indexOf(arr[i].toString()) === -1) {
    result.push(arr[i])
  }
  // if(result.indexOf(arr[i]) === -1) {
  //   result.push(arr[i])
  // }
  // if(!result.includes(arr[i])) {
  //   result.push(arr[i])
  // }
}

console.log("Result:", result)