let c = { status: "Pass" };
let d = { status: "Pass" };
//both are not pointing the same referance
console.log(c);
console.log(d);

if (c === d) {
    console.log("true")
} else {
    console.log("false")
}
