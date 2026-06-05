//premitive vs Referance Types

let a = 10;
let b = a;
b = 99;
console.log("Value of a: " + a)
console.log("Value of a: " + b)

//objects-copied by referance,call by ref
//referance-object,array,funcation
let obj1 = { value: 10 };
let obj2 = obj1;
console.log(`value of obj1 ${obj1.value} and value of obj2 ${obj2.value}`);
obj2.value = 20;
console.log(`value of obj1 ${obj1.value} and value of obj2 ${obj2.value}`);