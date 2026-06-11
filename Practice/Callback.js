//callback is nothing but a one function
//fuation u can take as argument is called callback funcation

function hod(name, callback) {
    callback(name);
}

function printName(name) {
    console.log("hello", name)
}

hod("manas", printName)

console.log("----------------------Example 2-------------------")
function calculator(a, b, callback) {
    callback(a, b);
}

function sum(a, b) {
    console.log(a + b);
}
function sub(a, b) {
    console.log(a - b);
}
calculator(30, 23, sum)
calculator(45, 23, sub)