let config = {}

config.browser = "Chrome";
config.timeout = 3000;
config.testname = "login testcases";

console.log(config)
delete config.browser;

console.log(config);
if (config.browser === "Chrome") {
    console.log("i will execute my testcases")
}
//another way to create object
let config2 = {
    browser = "Chrome",
    timeout = 3000,
    testname = "login testcases"
};

