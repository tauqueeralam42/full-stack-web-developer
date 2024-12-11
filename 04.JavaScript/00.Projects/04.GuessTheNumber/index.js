let randomNumber = Math.round(Math.random()*100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.remaining');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const guess = userInput.value;
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number');
    }else if(guess < 1){
        alert('Please enter number greater than equal to 1');
    }else if(guess > 100){
        alert('Please enter number less than equal to 100');
    }else{
        prevGuess.push(guess);
        if(numGuess === 5){
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame()
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right`);
        endGame();
    }else if( guess < randomNumber){
        displayMessage(`Your guess is Low`);
    }else if( guess > randomNumber){
        displayMessage(`Your guess is High`);
    }

}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;

}

function displayGuess(guess){
    userInput.value = "";
    if(numGuess === 5){
        guessSlot.innerHTML += `${guess}`;
    }else{
        guessSlot.innerHTML += `${guess}, `;
    }
    numGuess++;
    remaining.innerHTML = `${6 - numGuess}`;

}

function endGame(){
    userInput.value = "";
    userInput.setAttribute('disabled','');
    p.innerHTML = `<button id = "newGame" class = 'btn' >Start new Game</button>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameBtn = document.querySelector('#newGame');
    newGameBtn.addEventListener('click', (e) => {
        randomNumber = Math.round(Math.random()*100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = "";
        remaining.innerHTML = `${6 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        displayMessage('');
        playGame = true;
    })

}