let order = new Promise(function (resove, reject) {
    let order_status = true;
    if (order_status) {
        resove("order is diliver")
    }
    else {
        reject("order is rejected")
    }
})
console.log(order)
order.then(console.log("giving positive rating "))
order.catch(console.log("negetiverating"))