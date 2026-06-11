//this is higher order funcation
// setTimeout(function,time); this is deafual fucation and its asynchronous in nature


console.log("first task")
setTimeout(() => {
    console.log("Async task")
}, 7000);

setTimeout(() => {
    console.log("finsh 1st task")
}, 4000)

//its print first task,finsh 1st task,Async task