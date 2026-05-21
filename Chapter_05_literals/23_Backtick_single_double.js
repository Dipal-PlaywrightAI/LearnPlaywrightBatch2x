// Backtick vs Single vs Double strings in JavaScript

/*
  Feature              |  '' or ""  |  ``
  ---------------------|------------|------------
  Simple text          |     ✓      |   ✓
  Variable injection   |     ✗      |   ✓  -> ${var}
  Multi-line           |     ✗      |   ✓
  Expression inside    |     ✗      |   ✓  -> ${a + b}
*/

let single = 'Hello';
let double = "Hello";
let backtick = `Hello`;

console.log(single);
console.log(double);
console.log(backtick);