// console.log("2">1);  // =>true automatically convert string to number
// console.log("02">1); // =>true 

// console.log(null>0);  //false
// console.log(null==0); //false
// console.log(null>=0); //true  

//This null>=0 results true because of conversion of null into number which is '0' and thus '0'>='0' results in true.
// comaparison operators convert kr dete hai value ko number mei == nhi krta aisa.

//=== is also known as strict check as it also matches the datatype .
console.log("2" === 2); //false 


console.log(undefined>0);  //false
console.log(undefined==0); //false
console.log(undefined>=0); //false

