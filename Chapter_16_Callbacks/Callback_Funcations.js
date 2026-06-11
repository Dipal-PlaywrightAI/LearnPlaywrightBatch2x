
//callback funcation
function placeorder(clipboard, callback) {//higher order function
    console.log("hi,your order is palced")
    callback();
}

function print() {//callback funcation
    console.log("normal function")
}

placeorder("burger", print);

console.log("----second way----")
placeorder("burger", function () {
    console.log("i am funcation without name")
});

console.log("----third way----")
placeorder("pizza", () => {
    console.log("arrow function way")
})