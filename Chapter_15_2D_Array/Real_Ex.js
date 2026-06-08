let testMatrix = [
    ["login", "pass", 200],
    ["chckout", "fail", 404],
    ["search", "pass", 180]
];

//how many test cases have we executed??
//how many testcases are passed??
//what is the status code that you have got for the fail??

for (let i = 0; i < testMatrix.length; i++) {
    for (let j = 0; j < testMatrix[i].length; j++) {
        console.log(testMatrix[i][j]);

    }
}
for (let row of testMatrix) {
    for (let cell of row) {
        process.stdout.write(cell + " ")
    }
    console.log();
}

