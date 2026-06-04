let fruits = ["Banana", "Apple", "Watermelon", "Chiku",]
fruits.sort();
console.log(fruits);

let number = [1, 4, 12, 65, 40]
number.sort();
console.log(number);

number.sort((a, b) => (a - b));
console.log(number)//assending order
number.sort((a, b) => (b - a));

console.log(number)//descending order