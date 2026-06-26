class BankAccount {
    #balance = 0;
    //private balance=0;                  //private field-hidden from outside
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            //this.#balance = this.#balance+amount;
        }
    }
    getBalance() {
        return this.#balance;//controlled aceess
    }
}

const Account = new BankAccount();
Account.deposit(1000);
console.log(Account.getBalance());
//console.log(Account.balance);                  //undefied(no public field by that name)