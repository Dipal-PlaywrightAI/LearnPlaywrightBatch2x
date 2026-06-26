# Chapter 04 - Variables And Hoisting

This chapter focuses on `var`, `let`, `const`, scope behavior, and hoisting. The practicals compare how JavaScript treats different declarations.

## Practical Files

| File | Practical | What happens |
| --- | --- | --- |
| `09_var_let_Const.js` | Declaration comparison | Compares `var`, `let`, and `const`. |
| `10_var_explain.js` | `var` | Shows function/global scope and redeclaration behavior. |
| `11_let_explain.js` | `let` | Shows block scope and reassignment behavior. |
| `12_const_explain.js` | `const` | Shows constant binding and where mutation is still possible. |
| `13_hosting_var.js` | `var` hoisting | Demonstrates how `var` is hoisted as `undefined`. |
| `14_hoisting_let_const.js` | `let`/`const` hoisting | Demonstrates temporal dead zone behavior. |
| `15_hoisting_let_function_block.js` | Function/block hoisting | Compares function and block-level behavior. |
| `16_hoisting_practice.js` | Hoisting practice | Mixed examples for interview-style understanding. |

## Concepts Covered

- `var`, `let`, and `const`
- Reassignment and redeclaration
- Block scope and function scope
- Hoisting
- Temporal dead zone

## How To Run

```bash
node Chapter_04_javaScript_Concepts/09_var_let_Const.js
node Chapter_04_javaScript_Concepts/16_hoisting_practice.js
```

## Takeaway

Use `let` when values change, `const` by default when they do not, and understand hoisting so output and errors make sense.
