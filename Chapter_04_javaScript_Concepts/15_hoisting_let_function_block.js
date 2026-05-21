let a = 10;
console.log("type of a =" + typeof a);

//hoisting with function using let
function test() {
    console.log("apple");//printed
    console.log(b);//hoisted and gives reference error and stop execution
    let b = 30;//not printed
    console.log("hi");//not printed
} test();

//hoisting with block using let
{
    console.log("apple");//printed
    console.log(b);//hoisted and gives reference error and stop execution
    let b = 30;//not printed
    console.log("hi");//not printed
}