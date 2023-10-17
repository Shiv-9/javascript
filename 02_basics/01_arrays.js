//const myarr =[1,2,3,4,true,"Shivam"] // it is still a araay it can store different types of values as well.
const myarray =[1,2,3,4]// these are reziable

// array copies are shallow copies i.e they have the same reference point.
// Values changes when changes are made at one location.
//const myarr2 = new Array(1,2,3,4)
//console.log(myarr2[1])

//Array methods

// myarray.push(6) // enters value at the end of the array     
// myarray.push(7)   
// myarray.pop()

// myarray.unshift(9) // inserts value at the start of the array hence we have shift all the other values to right ( 1 place), which makes this operation time consuming
// myarray.shift()

// console.log(myarray.includes(8));//false
// console.log(myarray);// [ 1, 2, 3, 4 ]
// console.log(myarray.indexOf(2)); // 2 :: returns -1 when element is not found

// const newarray = myarray.join() // convert array to string
// console.log(newarray);// 1,2,3,4
// console.log( typeof newarray);// string


// console.log("A ",myarray ); // A  [ 1, 2, 3, 4 ] 
// const myn1 = myarray.slice(1,3) // it provides a portion of arraywithout changing the original array.
// console.log(myn1);// [ 2, 3 ]
// console.log("B ",myarray); // B  [ 1, 2, 3, 4 ]

// const myn2= myarray.splice(1,2)
// console.log(myn2);//[ 2, 3 ]
// console.log("C ",myarray); //  [ 1, 4 ] it removes the resulted portion of splice operation and the last index is included in this operation.


const marvel =["Spiderman", "Ironman","Thor"] 
const dc =["Batman","Superman","Flash"]
// marvel.push(dc)
// console.log(marvel);// [ 'Spiderman', 'Ironman', 'Thor', [ 'Batman', 'Superman', 'Flash' ] ]

// console.log(marvel[3][0]) // Batman
// const heroes = marvel.concat(dc); // concat operation returns a new array that is why we have to hold it into a new array.
// console.log(heroes);// [ 'Spiderman', 'Ironman', 'Thor', 'Batman', 'Superman', 'Flash' ]

//spread operation we treat each elemnt as a single individual it's sign is '...', and its expand each element.
//it's benefit is we can concat a number of arrays
const all_heroes =  [...marvel,...dc]//[ 'Spiderman', 'Ironman', 'Thor', 'Batman', 'Superman', 'Flash' ]
// console.log(all_heroes);


const n1 = [1, 2, 3, [4, 5], 6, [7, 8, [9, 10, [13, 14, 15]]], 11, 12];

const newarr = n1.flat(Infinity) // returns a new array with all the sub-array elements concatenated recursively 
// we provide flat with a depth upto which it should solve 
// depth --> infinity means it should solve till the max depth
//console.log(newarr); 
//  [
//     1,  2,  3,  4,  5,  6,
//     7,  8,  9, 10, 13, 14,
//    15, 11, 12
//  ]

const obj = {
    name: "Shivam",
    age : 21
}
// console.log(Array.isArray("Shivam")); // false: returns true or false accordingly
// console.log(Array.isArray(newarr)); // true
// console.log(Array.isArray(obj)); // false

// it converts to array
// console.log(Array.from("Shivam")); // [ 'S', 'h', 'i', 'v', 'a', 'm' ]
// console.log(Array.from(obj)); // [] as we didn't mentioned whether the array should be made according to key or value.
// const keys = Object.keys(obj);
// console.log(Array.from(keys));//[ 'name', 'age' ]
// const values = Object.values(obj);
// console.log((Array.from(values)));//[ 'Shivam', 21 ]

let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400
console.log(Array.of(score1,score2,score3,score4));//  [ 100, 200, 300, 400 ]  Array.Of accepts a set of elements and return a new array



 