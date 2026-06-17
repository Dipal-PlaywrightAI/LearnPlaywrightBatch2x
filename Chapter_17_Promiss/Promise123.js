


let order = new Promise(function (resolve, reject) {
    let foodready = true;
    if (foodready) {
        resolve("pizza is ready");
    } else {
        reject("pizza is not ready");
    }
});

console.log(order);