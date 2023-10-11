// let score = 54
// console.log(typeof score);

// score = "32ab"
// console.log(typeof(score))


// let valInNumber = Number(score)
// console.log(typeof(valInNumber))
// console.log(valInNumber) 
/* 
Result NaN aaya mtlb ki Not a Number
NaN is a special type which occurs when we convert a string or other datatype
to number which can not be converted to number directly
For Eg --> right now score has value of '33ab' which can not be 
converted to a number as a result it return NaN as the value of 'scope'
*/

// score = undefined
// console.log("score as "+score) 
// console.log(typeof(score))


// let valInNumber2 = Number(score)
// console.log(typeof(valInNumber2))
// console.log(valInNumber2) 


// score = null
// console.log("score as "+score) 
// console.log(typeof(score))


// let valInNumber3 = Number(score)
// console.log(typeof(valInNumber3))
// console.log(valInNumber3) 


// score = true
// console.log("score as "+score) 
// console.log(typeof(score))


// let valInNumber4 = Number(score)
// console.log(typeof(valInNumber4))
// console.log(valInNumber4) 

/*
"33" => 33
"33ab" => NaN
undefined => Nan
Null => 0
true =>1   false =>0
*/


// let logged = 1 
// console.log("logged as "+logged)
// let booleanLogged = Boolean (logged)
// console.log(booleanLogged); 


// logged = 0 
// console.log("logged as "+logged)
// let booleanLogged1 = Boolean (logged)
// console.log(booleanLogged1); 

// logged = -5 
// console.log("logged as "+logged)
// let booleanLogged2 = Boolean (logged)
// console.log(booleanLogged2); 

// logged = 5.5 
// console.log("logged as "+logged)
// let booleanLogged3 = Boolean (logged)
// console.log(booleanLogged3); 


// logged = "" 
// console.log("logged as empty string")
// let booleanLogged4 = Boolean (logged)
// console.log(booleanLogged4);


// logged = "asdfg" 
// console.log("logged as "+logged)
// let booleanLogged5 = Boolean (logged)
// console.log(booleanLogged5);

// logged = null 
// console.log("logged as "+logged)
// let booleanLogged6 = Boolean (logged)
// console.log(booleanLogged6);

// logged = undefined 
// console.log("logged as "+logged)
// let booleanLogged7 = Boolean (logged)
// console.log(booleanLogged7);


/*
1 => true , 5=> true  , 5.5 => true , -5.5 => true 
0 => false
"" => false
"asdf" => true
null => false ,  undefined => false
*/ 

// let anyNumber = 56
// let stringNumber= String(anyNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber)
 

//**************************** Operations ****************************

// let value = 6
// let negvalue = -value
// console.log(negvalue)


// console.log("1"+2+2); //122
// console.log(1+2+"2"); //32
// console.log(1+2+"2"+5); //325


// agr string phele hai toh sb string mei convert ho jata hai 
// vrna operations perform hote hai phir agr string jha se 
// present hai vha se string concatenation ki trh treat hoga 

console.log(+true); //=> 1
console.log(+false); //=> 0
console.log(-true); //=> -1
console.log(-false); //=> -0
console.log(+""); //=> 0
console.log(+0); //=> 0
console.log(+1); //=> 1


