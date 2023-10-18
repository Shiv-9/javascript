// var a = 100

// if(true){
//  var a = 10
// }
// console.log(a);// 10 --> this is a problem as the variable a should not be declared twice and 
// 'a' from the if block should not be accessible outside its block thats why 'let' and 'const' are used 
// anything which is inside a block '{}' is blocked scoped and the things outside of any block are global scoped .
// global scoped things are accessible inside the block scope but not vice versa
// let a = 100
// if(true){
//         let a = 10
//         console.log("INNER 'a' :",a);
// }
// console.log(a);

// function one (){
//     const username ="Shivam"
//     function two(){
//         const name = "Sam"
//         console.log(username);
//     }
//     two()
//     //console.log(name);// name is not defined
// }

// one()//Shivam


addOne(4)// This will not cause error , although we are trying to access it before declaration
function addOne(num1){
    return num1+1
}


// addTwo(7) // This will cause error as we are trying to access it before declaration
// const addTwo = function (num){ // this is known as expression 
//     return num+2 
// }
