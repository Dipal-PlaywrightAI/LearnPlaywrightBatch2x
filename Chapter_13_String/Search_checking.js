//searching and checking
let url = "https://www.starbucks.co.uk/account/create";

//include
console.log(url.includes("www"))//true
console.log(url.includes("star123"))//false

//startwith/endwith
url.startsWith("https");//true
url.endsWith("https")//false

//indexof//lastindex of
console.log(url.indexOf('s'));//it start to find index of s from start 
console.log(url.lastIndexOf('a'))//it start from the end to search character index
console.log(url.indexOf("nowher"))//it return -1 bcz it is not exist here

//searching
console.log(url.search(/star/));//regex
console.log(url.search(/login/));