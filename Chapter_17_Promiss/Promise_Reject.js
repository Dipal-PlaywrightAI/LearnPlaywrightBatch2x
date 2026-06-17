let apicall = new Promise(function (resolve, reject) {
    reject("500 error")
})

apicall.then(function (data) {
    console.log("sucessfully resolve")
}).catch(function (error) {
    console.log("error")
})