// function are nothing but a set of code collected together such that they can we reused again when needed 
// function addTwoNumbers(number1, number2)// here these are called parameters
// { 
//     console.log(number1+number2);
// }

// addTwoNumbers --> it the refernce of the function , it means that there exists a function named addTwoNumbers somewhere
//addTwoNumbers() //  --> this will execute the function 
// Nan as no arguments are given
//addTwoNumbers(3, 4) //7
// addTwoNumbers( 3, "4") // 34  ---
//                        //        |--> these provide unexpected results which might occur hence we perform type checks before performing operations    
// addTwoNumbers(3 , "a") //3a   ---

function loggedinusermessge(username = "Sam") // default value 
{ 
    if(!username){ 
        console.log("Please enter the username");
        return 
    }
    return `${username} just logged in`;
}

//console.log(loggedinusermessge()) // undefined will be send as the paramter
//console.log(loggedinusermessge("Shivam"));//Shivam just logged in



// function calculatePrice(num1){
//     return num1;
// }
// console.log(calculatePrice(100)); // 100 

//rest operator '...' it will add elements into a single entity 
function calculatePrice(val1, val2 ,...num1){
    return num1;
}
//console.log(calculatePrice(100,200,300)); // [ 100, 200, 300 ] 
//console.log(calculatePrice(100,200,300,400)); // [ 300, 400 ] , val1-->100 , val2 --> 200

const user = {
    username: "Shivam",
    age: 21
}
function userDetails(anyobject){
    console.log(`${anyobject.username} is ${anyobject.age} years old.`);
}
//userDetails(user) // Shivam is 21 years old.
//we could have also passed object like this 
userDetails({
    username:"Shiv",
    age: 24
}) // Shiv is 24 years old.

// we can pass array same as object 