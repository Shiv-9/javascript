const randomNumber = parseInt(Math.random()*100+1);

const submit = document.querySelector("#subt");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const userInput = document.querySelector("#guessField");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let preGuess = [];
let chances = 1;

let playGame = true ;

if(playGame){
    submit.addEventListener('click' , function (event) {
        event.preventDefault();
       const guess = parseInt(userInput.value);
       validateGuess(guess);
    })
}

function validateGuess(guess) {
 if(isNaN(guess)){
    alert("Please enter a valid number");
 } else if(guess < 1){
    alert("Please enter number greater than 1");
 } else if( guess >100){
    alert("Please enter number less than 100");
 } else {
    preGuess.push(guess)
    if(chances === 11){
        displayGuess(guess);
        displayMessage(`Game Over. Random Number is ${randomNumber}`);
        endGame();
    }
    else {
        displayGuess(guess);
        checkGuess(guess);
    }
 }
}

function checkGuess(guess) {
  if (guess === randomNumber){
    displayMessage("You guessed it right!!!");
    endGame();
  }
  else if(guess < randomNumber){
    displayMessage("Number is Too low")
  }
  else if(guess > randomNumber) {
    displayMessage("nujmber is Too high")
  }
}

function displayGuess(guess) {
  userInput.value = ''
  guessSlot.innerHTML +=`${guess}  `
  chances++
  remaining.innerHTML = `${11-chances} `
}


function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(guess) {
  userInput.value = ''
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML = `<h2 id ='newGame'> New Game </h2>`
}

function newGame(guess) {

}