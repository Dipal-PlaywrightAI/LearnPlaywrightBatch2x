# Chapter 16 - Callbacks

This chapter introduces callback functions and asynchronous flow. The examples progress from simple callbacks to callback parameters, return behavior, callback hell, and Playwright-style callback thinking.

## Practical Files

| File | Practical | What happens |
| --- | --- | --- |
| `Callback_Funcations.js`, `CB.js`, `CB.function.js` | Callback basics | Passes functions as arguments. |
| `CB_Parameter.js` | Callback parameters | Sends values into callback functions. |
| `CB_Return.js` | Return behavior | Shows how callback return values behave. |
| `Sync_callback.js` | Synchronous callback | Runs callbacks immediately in order. |
| `Async.js`, `JS.callback.acync.js` | Async callback | Demonstrates delayed/asynchronous execution. |
| `CB_Hell.js`, `CBhell_2.js` | Callback hell | Shows nested callbacks and readability issues. |
| `PW.CB.js` | Playwright-style callback | Connects callback thinking to automation style code. |

## Concepts Covered

- Functions as arguments
- Synchronous vs asynchronous callbacks
- Callback parameters and returns
- Nested callbacks
- Why promises and async/await are useful

## How To Run

```bash
node Chapter_16_Callbacks/CB.js
node Chapter_16_Callbacks/Async.js
node Chapter_16_Callbacks/CB_Hell.js
```

## Takeaway

Callbacks are the foundation for understanding asynchronous JavaScript, but deeply nested callbacks become hard to maintain.
