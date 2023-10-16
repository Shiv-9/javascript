//const name = new String("Shivam-st-com") // another way of declaring string type variable here we are using string type object. 
// // in double quates we passed the value which is given to the constructor for initialisation of the variable.
// const anothername="Shivam" // here also string type object is used behind the scene.


// let age = 21
// console.log(name +" is " + age +" years old." ); // not used this method for concatenation nowadays

// Use String interpolation , here we create placeholder for our variavle using '${}' and place our variables there.
// It makes our code more readable.
//console.log(`Hello my name is ${name} and I am ${age} yeays old.`); 
// `` used here are known as backticks present below thw esc key.


//console.log( typeof anothername); // string
//console.log(typeof name); //object   we can different properties now like length etc.

//console.log(name[0]); // 'S'
//console.log( name.__proto__); //{}
//console.log(name.length); // 6


//console.log(name.toUpperCase()); // it would not change the original value .Same way toLowerCase
// console.log(name.charAt(4)); // if index is out of range then empyty string , only +ve numbers are allowed in case of -ve number we get empty string. 
// console.log(name.indexOf('v'));
//console.log(name.indexOf('vam')); // 3 : returns the index of first character which matches
// console.log(name.indexOf('p')); // -1 

//console.log(name.substring(0,4)); // works til 0-3.
//console.log(name.substring(3)); // work till the end



// const str = 'The quick brown fox jumps over the lazy dog.';

// console.log(str.slice(31)); // goes till the end as the endpoint is not mentioned 
// "the lazy dog."

// console.log(str.slice(4, 19));
// "quick brown fox"

// console.log(str.slice(-4));
// "dog."

// console.log(str.slice(-9, -5));
// "lazy"


// const newstr= "    Shivam      ";
// console.log(newstr.trim()); //Shivam
// console.log(newstr.trimStart()); // 'Shivam  ' Spaces are present at the end.
// console.log(newstr.trimEnd()); //  '   Shivam' Spaces are present at the start.



//  const url = "https://shivam.com/shivam%20tiwari" ;
//  console.log(url.replace('%20',' ')); 
//  same replaceAll() it will replace the parameter at every location present in the string.
//  console.log(name.split('-')); //[ 'Shivam', 'st', 'com' ]

//   .at(index) // tells what is present at certain index , enter both +ve as well as -ve number as parameters. 
//  console.log(url.at(4)); // 's'.
//  console.log(url.at(-4)); // 'w'.


// const str1 = 'Cats are the best!';
// // endswith() checks whether a string ends with the characters of this string, returning true or false as appropriate.
// console.log(str1.endsWith('best!')); // be default searches till string.length
// //  true

// console.log(str1.endsWith('best', 17));
// // true

// console.log(str1.endsWith('best',10));
// //false as till the length of 10 best is not present.\


// includes tell whether a string containsa string or not
// console.log(name.includes('G'));//false
// console.log(name.includes('i'));//true
// console.log(name.includes('iva'));//true

// const str4 = "shivam-st-shivam-st"
// console.log(str4.lastIndexOf('s')) //17
// console.log(str4.lastIndexOf('sh')) //10
// console.log(str4.lastIndexOf('sh', 90)) //10 the last position ce less than or equal to the position provided 
// it returns -1 if not found
// const str6 = "Hello World";
// const regexp1 =/[A-Z]/g; // 'g' denotes that it is global flag
// const regexp2=/[A-z]/;
//[ 'H', index: 0, input: 'Hello World', groups: undefined ]
// if no result is found then an empty array is returned.


// //Adds padding at the end.
// const str1 = 'Breaded Mushrooms';
// console.log(str1.padEnd(25, '.')); //"Breaded Mushrooms........"
// const str2 = '200';
// console.log(str2.padEnd(5)); //"200  "
// same way there is padStart()


// raw is used when no i want the text as it is .
// const filePath = String.raw`C:\Development\profile\aboutme.html`;
// console.log(`The file was uploaded from: ${filePath}`); //"The file was uploaded from: C:\Development\profile\aboutme.html"

// const str5 = new String("hello");
// console.log(str5.valueOf()); // returns the valueof the variable its not explicitly used in code but by javascript.
// console.log(str5.repeat(5)); // repeat the same text a no of times.
//console.log(str5.search('l')); //2 returns the first index when the matching string is found and -1 in case no match was found.
// console.log(str5.startsWith('he')); // true return t/f according to the condition.
// console.log(str5.startsWith('he',2)); // false


// toLocaleLowerCase and toLocaleUpperCase converts to lowercase according to the locale-specific case mappings
const city = 'İstanbul';
console.log(`EN-US: ${city.toLocaleLowerCase('en-US')}`);//"i̇stanbul" 
console.log(`TR: ${city.toLocaleLowerCase('tr')}`);// "istanbul"
console.log(city.toLocaleUpperCase('en-US'));// "ISTANBUL"
console.log(city.toLocaleUpperCase('TR'));// "İSTANBUL"








 


