class testcase {
    constructor(name, status, priority) {
        this.name = name;
        this.status = status;
        this.priority = priority;
    }

    disaly() {//methos
        console.log(this.name + "-" + this.status + "-" + this.priority)
    }
}


function f1()//function bcz it outside of class
{
    console.log("I am function")
}

let LoginTC = new testcase("Login", "Pass", "P0")
let signupTC = new testcase("SignUP", "Fail", "P1")

LoginTC.disaly();
signupTC.disaly();
//function  and method
// metho is functiob but inside class