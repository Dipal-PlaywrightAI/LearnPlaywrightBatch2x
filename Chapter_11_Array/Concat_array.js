let a = [1, 2]
let b = [4, 5]
let c = a.concat(b)
console.log(c)


//spread concatenation
let d = [...a, ...b]
console.log(d)

//join method
let A = [23, 45, 34, 67]
let C = A.join("|");
console.log(C)