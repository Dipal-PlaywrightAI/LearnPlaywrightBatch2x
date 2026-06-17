let testrun = new Promise(function (resolve, reject) {
    reject("assertion failed");
})

testrun.then(function (data) {
    console.log("data")
}).catch(function (error) {
    console.log("error")
}).finally(function () {
    //this is executed
    console.log("finally execute ")
})