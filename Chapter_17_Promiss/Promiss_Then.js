let apicall = new Promise(function (resolve, reject) {
    resolve({
        status: 200,
        body: "User Data"
    });
});

apicall.then(function (response) {
    console.log(response);
}).catch(function (error) {
    console.error(error);
});