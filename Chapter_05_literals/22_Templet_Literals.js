//templet literals

let firstname = "prajapati";
let fullname = `My name is ${firstname} patel`;//template literal
console.log(fullname);

const env = "staging";
const userid = 1234;
const url = `https://${env}.example.com/user/${userid}`;
console.log(url);