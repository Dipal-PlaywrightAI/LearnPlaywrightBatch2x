//accesing and modifing array

let status = ["Pass", "Fail", "Skip"]
console.log(status[2])
console.log(status[0])

console.log(status.at[-1])//its givng last element of array= skip
console.log(status.at[-5])//undefined

//modifing array
status[1] = "blocked"
console.log(status)//[ 'Pass', 'blocked', 'Skip' ]
