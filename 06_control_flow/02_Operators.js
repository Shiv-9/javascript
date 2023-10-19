// logical operators && , || , ! 

// Nullish Coalescing Operator (??)
// it is applied on  null , undefined   
let val1
val1 = 5 ?? 10
console.log(val1); // 5 


// '??' it is used to provide a safety check against null or undefined .
// if a variable has null or undefined then it will assign the first alternate value which is present after the '??' sign. 

val1 = null ?? 10
console.log(val1); // 10

val1 = undefined ?? 14
console.log(val1); // 14

val1 = null ?? 10 ?? 15
console.log(val1); // 10


//Terniary Operator 
// condition ? True : false
const dishPrice = 100
dishPrice<80 ? console.log("Price less than 80") : console.log("Price more than 80"); // Price more than 80