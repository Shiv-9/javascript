// objects can be declared by two methods i.e using constructor or by using literal
// when constructor is used then singleton instance is formed 
// Object.Create --> is the method of declaring the object by using a constructor

//object literal
const mysym = Symbol("key1")

const user ={
    name: "Shivam",
    "Full name": "Shivam Tiwari",
    [mysym]:"Mykey1",   // this is the syntax for adding symbol as a key in a object if we added like mysym:"mykey1" then the key mysym will be of string type not Symbol type
    age: 21,
    email: "Shivam@google.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday","Friday","Saturday"]
}
// how to access object elements either by using '.' or [""]as all the keys are stored as strings in the backend except for symbol type 
//if symbols are used then [name_of_symbol]
// console.log(user.name);//Shivam
// console.log(user["name"]);//Shivam
// console.log(user["Full name"]);//Shivam Tiwari
// console.log(user[mysym]);//Mykey1
// console.log(typeof user[mysym]);// string  ---> Datatype of the value of symbol
//console.log(user);
// {
//     name: 'Shivam',
//     'Full name': 'Shivam Tiwari',
//     age: 21,
//     email: 'Shivam@google.com',
//     isLoggedIn: false,
//     lastLoggedInDays: [ 'Monday', 'Friday', 'Saturday' ],
//     [Symbol(key1)]: 'Mykey1'
//   }

user.email="Shivam@meta.com"
//console.log(user.email);//Shivam@meta.com
//Object.freeze(user); // it makes the object unchangable i.e we can change the values but it will not be reflected back to the object itself
user.email="Shivam@Gmail.com"
//console.log(user.email);//Shivam@meta.com

user.greeting = function(){
    console.log("Hello User");
}
console.log(user.greeting); // [Function (anonymous)]
console.log(user.greeting()); // Hello User
user.greetingTwo =  function(){
    console.log(`Hello Mr. ${this["Full name"]}`);
}
console.log(user.greetingTwo()); // Hello Mr. Shivam Tiwari