//private fields(#)
//public fields

class credentail {
    #apikey;
    user;
    constructor(apikey, user) {
        this.user = user;//public
        this.#apikey = apikey;//private    
    }
    pramodgetauth() {
        console.log(this.user)
        console.log(this.#apikey)
    }
}
let cred = new credentail("KEy_123", "Admin");
cred.pramodgetauth();
console.log(cred.apikey);//not acressible undefiend
//console.log(cred.#apikey);//not acressible error