# Chapter 17 - Promises

This chapter moves from callback-style code to JavaScript promises. It covers promise creation, resolve/reject, `.then()`, final handling, promise methods, and promise interview questions.

## Practical Files

| File | Practical | What happens |
| --- | --- | --- |
| `Promiss.js`, `Promise123.js` | Promise basics | Creates and runs simple promises. |
| `Promise_Reject.js` | Rejection | Demonstrates failed promise flow. |
| `Promiss_Then.js` | `.then()` | Handles resolved promise values. |
| `Promiss_final.js` | Final handling | Shows cleanup/final execution pattern. |
| `promise_method.js`, `Promiss_ALL.js` | Promise methods | Practices methods such as combined promise handling. |
| `call_Pyramid_of_dom.js` | Callback pyramid | Shows the problem promises help solve. |
| `IQ.js` | Interview practice | Promise output and behavior questions. |

## Concepts Covered

- Promise states: pending, fulfilled, rejected
- `resolve` and `reject`
- `.then()` and error flow
- Promise method practice
- Replacing nested callbacks

## How To Run

```bash
node Chapter_17_Promiss/Promiss.js
node Chapter_17_Promiss/Promiss_Then.js
node Chapter_17_Promiss/Promise_Reject.js
```

## Takeaway

Promises make asynchronous code easier to chain and reason about than nested callbacks.
