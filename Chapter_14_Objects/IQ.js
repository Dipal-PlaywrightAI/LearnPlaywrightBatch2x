const user = {
    name: "John",
    age: 30,
    email: "john@example.com"
};

console.log(user);
console.log(user.name);
console.log(user["age"]);

//Dynemic property access
const key = "age";
console.log(user[key])

//adding/modifing properties
user.city = "nyc";
user.age = 31;

console.log(user.city)
console.log(user.age)

let obj = { name: "Login" };
console.log(Object.getOwnPropertyDescriptor(obj, "name"));
// {
//   value: "Login",
//   writable: true,       ← can change the value
//   enumerable: true,     ← shows in for...in / Object.keys()
//   configurable: true    ← can delete or redefine
// }