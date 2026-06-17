var a = 10;
console.log("value of a in first time " + a);//global scope

function printName() {
    var a = 20;//local scope
    console.log("value of a in printName " + a);
    if (true) {
        var a = 30;//local scope
        console.log("value of a in if block " + a);
    }
    console.log("value of a after if block " + a);
}
printName();
console.log("value of a in global scope " + a);
// when you are using var it always take the last value of the variable in the function or block scope. var is function scoped and not block scoped.

//`var` was the original keyword in JavaScript. It is **function-scoped**, can be **redeclared**, can be **reassigned**, and gets **hoisted** to the top of its scope with an initial value of `undefined`.

//In modern automation code, we avoid `var` because it leaks out of `if` and `for` blocks, which causes confusing bugs in test loops.

