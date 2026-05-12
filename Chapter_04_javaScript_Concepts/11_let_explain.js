/*`let` -> the modern way for changing values
`let` is **block-scoped** (lives only inside `{ }`), can be **reassigned**, but **cannot be redeclared** in the same scope. It is **hoisted** but not initialized, so accessing it before declaration throws a `ReferenceError`.

Use `let` when the value will genuinely change -> counters, retry attempts, current page URL, etc.
*/
let a = 10;
console.log("value of a in global scope " + a);

function print() {
    let a = 20; //reassignment is possible and redeclaration is possible bcz it in diffrent scope
    console.log("value of a in print function " + a);
}
print();

console.log("value of a in global scope " + a);

function string123() {
    let temp = "hello";
    console.log("value of temp in string123 function " + temp);
    //let temp = "hi"; redeclaration is not possible in same scope
    console.log("value of temp in string123 function " + temp);
}
string123();