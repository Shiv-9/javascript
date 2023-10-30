const form = document.querySelector('form')

form.addEventListener('submit' , function (event){ 
 event.preventDefault()   // when a form is submitted it send the information using get/post method to the server. We are stoping it from sending the information to the server.

 // if we write it outside the function below the form , then it will collect the value at the time of loading the page , which will give us empty values.
 // we did it inside this function as we want value of height and weight at the time of submission of form.
 const height = parseInt(document.querySelector("#height").value)
 const weight = parseInt(document.querySelector("#weight").value)
 const results = document.querySelector("#results")

 if(height === '' || height <0 || isNaN(height) || weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = "Please Enter valid values"
 }
 else {
    const bmi = (weight / ((height*height)/10000)).toFixed(2)
    let bodytype = "abc"
    if(bmi < 18.6 ){
        bodytype = "Under Weight"
    } else if(bmi >=18.6 && bmi <= 24.9){
            bodytype = "Normal Range"
    }
    else {
        bodytype = "Over Weight"
    }
    results.innerHTML = `<span> BMI is ${bmi} and you are ${bodytype}</span>`  
 }
})