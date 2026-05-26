let scores = [34, 56, 45, 87, 90]

// map will always return the same number of elements that you have,
// but based on the condition, their values will be changed.
// map - transform every element, return a new array

let grades = scores.map(s => s < 70 ? "fail" : "pass")
console.log(grades);

// filter - keeps elements that pass a test
let passing = scores.filter(s => s > 70)
console.log(passing);

// reduce - accumulates to a single value
let total = scores.reduce((a, b) => a + b, 0);
console.log(total);

// flat - flattens nested arrays
let nested = [[1, 2], [3, 4], [5, 6]]
console.log(nested)
