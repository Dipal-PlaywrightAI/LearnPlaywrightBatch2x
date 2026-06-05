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