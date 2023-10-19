const myNum = [1,2,3,4,5,6,7,8,9,10]

//const numbers = myNum.map( (item) => item+10) // it is also a higher order function but it returns values and is not dependent on the condition
//console.log(numbers);
// [
//     11, 12, 13, 14, 15,
//     16, 17, 18, 19, 20
//   ]

 const newNums = myNum
             .map( (nums)=> nums+10) 
             .map( (nums)=> nums+2 ) //it will receive the result of all the operations performed earlier as argument [10,20,30,40,50,60,70,80,90,100]  
             .filter( (nums)=> nums > 10 ) // same way it will get the result from previous chain , this is known as chaining 

//console.log(newNums);  

// [
//     13, 14, 15, 16, 17,
//     18, 19, 20, 21, 22
// ]



// reduce is also a higher order function , it is also applied to every single unit .
//it reduces the elements into single element by performing a number of operations , 
// here we have a accumulator which collects the information into a single unit and a current value which holds the current value  
// const mytotal = myNum.reduce( (accumulator , currentvalue) => {
//     return accumulator + currentvalue
// } , 0)  // here ,0 is providing initial value to the accumulator 
// console.log(mytotal); // 55

// const mytotal = myNum.reduce( (accumulator , currentvalue) => {
//     return accumulator * currentvalue
// } , 1)  // here 1 is providing initial value to the accumulator 
// console.log(mytotal); // 3628800


const shoppingCart = [
    {
        item : "books",
        price: 499
    },
    {
        item : "football",
        price: 399
    },
    {
        item : "clothes",
        price: 4999
    }
]

const priceToPay = shoppingCart.reduce ( (acc, item) => acc+item.price ,0 )
console.log(` Your Total Price is ${priceToPay}`); // Your Total Price is 5897