let results = ["pass", "Fail", "pass", "Skip", "error"]
//indexof - return first index,or -1 if not found
results.indexOf("Fail")
console.log(results.indexOf("Fail"))//1
results.indexOf("pass")
console.log(results.indexOf("pass"))//0
results.indexOf("block")
console.log(results.indexOf("block"))// -1 bcz element is not there

//lastINdexOf - searchs from the end
console.log(results.lastIndexOf("pass"))

//inclues-returns booleanvalue
results.includes("error")//true

//find- return first matching element

let num = [10, 121, 45, 67]
let result = num.find(x => x > 10);//why ony 121 returnnig why not [121,45,67]??
console.log(result)
console.log(num.findIndex(x => x > 10))
console.log(num.findLast(x => x > 10))
console.log(num.findLastIndex(x => x > 10))
