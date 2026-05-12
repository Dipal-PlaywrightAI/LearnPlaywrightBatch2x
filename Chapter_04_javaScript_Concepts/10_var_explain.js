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
