/* ===== ALL NUMBER TYPE LITERALS IN JAVASCRIPT =====
 * 
 * Number literals are ways to write numbers in your code.
 * JavaScript supports several different formats for number literals.
 * 
 */

console.log("============= 1. DECIMAL LITERALS (Base 10) =============");
// Regular decimal numbers - most common way to write numbers
let decimal1 = 10;
let decimal2 = 25.5;
let decimal3 = -100;
let decimal4 = 0.001;

console.log("Decimal: ", decimal1, decimal2, decimal3, decimal4);
// Output: Decimal:  10 25.5 -100 0.001


console.log("============= 2. HEXADECIMAL LITERALS (Base 16) =============");
// Start with 0x or 0X, use digits 0-9 and letters A-F
// Useful for colors, memory addresses
let hex1 = 0xFF;      // 255 in decimal
let hex2 = 0x10;      // 16 in decimal
let hex3 = 0xABCD;    // 43981 in decimal
let hex4 = 0x00;      // 0 in decimal

console.log("Hexadecimal (displayed as decimal):", hex1, hex2, hex3, hex4);
// Output: Hexadecimal (displayed as decimal): 255 16 43981 0

// Common use: Color codes
let redColor = 0xFF0000;     // Red in RGB
let greenColor = 0x00FF00;   // Green in RGB
let blueColor = 0x0000FF;    // Blue in RGB
console.log("Color codes:", redColor, greenColor, blueColor);


console.log("============= 3. OCTAL LITERALS (Base 8) =============");
// Start with 0o or 0O, use digits 0-7
// Used in file permissions and some legacy systems
let octal1 = 0o10;     // 8 in decimal
let octal2 = 0o77;     // 63 in decimal
let octal3 = 0o755;    // 493 in decimal (common file permission)
let octal4 = 0o644;    // 420 in decimal (another file permission)

console.log("Octal (displayed as decimal):", octal1, octal2, octal3, octal4);
// Output: Octal (displayed as decimal): 8 63 493 420


console.log("============= 4. BINARY LITERALS (Base 2) =============");
// Start with 0b or 0B, use only 0 and 1
// Useful for bitwise operations and flags
let binary1 = 0b1010;      // 10 in decimal
let binary2 = 0b1111;      // 15 in decimal
let binary3 = 0b11111111;  // 255 in decimal
let binary4 = 0b10000000;  // 128 in decimal

console.log("Binary (displayed as decimal):", binary1, binary2, binary3, binary4);
// Output: Binary (displayed as decimal): 10 15 255 128

// Real world: Flag/permission bits
let canRead = 0b100;    // 4
let canWrite = 0b010;   // 2
let canExecute = 0b001; // 1
console.log("Permissions - Read:", canRead, "Write:", canWrite, "Execute:", canExecute);


console.log("============= 5. EXPONENTIAL NOTATION (Scientific) =============");
// Use e or E followed by exponent
// 1e2 = 1 × 10^2 = 100
// 1e-2 = 1 × 10^-2 = 0.01
let exp1 = 1e2;       // 100 (1 × 10^2)
let exp2 = 5e3;       // 5000 (5 × 10^3)
let exp3 = 1e-2;      // 0.01 (1 × 10^-2)
let exp4 = 2.5e-1;    // 0.25 (2.5 × 10^-1)
let exp5 = 3e5;       // 300000 (3 × 10^5)

console.log("Exponential:", exp1, exp2, exp3, exp4, exp5);
// Output: Exponential: 100 5000 0.01 0.25 300000

// Real world: Scientific calculations
let speedOfLight = 3e8;           // 300,000,000 m/s
let electronMass = 9.109e-31;     // kg
console.log("Speed of light:", speedOfLight, "m/s");
console.log("Electron mass:", electronMass, "kg");


console.log("============= 6. FLOATING POINT LITERALS =============");
// Numbers with decimal points (fractional part)
// JavaScript uses IEEE 754 64-bit floating point format
// Precision: about 15-17 significant digits

// Basic floating point numbers
let float1 = 3.14;           // Pi
let float2 = 0.5;            // Half
let float3 = -2.75;          // Negative decimal
let float4 = 123.456789;     // Multiple decimals
let float5 = 10.0;           // Integer written as float

console.log("Basic floats:", float1, float2, float3, float4, float5);
// Output: Basic floats: 3.14 0.5 -2.75 123.456789 10

// Floating point with leading/trailing zeros
let float6 = 0.123;          // Leading zero (necessary)
let float7 = 5.0;            // Trailing zero
let float8 = .5;             // Leading decimal (0 is optional)
let float9 = 5.;             // Trailing decimal (same as 5.0)

console.log("Zeros variants:", float6, float7, float8, float9);
// Output: Zeros variants: 0.123 5 0.5 5

// Very small numbers
let verySmall1 = 0.00001;    // 0.00001 = 1e-5
let verySmall2 = 0.000000001; // 0.000000001 = 1e-9

console.log("Very small numbers:", verySmall1, verySmall2);
// Output: Very small numbers: 0.00001 1e-9

// Very large floating point numbers
let veryLarge1 = 12345.6789;
let veryLarge2 = 999999.999999;

console.log("Very large floats:", veryLarge1, veryLarge2);
// Output: Very large floats: 12345.6789 999999.999999

// Floating point precision issues (Important!)
console.log("\n--- FLOATING POINT PRECISION ISSUES ---");
let a = 0.1;
let b = 0.2;
let result = a + b;
console.log("0.1 + 0.2 =", result);           // 0.30000000000000004 (NOT 0.3!)
console.log("Expected: 0.3, Got:", result);   // Shows precision issue
console.log("Are they equal? 0.1 + 0.2 === 0.3:", result === 0.3);  // false!

// Why does this happen?
// Binary representation of 0.1 and 0.2 cannot be represented exactly
// This is a known limitation of IEEE 754 floating point

// Solution: Use toFixed() or epsilon comparison
let epsilon = 0.0001;
console.log("Using epsilon: |result - 0.3| < epsilon:", Math.abs(result - 0.3) < epsilon);  // true

// Or use toFixed for rounding
console.log("Using toFixed(2):", parseFloat((a + b).toFixed(2)));  // 0.3

// Floating point with exponential notation (already covered but mentioning again)
let float10 = 1.5e2;       // 1.5 × 10^2 = 150
let float11 = 2.5e-1;      // 2.5 × 10^-1 = 0.25
let float12 = 3.14159e0;   // 3.14159 × 10^0 = 3.14159

console.log("Float + Exponential:", float10, float11, float12);
// Output: Float + Exponential: 150 0.25 3.14159

// Floating point with separators (ES2021)
let float13 = 123_456.789_012;  // 123456.789012
let float14 = 0.000_000_1;      // 0.0000001

console.log("Floats with separators:", float13, float14);
// Output: Floats with separators: 123456.789012 1e-7

console.log("\n--- IMPORTANT FLOATING POINT NOTES ---");
console.log("1. JavaScript only has ONE number type (except BigInt)");
console.log("2. Integers and floats are both stored as 64-bit IEEE 754 floats");
console.log("3. Max safe integer: " + Number.MAX_SAFE_INTEGER + " (2^53 - 1)");
console.log("4. Min safe integer: " + Number.MIN_SAFE_INTEGER + " (-(2^53 - 1))");
console.log("5. Precision issues may occur with decimal arithmetic");
console.log("6. Always be careful with floating point comparisons");
console.log("7. Use toFixed(), toPrecision(), or epsilon for comparisons");


console.log("\n============= 7. BIG INTEGER LITERALS =============");
// Add 'n' suffix for BigInt
// Used for very large numbers beyond JavaScript's safe integer limit
// Number.MAX_SAFE_INTEGER = 9007199254740991
let bigInt1 = 123456789012345678901234567890n;
let bigInt2 = 999999999999999999999n;
let bigInt3 = 100n;

console.log("BigInt:", bigInt1);
console.log("BigInt:", bigInt2);
console.log("BigInt:", bigInt3);

// Regular number loses precision with very large numbers
console.log("Regular number (loses precision):", 123456789012345678901234567890);
console.log("BigInt (keeps precision):", 123456789012345678901234567890n);


console.log("============= 8. SPECIAL NUMBER VALUES =============");
// Infinity
let infinity = Infinity;
let negInfinity = -Infinity;
console.log("Infinity:", infinity);
console.log("-Infinity:", negInfinity);

// When you get Infinity
console.log("1 / 0 =", 1 / 0);        // Infinity
console.log("-1 / 0 =", -1 / 0);      // -Infinity
console.log("Math.pow(10, 308) =", Math.pow(10, 308));  // Infinity

// NaN (Not a Number)
let notANumber = NaN;
console.log("NaN:", notANumber);

// When you get NaN
console.log("0 / 0 =", 0 / 0);                    // NaN
console.log("parseInt('hello') =", parseInt('hello'));  // NaN
console.log("undefined + 5 =", undefined + 5);    // NaN


console.log("============= 9. NUMBERS WITH SEPARATORS =============");
// Added in ES2021 - underscores for readability (ignored by JS)
let number1 = 1_000_000;        // 1000000 (one million)
let number2 = 50_000_000;       // 50000000
let number3 = 0xFF_FF_FF;       // 16777215 (hex)
let number4 = 0b1111_0000;      // 240 (binary)

console.log("Numbers with separators:", number1, number2, number3, number4);
// Output: Numbers with separators: 1000000 50000000 16777215 240


console.log("============= SUMMARY TABLE =============");
console.log(`
| Type              | Example        | Explanation                |
|-------------------|----------------|-----------------------------|
| Decimal           | 42, 3.14       | Base 10 (normal)            |
| Floating Point    | 3.14, 0.5      | Numbers with decimal points |
| Hexadecimal       | 0xFF           | Base 16 (0x prefix)         |
| Octal             | 0o755          | Base 8 (0o prefix)          |
| Binary            | 0b1010         | Base 2 (0b prefix)          |
| Exponential       | 1e5, 2.5e-3    | Scientific notation         |
| BigInt            | 123n           | Large numbers (n suffix)    |
| Infinity          | Infinity       | Positive/negative infinity  |
| NaN               | NaN            | Not a number                |
| With Separators   | 1_000_000      | Readability (ES2021)        |
`);


console.log("============= KEY POINTS =============");
console.log("1. All these literals are ultimately stored as JavaScript 'Number' type");
console.log("2. Except BigInt - it is a separate type for very large integers");
console.log("3. The base (hex, octal, binary) doesn't affect how they're stored - just how you write them");
console.log("4. Floating point numbers may have precision issues due to IEEE 754 format");
console.log("5. Use the format that's most readable for your use case");
console.log("6. Underscores make large numbers easier to read");
console.log("7. Always be careful with floating point arithmetic comparisons");
