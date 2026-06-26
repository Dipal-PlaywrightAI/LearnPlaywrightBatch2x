class Person {

    constructor()//automatically call when object is created
    {
        console.log("I created when object is created")
    }
    //attributes
    name;
    emailid;
    address;
    //behaviour
    sleep() { };
    eat() { };
    walk() { }
}

const object1 = new Person();
//object1 = referance of object
//new Person(); =object
console.log(object1)