// const user ={
//     username : "Shivam",
//     age: 21,
//     welcomeMessage : function () {
//         console.log(`${this.username} , welcome to website`); // this is used to access the elemnts of current context
//         console.log(this);
//         // {
//         //     username: 'Shivam',
//         //     age: 21,
//         //     welcomeMessage: [Function: welcomeMessage]
//         // }
//     }
// }
// user.welcomeMessage() // Shivam , welcome to website
// user.username="Sam"
// user.welcomeMessage() // Sam , welcome to website 
// {
//     username: 'Sam',
//     age: 21,
//     welcomeMessage: [Function: welcomeMessage]
//   }
//console.log(this);// {}  --> in node we get a empty object for the global context but we get windows object if we run this in console of a browser

// function one(){
//     console.log(this);
// }
// one(); // we get this following elements 
{/* <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Getter/Setter],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [AsyncFunction: fetch],
  crypto: [Getter]
} */}


// function one(){
//     let username="Shivam"
//     console.log(this.username); // undefined --> we cannot access the elements of a function inside ti using this keyword
// }
// one(); 

// const one = function (){
//     let usernam="Shivam"
//     console.log(this.usernam);// undefined
// }
// one()


// ARROW FUNCTIONS We declare them using '=>' and pass the paramters in '()' same as we do in normal functions 
// SYNTAX of ARROW function 
//  '() => {}' or () => () 

// const one = () => {
//     let usernam="Shivam"
//     console.log(this.usernam);// undefined
// }
// one()

// const one = () => {
//     let usernam="Shivam"
//     console.log(this);// {}
// }
// one()


// const abc = () => { } // when we '{}' we have to use 'return' but when we use '()' then we don't need to use 'return' keyword
// const addTwo = (num1,num2) => {
//     return num1+num2
// }

// Implicit return 
//const addTwo = (num1,num2) =>  num1 + num2 
// or
//const addTwo = (num1,num2) =>  (num1 + num2) 
console.log(addTwo(3,4))







