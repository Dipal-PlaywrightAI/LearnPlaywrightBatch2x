//execution one by one line by line

let testresults = ["pass", "fail", "Skip", "error"]

for (let i = 0; i < testresults.length; i++) {
    console.log(testresults[i]);
}
// This is a perfect example of a synchronous callback where
//  the anonymous function will take the item 1 by 1,
//  it will take the index 1 by 1, it will take
//  the result 1 by 1, and print the value 1 by 1.