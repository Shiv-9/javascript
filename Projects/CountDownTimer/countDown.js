const endDate = "1 November 2023 10:00 PM"
document.querySelector("#end-date").innerHTML = endDate 


const nodes = document.querySelectorAll("input[type='text']")
setInterval(function () {
    const end = new Date(endDate)
    const currentDate = new Date()
    const diff = (end-currentDate)/1000
    nodes[0].value = Math.floor((diff/3600)/24)
    nodes[1].value = Math.floor((diff/3600)%24)
    nodes[2].value = Math.floor((diff/60)%60)
    nodes[3].value = Math.floor(diff%60)
 },1000)
