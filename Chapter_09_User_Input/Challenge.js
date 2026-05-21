
//Question 1 — HTTP Status Code Categorizer

let status_code = 402;

if (status_code >= 200 && status_code <= 299) {
    console.log("Success")
}
else if (status_code >= 300 && status_code <= 399) {
    console.log("Redirection")
}
else if (status_code >= 400 && status_code <= 499) {
    console.log("Client Error")
}
else if (status_code >= 500 && status_code <= 599) {
    console.log("Server Error")
}
else {
    console.log("Invalid")
}

//Question 2 — Test Case Pass/Fail Verdict

let Actual = "Login Successful"
let expected = "Login Successful"

if (Actual === expected) {
    console.log("Test Passed")
}
else if (Actual !== expected) {
    console.log("Test Failed — Expected: Login Successful, Got: Invalid Credentials")
}

//Question 3 — Bug Severity Classifier

let impact_score = 5;

if (impact_score >= 9 && impact_score <= 10) { console.log("Critical") }
else if (impact_score >= 7 && impact_score <= 8) { console.log("High") }
else if (impact_score >= 4 && impact_score <= 6) { console.log("Medium") }
else if (impact_score >= 1 && impact_score <= 3) { console.log("Low") }

else { console.log("Invalid score") }


//Question 4 — Build Health Reporter

let score = 76;

if (score === 100) { console.log("Green Build") }
else if (score >= 90 && score <= 99) { console.log("Stable(investigate failures)") }
else if (score >= 70 && score <= 89) { console.log("Unstable") }
else if (score <= 70) { console.log("Broken Build (block deployment)") }


//Question 5 — Login Lockout After Failed Attempts
let attempt = 9
switch (true) {
    case (attempt === 0):

        console.log("Login successful")
        break;
    case (attempt === 1):
        console.log("2 attempt left before lockout")
        break;
    case (attempt === 2):
        console.log("1 attempt left before lockout")
        break;
    case (attempt === 3):
        console.log("Your account is Lock")
        break;
    default:
        console.log("Invalid")
}
