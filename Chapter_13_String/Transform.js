let str = " Hello, World! ";
console.log("Uppercase: " + str.toUpperCase());
console.log("Lowercase" + str.toLowerCase());
console.log("Trim the String" + str.trim())
console.log("Trim from start: " + str.trimStart())
console.log("Trim from End : " + str.trimEnd())

let msg = "Test: FAIL. REtry: FAIL.";
console.log(msg.replace("FAIL", "PASS"))//its replace only first one
console.log(msg.replaceAll("FAIL", "HAppy"))
console.log(msg.replace(/HAppy/g, "PASS"))
//Note: Each console.log operates on the original msg string, not the result of the previous operation.

//concatenation
"Hello" + "" + "World";
"HEllo".concat(" ", "World");
`${"Hello"} ${"World"}`;

let url = "https://www.starbucks.co.uk/account/create";
console.log(url.replace(/www/g, "QA"))

let r = "pass,fail,skip".split(",");
console.log(r);

let rrr = "pass_fail_skip".split("_").join(" ");
console.log(rrr)

let parts = ["2024", "2025"]
let date = parts.join("-")
console.log(date);