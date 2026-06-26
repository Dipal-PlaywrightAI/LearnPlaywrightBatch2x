//When you want the child class to call the parent class's constructor,
// you use super() inside the child class's constructor.
class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(this.name + "is eating")
    }
    sleep() {
        console.log(this.name + "is sleeping")
    }
}
class Dog extends Animal {

    constructor(name, breed) {
        super(name); // Calls Animal's constructor
        this.breed = breed;
    }
    bark() {

        console.log(this.name + "is barking");
    }
}
const p1 = new Dog("Buddy", "Labrador");
p1.bark();
p1.eat();
p1.sleep();
console.log(p1.breed);
console.log(p1.name);