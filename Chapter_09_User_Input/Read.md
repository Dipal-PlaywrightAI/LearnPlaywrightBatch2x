# Chapter 09 - User Input

This chapter introduces how JavaScript receives input and makes decisions from that input. The practicals cover browser-style `prompt`, Node.js input patterns, and decision-based challenges.

## Practical Files

| File | Practical | What happens |
| --- | --- | --- |
| `User_Input.js` | Prompt input | Reads a number and checks whether it is even or odd. |
| `prompt_sync.js` | `prompt-sync` input | Shows the Node.js command-line prompt pattern. |
| `Node_readline.js` | Node `readline` | Shows callback-based terminal input. |
| `Challenge.js` | Input decisions | Classifies status codes, build health, bug severity, and login lockout logic. |

## Concepts Covered

- Reading user input
- Converting string input with `Number()`
- Even/odd checks
- `if`, `else if`, `else`
- `switch(true)` for range-based conditions
- Test-style status classification

## How To Run

```bash
node Chapter_09_User_Input/Challenge.js
```

For `prompt-sync`, install the package first if needed:

```bash
npm install prompt-sync
node Chapter_09_User_Input/prompt_sync.js
```

## Takeaway

Input lets a program react to user values. This chapter connects raw input with useful validation and test-result decisions.
