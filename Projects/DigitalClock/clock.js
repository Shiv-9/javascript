const clock = document.getElementById("clock")

// it runs a particular function after every set interval 
// time herre is in millisecons 1000ms = 1 s          
setInterval(function (){ 
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString()
}, 1000) 