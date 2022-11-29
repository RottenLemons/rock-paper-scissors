let wordToInt = ['Rock', 'Paper', 'Scissors']; // Converts word to number, with the number being the index
let userScore = 0; 
let comScore = 0;

const buttons = Array.from(document.querySelectorAll(".buttons button"));
const result = document.querySelector('.result');
const winner = document.querySelector('.winner');
const score = document.querySelector('.score');

buttons.forEach((button) => {
    button.addEventListener('click' ,(e) => {startRound(e);});
});

function startRound(e) {
    let userInput = e.target.classList[0][0].toUpperCase() +  e.target.classList[0].slice(1).toLowerCase();
    let comInput = Math.floor(Math.random() * 3);
    getResult(wordToInt.indexOf(userInput), comInput);
}

function getResult(userInput, comInput) {
    let change = comInput - userInput; // Gets diff in the index of the inputs
    switch (change) {
        case -1: // If it is -1, it suggests that the index of userInput is after that of comInput, meaning you win
            userScore++;
            result.textContent = `You Win! ${wordToInt[userInput]} beats ${wordToInt[comInput]}`;
            break;
        case -2: // If it is -1, it suggests that you are Scissors, while the com is Rock as they are 2 and 0 respectively
            comScore++;
            result.textContent = `You Lose! ${wordToInt[comInput]} beats ${wordToInt[userInput]}`;
            break;
        case 1: // Same case as before but reversed
            comScore++;
            result.textContent = `You Lose! ${wordToInt[comInput]} beats ${wordToInt[userInput]}`;   
            break;         
        case 2: // Same case as before but reversed
            userScore++;
            result.textContent = `You Win! ${wordToInt[userInput]} beats ${wordToInt[comInput]}`;
            break;
        default: // If it is 0, both indexes were the same
            result.textContent = "It's a Tie!";
    }
    score.textContent = `${userScore} - ${comScore}`;
    getWinner();
}

function getWinner() {
    if (userScore === 5) {
        winner.textContent = 'You Won!';
    } else if (comScore === 5) {
        winner.textContent = 'You Lost!';
    }
    buttons.forEach((button) => {
        button.removeEventListener('click', (e) => {startRound(e);});
    });
}