//promise creatioon 
// promises take a call back func as a argument , it resolves callback hell to some extent as well 
const promiseOne = new Promise(function(resolve,reject){
     // do async taks 
     // network calls , DB calls, cryptography
     
     setTimeout(function(){
        console.log("Task completed");
        resolve() // if we dont write a here then we havnt connected the promise with the then function 
     },1000)
});

// promise.then() --> mei resolve connect hota h 
// promise.then().catch() --> mei koi error catch kr skte h 
// promise.then().catch().finally --> mei sb kuch aa jata h it always gets executed 
                                      
// promise consumption
promiseOne.then(function(){
    console.log("Promise consumed");
})
//Output  --> always first promised is completed then consumed 
//Task completed
//Promise consumed



//normal structure
new Promise(function(resolve,reject){
    setTimeout(function(){
       console.log("Task 2 completed");
       resolve() 
    },1000)
}).then(function(){
   console.log("Promise 2 consumed");
})


// how to use data in promises
const promiseThree = new Promise(function(resolve,reject){
   setTimeout(function(){
      resolve({username : 'Shivam', age : 21})
   },1000)
})

promiseThree.then(function(user){
   console.log(user);
})
// output 
// { username: 'Shivam', age: 21 }


const promiseFour = new  Promise(function(resolve,reject){
   setTimeout(function(){
      let error = false 
      if(!error){
         resolve({username:"shivam" , password:"1234"})
      }
      else {
         reject('Error : Something went wrong!!')
      }
   },1000)
})


promiseFour.then((user)=>{
 console.log(user);
 return user.username;
}).then((name)=>{    //--> we get the resultant from the previous chain 
 console.log(name);
}).catch((err)=>{   //--> used for handling errors
 console.log(err);
}).finally(()=>{   //--> it will always get executed , usually used to get info like whether the promise is finished or not.
   console.log('promise is executed');
})


const promiseFive = new Promise(function (resolve, reject){
   setTimeout(function(){
      let error = true 
      if(!error){
         resolve({username:"shivam" , password:"1234"})
      }
      else {
         reject('Error : Something went wrong!!')
      }
   },1000)
})

// we can use async /await as well for consuming promises but it doesn't 
//have error handling ability that'y we use try/catch block
async function consumePromiseFive(){
   try {
      const response = await promiseFive
      console.log(response); 
   } catch (error) {
      console.log(error);
   }
}

consumePromiseFive()

async function getusers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getusers()


fetch('')
.then((response)=>{
   return response.json
})
.then((data)=>{ //--> this will only execute after the first one 
 console.log(data);
})
.catch((error)=>{
console.log(error);
})
   
