//Hoisting & Temporal Dead Zone(TDZ)

console.log(greeting); //hoisted but not initialized, so it's undefined
var greeting = "Hello, world!";
console.log(greeting); //Hello, world!



function sayHello() {

    console.log(status_code);//hoisted but not initialized, so it's undefined
    var status_code = 200;
    console.log(status_code);
}