//control flow also known as logic flow 

// // control  statement 
// if(condition){  //  condition should be true then if block will execute.

// } 


if(false == 0){
  console.log(false==0);// true
} 

if(false == ''){
    console.log(false == '');// true
} 


if(0== ''){
    console.log(0=='');// true
} 

// === it checks both datatype as well as content , == it only checks content 

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// truthy and falsy
// we assume certain values will always be a true 
// "asddsaf" is a truthy value , "" is  falsy value

// falsy values :=> false , 0 , -0, BigInt 0n , "" , null , undefined , NaN 

// truthy values :=> every values which is not a falsy value is considered as truthy value
// Some examples are  "0 " , 'false' , [] ,{}, "asd", " " , function(){}

// how to check empyty array 
const emptyarray =[]
if(emptyarray.length === 0){
    console.log("Array is empty");
}

// how to check empty  object
const emptyobj = { }
if(Object.keys(emptyobj).length === 0){
 console.log("Empty object");
}

