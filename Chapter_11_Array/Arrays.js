//creating arrays
let browser = ["Chrome", "fifefox", "edge"]

//array constructor

let score = new Array(3); //constructor
let score1 = new Array(1, 2, 3);
console.log(score);
console.log(score1);

let test = Array.of(10, 20, 30);
console.log(test);

//array.from()
let num = Array.from("hello")//output [ 'h', 'e', 'l', 'l', 'o' ]
console.log(num)
//array.from()
let num1 = Array.from("1234")//output [ 'h', 'e', 'l', 'l', 'o' ]
console.log(num1)//output [ '1', '2', '3', '4' ]