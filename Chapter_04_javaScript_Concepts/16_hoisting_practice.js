let a = 10;
console.log(a);//printed

{

    console.log(a); //erro reference error because of TDZ and stop execution
    console.log("hello"); //not printed
    let a = 100;
    console.log("hello123");//not printed

}

console.log("afterblock");//not printed because of TDZ and stop execution


//hoisting is working same for const and let because of TDZ. TDZ is a behavior in JavaScript where variables declared with let and const are not accessible before their declaration, even though they are hoisted to the top of their scope. This means that if you try to access a variable declared with let or const before it is declared, you will get a ReferenceError.