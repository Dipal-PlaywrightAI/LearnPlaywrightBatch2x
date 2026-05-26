//splice(removes elemnts from an arrays and if nessaary insert new elemnet in their palce and returning the deleted elemnet)

let arr = [1, 23, 33, 64, 15]
arr.splice(2, 1, 4)//start,deletecount,itemsTOAdd
console.log(arr)

//add the element
arr.splice(1, 0, 89)//
console.log(arr)//[ 1, 89, 23, 4, 64, 15 ]

//remove two elemnts and adding two elements
arr.splice(1, 2, 90, 99)
console.log(arr)//[ 1, 90, 99, 4, 64, 15 ]

//remove the two elements and adding nothing
arr.splice(1, 2,)
console.log(arr)