// const score = 100
// console.log(score); // 100 

// const balance = new Number(400);
// console.log(balance);//[Number: 400]
// console.log(typeof balance);//object
// console.log(balance.toString());//"400"
// console.log(balance.toString().length);// 3
// console.log(balance.toFixed(2));//400.00 sets the precision value to 2 places


// const otherNum = 123.5678
// console.log(otherNum.toPrecision(4)); // 123.6  Only 4 digits will be shown rest will be roundedOff
// console.log(otherNum.toPrecision(3)); // 124  Only 3 digits will be shown rest will be roundedOff


// const hundreds = 1000000000
// console.log(hundreds.toLocaleString());// local string mei convert kr deta hai with ',' for eg- 1,000,000,000
// console.log(hundreds.toLocaleString('en-IN'));// indian number system //1,00,00,00,000



//**********************MATHS ********************************************************************************************** *

// console.log(Math);//Object [Math] {}
// console.log(Math.abs(-7));//7
// console.log(Math.sqrt(10));//3.1622776601683795
// console.log(Math.round(4.98));//5
// console.log(Math.ceil(4.1));//5
// console.log(Math.floor(4.9));//4
// console.log(Math.pow(3,3));//27
// console.log(Math.random());//always between 0 and 1
// console.log(Math.random()*10+1); 
// for getting values greater than 1 by random we can get 0.01234 which on multiplication results as 00.1234 
//but we wanted it to be greater than 1 so we add 1 to it.
console.log(Math.floor((Math.random()*10 )+1)); //it will give us whole number.

// if we want random number to be in a certain range then we do this.
const min=1
const max = 6
console.log(Math.floor(Math.random()*(max-min +1) + min ));
// Math.random() * (max-min+1) will always give us a random number between the max and min values
// we added min value to it so that the result will always be greater than min value.









//Properties of number
// const result = Math.abs(0.2 - 0.3 + 0.1);
// console.log(result);// 2.7755575615628914e-17
// console.log(result < Number.EPSILON);// true
// Number.EPSILON tell the smallest differnec between the two decimal number which can be possible while working with numbers on a computer.
// it is used to check whether two numbers are almost equal without being them same.

// const x = Number.MAX_SAFE_INTEGER + 1;
// const y = Number.MAX_SAFE_INTEGER + 2;
// console.log(Number.MAX_SAFE_INTEGER);//  9007199254740991
// console.log(x);// 9007199254740992
// console.log(y);// 9007199254740992 // it did not become 9007199254740993 as MAX_SAFE_INTEGER is a constant and we can only store Number upto 2^53-1 , bigger numbers are stored in bigint.
// same way there is MAX_VALUE which is the maximum which can be stored in a number.2^1024 - 1
// MIN_SAFE_INTEGER --> -(2^53-1) or -9007199254740991.
// MAX_VALUE --> 2-1074
// console.log(x === y);// true
