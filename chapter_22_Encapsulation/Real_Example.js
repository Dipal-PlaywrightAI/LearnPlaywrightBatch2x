class person {
    //hide your childeren
    #child1;
    #child2;

    constructor(name, ch1, ch2) {
        this.name = name;
        this.#child1 = ch1;
        this.#child2 = ch2;
    }
    getChild() {
        return this.#child1;
        return this.#child2;
    }
    setChild(changed_Name1, changed_Name2) {
        this.#child1 = changed_Name1;
        this.#child2 = changed_Name2;
    }
}

let child = new person("Jenny", "Arun", "Vikita")
child.getChild();
child.setChild("Abhay", "Ankita");
console.log(child.name);
//console.log(child.#child1)
console.log(child.getChild());

