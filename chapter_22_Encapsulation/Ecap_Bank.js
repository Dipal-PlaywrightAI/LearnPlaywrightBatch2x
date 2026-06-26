class ICICI {
    #balance;

    constructor(name, balance) {
        this.name = name;
        this.#balance = balance;
    }

    getbalance() {
        return this.#balance;
    }

    setbalance(balance, iscashier) {
        if (iscashier) {
            console.log("you are allowed to set balance")
            this.#balance = balance;
        } else {
            console.log("not allowed")
        }

    }
}

const acess = new ICICI("adit", 3000);
console.log(acess.getbalance());
acess.setbalance(4000, true);
console.log("After changed by cashier : " + acess.getbalance());


const acess1 = new ICICI("Hema", 9000);
console.log(acess.getbalance());
acess.setbalance(4000, false);
