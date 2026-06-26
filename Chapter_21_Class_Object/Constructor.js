class car {
    //CAB

    //constructor
    constructor(name_Given_During_Attribute) {
        this.name = name_Given_During_Attribute
    }

    //attributes

    //behaviour
    drive() {
        console.log("i am driving car ", this.name)
    }

}

let tesla = new car("Model1");
console.log(tesla.name)
tesla.drive();

let i10 = new car("grand i10");
tesla.drive();