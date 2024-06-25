let arr = [1, 2, 3, 4, 5]

console.log(arr)
console.log(typeof arr)
console.log(arr.length)

arr.pop()   // removing last element
console.log(arr)

arr.push(500)   // adding at last 
console.log(arr)

arr.shift() // removing first element
console.log(arr)

arr.unshift("tyson")    // adding at first
console.log(arr)


delete arr[3]
console.log(arr)
