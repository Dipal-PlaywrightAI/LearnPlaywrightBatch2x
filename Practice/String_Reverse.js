// String Reverse | Palindrome Program

// Given a string, Reverse it and print true if they are same.

// Madam is palindrome, pramod is not


// Approach 1 without built in function reverse
//Q1 Check whether a given string is Palindrome or not.

let a = "Madam";
let rev = "";

let len = a.length;

for (let i = len - 1; i >= 0; i--) {
    rev = rev + a[i];

}
console.log(rev);

if (rev.toLowerCase === a.toLowerCase) {
    console.log("String is Palindrome")
} else {
    console.log("String is not Palindrome")
}

// Approach 2 using functions with built in reverse function 

function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');

    console.log("Original String is :", str);
    console.log("Reversed String is :", reversed);

    return str === reversed;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("venkat"));

//Approach 3 Using Arrow function
const isPalindrome = str => {
    let reversed = str.split('').reverse().join('');

    console.log("Original String is :", str);
    console.log("Reversed String is :", reversed);

    return str === reversed;

}

console.log(isPalindrome("madam"));
console.log(isPalindrome("venkat"));