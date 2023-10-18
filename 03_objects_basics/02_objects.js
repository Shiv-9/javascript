// const tinderUser = new Object() // singleton Object
// const tinderUser1 = {} // non singleton Object
// console.log(tinderUser); // {}
// console.log(tinderUser1); //{}

const tinderUser = { }
tinderUser.id = "12assd"
tinderUser.name ="Luffy"
tinderUser.age = 18
tinderUser.loggedIn = false
// console.log(tinderUser);// { id: '12assd', name: 'Luffy', age: 18, loggedIn: false }

const regularUsers = {
    email : "someone@gmail.com",
    fullname : {
        username :{
            firstname: "Shivam",
            lastname : "Tiwari"
        }
    }
}

//console.log(regularUsers.fullname.username.firstname); // Shivam

const obj1 = { 1:"a", 2:"b"}
const obj2= { 3:"c",4:"d"}
const obj3= { obj1, obj2}
//console.log(obj3) // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

const obj4 = Object.assign(obj1,obj2)
//console.log(obj4);// { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
const obj5 = Object.assign({}, obj1,obj2)// --> this gurantees that we will get the result as a object
//console.log(obj5); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' } 
// it returns a new object as a copy of all the enumerable objects provided as a parameter

const obj6 = { ...obj1,...obj2}
//console.log(obj6); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const users = [
    {
        id: "12as",
        email: "S@google.com"
    },
    {
        id: "12as",
        email: "S@google.com"
    },
    {
        id: "12as",
        email: "S@google.com"
    }
]

// console.log(users[1].email);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'age', 'loggedIn' ]   --> return type is array which can be used for iterations.
// console.log(Object.values(tinderUser)); // [ '12assd', 'Luffy', 18, false ]
// console.log(Object.entries(tinderUser));// return the key,value pair as array elements.
// [
//     [ 'id', '12assd' ],
//     [ 'name', 'Luffy' ],
//     [ 'age', 18 ],
//     [ 'loggedIn', false ]
// ]

console.log(tinderUser.hasOwnProperty("loggedIn")); //true --> returns t/f , used to check whether a object has certain property or not