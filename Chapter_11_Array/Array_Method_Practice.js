//find the index of element using indexof
//here saying that u need to find  DOG BUT STARING INDEX IS -2
//if value exist return index of the value
//if value dont not exist then return -1
//start from left to right
//case sensitive
const aniamls = ["dog", "cat", "Lion", "Pig", "dog"]

console.log(aniamls.indexOf("dog", -2))
//if value exist return index of the value
//if value dont not exist then return -1
//start from right to left
//case sensitive
console.log(aniamls.lastIndexOf("dog"))

//tostring method
//convert the array into string
const arr = [3, 6, 5, 8, 9]
console.log(arr.toString());

//join mthod
const arrwithjoin = aniamls.join(" is an aniamls , ");
console.log(arrwithjoin)

//flat method
//default value of flat is 1
//not change existing array
const number = [1, 2, 3, 4, [2, 3], [5, 6, [34, 67, [23]]]]
const flatarr = number.flat(3);
//here flat(3) is used for level of nesting 
console.log(flatarr)

//concat method
console.log("--concatination--")
const arr1 = [23, 56, 45, 67]
const arr2 = [60, 90, 12, 5]
const concatarr = arr1.concat(arr2);
console.log(concatarr)

//reverse method 
//existing array will be change
const mix = ["wer", 56, "#", true, [4, 5]]
console.log(typeof (mix[3]))
console.log(mix.reverse())

//slice the array
//start ,end-1 
const slicearr = [45, 76, "apple", "banana", 42, "qwe", 34]
const newarray = slicearr.slice(2, 5);
const negindexarr = slicearr.slice(-5, -2)
console.log("negindexarr : " + negindexarr)
console.log("newarray : " + newarray)
console.log("slicearra:" + slicearr)
console.log("----------")
//spice
const sp_arr = [45, 67, 12, 45, 64, 98, 90]
console.log("array after splicing: " + sp_arr.splice(1, 2, 54, 34))
console.log("main array  " + sp_arr)
//adding something
const addarr = sp_arr.splice(2, 0, 6);
console.log(addarr);//showing blank bcz u dident remove anything
console.log("original array :  " + sp_arr)
//remove something not to add
const removearr = sp_arr.splice(2, 2,);
console.log("REmove Element : " + removearr)
console.log("original array :  " + sp_arr)

//find
const num = [54, 2, 76, 89, 12]
const findnum = num.find(n => n > 70);
console.log("findnum: " + findnum)

const findnumIndex = num.findIndex(n => n > 70);
console.log("findnumIndex: " + findnumIndex)

const findnumLast = num.findLast(n => n > 70);
const findnumLastIndex = num.findLastIndex(n => n > 70);

console.log("findnumIndex: " + findnumLast + " and " + " findnumLastIndex: " + findnumLastIndex)

//map
let scores = [45, 34, 23, 78, 65, 87]

let grads = scores.map(s => s > 70 ? "Pass" : "Fail")
console.log(grads)

//filter
let grads1 = scores.filter(s => s > 70)
console.log(grads1)

//reduce
let sum = scores.reduce((sum, s) => sum + s, 0)
console.log("sum:" + sum)