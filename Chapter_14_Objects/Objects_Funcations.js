const user = {
    name: "amita",
    age: 23
};

const calculator = {
    value: 0,

    add(a, b) {
        console.log("Addition of two numbers" + (a + b))
    },
    subtraction(a, b) {
        return (a - b);
    },
    multiplication(a, b) {
        return (a * b);
    }
};

calculator.add(20, 56);

let sub = calculator.subtraction(43, 12);
console.log("Subtraction of two number: " + sub);
let mul = calculator.multiplication(2, 8);
console.log("Multiplication of two number: " + mul);