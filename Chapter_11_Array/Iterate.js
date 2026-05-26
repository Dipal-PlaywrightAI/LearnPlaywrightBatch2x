//iterate -GO from one to another //

let tests = ["login", "checkout", "search"]

for (i = 0; i < tests.length; i++) {
    console.log(tests[i])
}

//for..of(cleanest for values)
for (i of tests) {
    console.log(i);
}

//forech loop

tests.forEach((i, index) => {
    console.log(i, index);
});

let students = ["AV", "Dv", "CP"]
for (let staudent in staudents) {
    console.log(staudent, " ->", staudents[staudent]); //index=in
}