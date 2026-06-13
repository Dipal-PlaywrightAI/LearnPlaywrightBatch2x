//Q2. Verify whether the given strings are Anagrams or not.

let s1 = "Note";
let s2 = "Toni";

if (s1.length !== s2.length) {
    console.log("The given strings length are not same can not be anagrams");
}
else {

    let str1 = s1.toLowerCase().split("").sort().join(" ");
    let str2 = s2.toLowerCase().split("").sort().join(" ");

    if (str1 === str2) {
        console.log("The given strings are Anagrams");
    } else {
        console.log("The given strings are not Anagrams")
    }

}