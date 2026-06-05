//objects
//key and value
//key will not be in double quotes
//below key in doubut is actually JSON

let JSON_st = { "name": "Dipal", "age": 28, "phone": 43994034 }
let studen1 = { name: "amit", age: 45 };

let a = { status: "Pass" }
console.log(a.status)//fetch the key value
console.log(a["status"])//fetch the key value

let a1 = { status: "Pass" }
console.log(a1.status)
let b = a;
console.log(b.status);//pass bcz now a and b both are pointing same values with key
b.status = "FAil";
console.log(b.status)
console.log(a.status);

if (a === b) {
    console.log("true")
} else {
    console.log("false")
}

let x = 10;
console.log(x)//10
let y = x;
console.log(y)//10
y = 20;
console.log(y)//20
console.log(x)//10 bcz x and y both have saprate memory they are not pointing the same location as objects

if (x === y) {
    console.log("true")
} else {
    console.log("false")
}