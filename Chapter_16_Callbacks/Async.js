console.log("Test1:Started");//executed 1st

setTimeout(function () {//async
    console.log("Test2: API Respose is received")//executed 4rd
}, 5000);

setTimeout(function () {//async
    console.log("cdfsdfs")//executed 3rd
}, 3400);
setTimeout(function () {//async
    console.log("3434534534534534")//executed 5rd
}, 7000);

console.log("Test 3: moving to next test");//executed 2nd