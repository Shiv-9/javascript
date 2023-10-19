//const myarr = ["js","cpp","java","ruby","c"]

//forEach is a higher order function. i.e it accepts a function as a argument and applies that function to each element of the array.
// it accepts a call back function i.e it does not have a name as a argument.  

// myarr.forEach( function (val) { // val will have the array elements indexwise 
//  //console.log(val);
// })
// js
// cpp
// java
// ruby
// c  


// using arrow functions as a call back function
// myarr.forEach( (item) => {
//     // console.log(item);
// })
// js
// cpp
// java
// ruby
// c

// function printme(item){
//   console.log(item)
// }

// myarr.forEach( printme) // we have only given the refernce of the function here
// js
// cpp
// java
// ruby
// c

// forEach has accept to the element of the array its index as well as entire array at any given instance
// myarr.forEach( (item , index , arr)=>{ 
//  console.log(item,index,arr);
// })
// js 0 [ 'js', 'cpp', 'java', 'ruby', 'c' ]
// cpp 1 [ 'js', 'cpp', 'java', 'ruby', 'c' ]
// java 2 [ 'js', 'cpp', 'java', 'ruby', 'c' ]
// ruby 3 [ 'js', 'cpp', 'java', 'ruby', 'c' ]
// c 4 [ 'js', 'cpp', 'java', 'ruby', 'c' ]


// const mycoding = [
//     {
//         language: "javascript",
//         languageFileExtension : ".js"
//     },
//     {
//         language: "java",
//         languageFileExtension : ".java"
//     },
//     {
//         language: "python",
//         languageFileExtension : ".py"
//     }
// ]

// mycoding.forEach ( (item)=> {
//   //console.log(`${item.language} : ${item.languageFileExtension}`);
// })
// javascript : .js
// java : .java
// python : .py 


// const values = myarr.forEach( (item)=> {
//   console.log(item);
// })
// console.log( values); --> // it is undefined
// js
// cpp
// java
// ruby
// c
// undefined

// const values = myarr.forEach( (item)=> {
//     console.log(item);
//     return item
//   })
//   console.log( values); //--> // it is still undefined
//   js
// cpp
// java
// ruby
// c
// undefined

//forEach loop does not return any value 

const myNums = [ 1,2,3,4,5,6,7,8,9,10]
//let newNums = myNums.filter( (num) => num >3)  // [ 4, 5,  6, 7, 8, 9, 10]
// it accepts a callback function and returns value according to the condition
// let newNums = myNums.filter( (num) => { // implicit return 
//      return num >3
//} )  // [ 4, 5,  6, 7, 8, 9, 10]


// using forEach
// const newNums =[]
// myNums.forEach( (nums)=> {
//     if(nums > 3){
//       newNums.push(nums)
//     }
// })

// console.log(newNums);// [ 4, 5,  6, 7, 8, 9, 10]


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userbooks = books.filter( (bk)=> bk.genre ==='History')
//console.log(userbooks);
// [
//     {
//       title: 'Book Three',
//       genre: 'History',
//       publish: 1999,
//       edition: 2007
//     },
//     {
//       title: 'Book Seven',
//       genre: 'History',
//       publish: 1986,
//       edition: 1996
//     }
//   ]
 userbooks = books.filter( (bk) => {
    return bk.publish>=1995 && bk.genre ==="History"
 })
 console.log(userbooks)
//  [
//     {
//       title: 'Book Three',
//       genre: 'History',
//       publish: 1999,
//       edition: 2007
//     }
//   ]



