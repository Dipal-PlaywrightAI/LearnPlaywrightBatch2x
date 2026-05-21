/* ===== DEFINITIONS ===== 
 * 
 * UNDEFINED:
 * - A variable that has been declared but has not been assigned a value
 * - It is the default return value of a function if no return statement is provided
 * - JavaScript automatically assigns "undefined" when something is missing
 * 
 * NULL:
 * - A value that represents the intentional absence of any object value
 * - It is explicitly assigned by the programmer to indicate "no value"
 * - It is an assignment value that represents "nothing" or "empty"
 * 
 * ===== COMPARISON TABLE =====
 * 
 * | Feature          | undefined         | null              |
 * |------------------|-------------------|-------------------|
 * | Meaning          | Not assigned      | No value (empty)  |
 * | Assigned by      | JavaScript        | Programmer        |
 * | typeof result    | "undefined"       | "object"          |
 * | Loose equality   | undefined == null | true              |
 * | Strict equality  | undefined === null| false             |
 * | Common use       | Missing variables | Intentional empty  |
 * 
 */

// ===== UNDEFINED =====
// 1. Variable declared but not assigned
let x;
console.log(x);  // undefined (JavaScript doesn't know what to put here)

// 2. Function with no return value
function test() {
    // no return statement
}
console.log(test());  // undefined

// 3. Function parameter not provided
function greet(name) {
    console.log(name);  // undefined if no argument passed
}
greet();  // undefined


// ===== NULL =====
// 1. You manually set it to null
let y = null;
console.log(y);  // null (YOU said it's empty)

// 2. Intentionally empty value
let user = null;  // Means: there is no user
console.log(user);  // null


// ===== KEY DIFFERENCES =====
console.log("=== KEY DIFFERENCES ===");

// Type check
console.log(typeof undefined);  // "undefined"
console.log(typeof null);       // "object" (quirk in JS!)

// Equality
console.log(undefined == null);   // true (loose equality)
console.log(undefined === null);  // false (strict equality)

// Simple comparison
console.log(undefined > 0);  // false
console.log(null > 0);       // false


// ===== REAL WORLD EXAMPLE =====
function findUser(userId) {
    let userFound = false;

    // User not found
    if (!userFound) {
        return null;  // Intentionally empty - we searched but found nothing
    }
}

let result = findUser(123);
console.log(result);  // null (we returned it on purpose)

// Variable not initialized yet
let cachedUser;
console.log(cachedUser);  // undefined (not set yet)
