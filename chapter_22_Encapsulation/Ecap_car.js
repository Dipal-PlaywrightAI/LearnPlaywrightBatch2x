class car {
    #engine;
    constructor(name, enginename) {
        this.name = name;
        this.#engine = enginename;
    }

    getengine() {
        return this.#engine;
    }
    setengine(nameengine) {
        this.#engine = nameengine;
    }
}

let tesla = new car("Tesla", "v8")
console.log(tesla.getengine());
tesla.setengine("v9");
console.log(tesla.getengine());