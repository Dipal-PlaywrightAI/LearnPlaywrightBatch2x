function functioncafe(item, callwhenTableReady) {
    console.log("finding table1")
    console.log("finding table2")
    console.log("finding table3")
    callwhenTableReady();
}

function callwhenTableReady() {
    console.log("call on this number3423234234234")
}
//use arrow function to as callback function 
functioncafe("tea", () => {
    callwhenTableReady();
});