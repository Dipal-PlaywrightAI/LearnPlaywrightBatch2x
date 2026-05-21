//hoisting with let
console.log(a);//hoisted and gives reference error
let a = 10;

//hoisting with const
console.log(b);//hoisted and gives reference error
const b = 20;

//hoisting with block using let
{
    console.log("apple");
    console.log(b);//hoisted and gives reference error and stop execution
    let b = 30;//not printed
    console.log("hi");//not printed
}

