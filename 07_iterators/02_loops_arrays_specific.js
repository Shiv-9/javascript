// for of 
//  ["","",""]
//  [{},{},{}]

const arr = [1,2,3,4,5,6,7,8,9]

for (const num of arr) {
    //console.log(num);
}

const greetings ="Hello World!!"
for(const greet of greetings) {
    //console.log(greet);
}


// Maps :=> it stores key: value pairs just like objects except it has unique elements only and it stores elements ina certai order.

const map = new Map()
map.set('IN','India')
map.set('US','United States Of America')
map.set('FR','France')
map.set('IN','India')

//console.log(map);
// Map(3) {
//     'IN' => 'India',
//     'US' => 'United States Of America',
//     'FR' => 'France'
//   }

for (const key of map) {
    //console.log(key); 
}
// [ 'IN', 'India' ]
// [ 'US', 'United States Of America' ]
// [ 'FR', 'France' ]

for (const [key,value] of map) {
    //console.log(key , ':=>' ,value); 
}
// IN :=> India
// US :=> United States Of America
// FR :=> France

// We can not iterate over Objects using forOf loop 



// forin loops
// ieration over object
const myobject = {
    js : 'Javascript',
    cpp :"C++",
    C : "C" ,
    java: "JAVA",
    rb : "ruby"
}
for (const key in myobject) {
   // console.log(`.${key} is used for ${myobject[key]} files.`);
}
// .js is used for Javascript files.
// .cpp is used for C++ files.
// .C is used for C files.
// .java is used for JAVA files.
// .rb is used for ruby files.


const myarr = ["js","cpp","java","ruby","c"]
for (const key in myarr) {
   console.log(myarr[key]); // key will have index of array like 0,1,2 etc.
}
// js
// cpp
// java
// ruby
// c

// Maps are not iterable using forin loop . 


