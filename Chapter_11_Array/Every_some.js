//every and some
//if condition is satified with all elements then return true
let number = [1, 5, 4, 8, 6]
let n = number.every(s => (s > 6));
console.log(n)//faluse

//playwright API
[200, 505, 345].every(s => (s > 200));//faluse

//some -at least one must pass
[80, 60, 85].some(s => (s > 70));//true
[80, 98, 85].some(s => (s < 70));//false