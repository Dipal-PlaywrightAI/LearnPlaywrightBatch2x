console.log("Test1:Started");//executed 1st

setTimeout(function () {//async
    console.log("Test2: API Respose is received")//executed 3rd
}, 5000);

console.log("Test 3: moving to next test");//executed 2nd
