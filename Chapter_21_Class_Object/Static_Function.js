class Person {

    static nationality = "India";

    constructor(name) {
        this.name = name;
        console.log("name", this.name)
    }
    static common_fn() {
        console.log("Static funcation");
        console.log("nationality: ", this.nationality)
    }
}

const p1 = new Person("Heena");
console.log(p1.name)
Person.common_fn();