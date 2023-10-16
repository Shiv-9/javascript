//let myDate = new Date()
// console.log(myDate); // 2023-10-16T11:09:58.166Z
// console.log(typeof myDate);// object
// console.log(myDate.toString());//Mon Oct 16 2023 11:09:58 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());//Mon Oct 16 2023
// console.log(myDate.toISOString()); //2023-10-16T11:09:58.166Z
// console.log(myDate.toLocaleString());//10/16/2023, 11:09:58 AM
// console.log(myDate.toLocaleString('en-IN',{timeZone: 'Asia/Kolkata'})); // 16/10/2023, 4:48:42 pm
// console.log(myDate.toLocaleDateString());//10/16/2023
// console.log(myDate.toLocaleDateString('en-IN',{timeZone: 'Asia/Kolkata'}));// 16/10/2023
// console.log(myDate.toTimeString());//11:09:58 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toLocaleTimeString());//11:09:58 AM
// console.log(myDate.toLocaleTimeString('en-IN' , {timeZone: 'Asia/Kolkata'}));//4:53:17 pm

// let createdDate = new Date(2023 , 9, 16) // format( yyyy , mm , dd) mm starts from 0 i.e for jan mm-->0 , feb ---> 1.
// console.log(createdDate.toDateString()); // Mon Oct 16 2023

// let createdDate = new Date(2023 , 9, 16 , 17, 0);//format( yyyy , mm , dd , hour , min)
// console.log(createdDate.toLocaleString()); //10/16/2023, 5:00:00 PM

//  let createdDate = new Date("10-16-2023");
// console.log(createdDate.toLocaleString());//10/16/2023, 12:00:00 AM

// let mytimestamp = new Date()
// mytimestamp=Date.now();
// console.log(mytimestamp);//1697456313539 miliseconds from 1/01/1970
// console.log(typeof mytimestamp);// number
// console.log(createdDate.getTime());//1697414400000
//Values in Seconds
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate);//2023-10-16T11:49:30.841Z
// console.log(newDate.getDate());//16
// console.log(newDate.getDay()+1);//2
// console.log(newDate.getMonth()+1);//10


console.log(newDate.toLocaleString('default',{
    weekday:"long"
}))//Monday
