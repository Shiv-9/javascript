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
console.log(loggedinusermessge("Shivam"));//Shivam just logged in