 //"use strict"; //treat all js code as newer version of js.
 

// alert("shivam") //it's part of browser not node 

// primitive datatypes  : 7 => undefined, null , string, number (includes decimal as well) ,boolean , symbol , bigInt 
 let firstVar
 const secondVar=null
 const firstname="shivam"
 const age= 22
 const logged = true
 const id= Symbol('354')
 const anotherid = Symbol('354')
 console.log(id === anotherid); // false 

 const bignumber = 32456543456765456765365678987n


/*
undefined => when a variable is ont assigned any value
null => it's a standalone value , as well as a object. 
String => ""
number => -2^53 + 1 to 2^53 - 1 , for displaying even decimal numbers
bigint => when value is grater than the range of number
boolean => true/false
symbol  => used to identyfy different components as unique .
*/ 

console.log(typeof firstVar);// undefined
console.log(typeof secondVar);//object remember null is of object type 
console.log(typeof firstname); //string
console.log(typeof age); // number
console.log(typeof logged); // boolean
console.log(typeof id); //symbol
console.log( typeof bignumber); //bigint



// Non primitive type (call by refernce): 3 => Array , object , function 

//Array 
const heroes = ["shaktiman" ,"naagraj","doga"]

//object 
let myobj = {
    name: "Shivam",
    age: 21,
    // it can have any data type inside as objet like arr, object , function , string , number etc
}

//function

const myfunc = function (){
    console.log("Hello world!!");
}

console.log( typeof heroes); //object
console.log( typeof myobj); //object
console.log( typeof myfunc); //function we call it function object

//*************************************
//                       Memory
// Stack {primitive}                      Heap {non primitive}
// a copy of value is given            reference to the value is given
// changing does not impact other      changing impact all the variables using the reference


let mymail = "shivam@gmail.com"
let myanothermail = mymail;
console.log(mymail);
console.log(myanothermail);

myanothermail="tiwari@gmail.com"
console.log(mymail); // value remains the same for it 
console.log(myanothermail);


let userone = {
    mail: "shivam@google.com",
    age: 21
}
 
let usertwo= userone;
usertwo.mail ="tiwari@google.com"
console.log(userone.mail);//value changes to 'tiwari@google.com'
console.log(usertwo.mail);



