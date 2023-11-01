let intervalId

function randomIndex(){
    return Math.floor(Math.random()*16)
}

const randomColours = function ( ){
    const hex = '0123456789ABCDEF'
    let index 
    let color = '#' 
    for(let i=0;i<6;i++){
        index= randomIndex()
        color+= hex[index]
    } 
    return color
}

function colours(){
    document.body.style.backgroundColor = randomColours()
} 

document.querySelector('#start').addEventListener('click',function(){
    if(!intervalId){  // we wrote this because null can cause problems to handle the edge cases.
        intervalId= setInterval(colours,1000)
    }
})

document.querySelector('#stop').addEventListener('click',function(){
    clearInterval(intervalId)
    intervalId = null // we flushed out the variable not in use  and to write cleaner code 
})

