//Immediately Invoked Function Expressions

// Sometimes as there are many variables present in global scope which may cause probelems during execution
// or we call this global pollution we create and execute a function immediately so that its elements are destoyed immediately
// it is used for isolation of code whereas normal functions are use for their reusuablity

//SYNTAX ()();  // the second '()' is for exxecution of the code ';' is compulsory to end the scope of this IIFs 

(function (){
    console.log("DB Connected!!!!"); // DB Connected!!!!
})();

//named IIFE
(function one(){
    console.log("DB Connected!!!!"); // DB Connected!!!!
})();

//ARROW FUNCTION as IIFE and passing parameters to IIFE
( (dbName) => {
    console.log(`DB Connected!!!! ${dbName}`); // DB Connected!!!! Users
})('Users');
