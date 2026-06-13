function print() {
    console.log("Normal Function is called");
}

function placeOrder(ClipboardItem, callback) {
    console.log("Hi, You order is placed");
    callback();
    console.log("ello123")
}

// Third Way - Arrow Fn     
placeOrder("Momos", print);


