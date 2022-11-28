let wordToInt = ['Rock', 'Paper', 'Scissors']; // Converts word to number, with the number being the index
let userScore; 
let comScore;

function getUserInput() {
    let userInput = prompt("Enter Rock, Paper or Scissors"); // Gets input from user
    userInput = userInput[0].toUpperCase() + userInput.slice(1).toLowerCase(); // Convert the input to the form seen in wordToInt
    return wordToInt.indexOf(userInput); // Returns index of the input
}

function getWinner(userInput, comInput) {
    let change = comInput - userInput; // Gets diff in the index of the inputs
    switch (change) {
        case -1: // If it is -1, it suggests that the index of userInput is after that of comInput, meaning you win
            userScore++;
            return `You Win! ${wordToInt[userInput]} beats ${wordToInt[comInput]}`;
        case -2: // If it is -1, it suggests that you are Scissors, while the com is Rock as they are 2 and 0 respectively
            comScore++;
            return `You Lose! ${wordToInt[comInput]} beats ${wordToInt[userInput]}`;
        case 1: // Same case as before but reversed
            comScore++;
            return `You Lose! ${wordToInt[comInput]} beats ${wordToInt[userInput]}`;            
        case 2: // Same case as before but reversed
            userScore++;
            return `You Win! ${wordToInt[userInput]} beats ${wordToInt[comInput]}`;
        default: // If it is 0, both indexes were the same
            return "It's a Tie!";
    }
}

function game() {
    userScore = 0;
    comScore = 0;
    for (let i = 0; i < 5; i++) {
        let userInput;
        do{
           userInput = getUserInput(); 
        } while (userInput == -1); // Checks if userInput is in list; indexOf returns -1 if it is not in the list
        let comInput = Math.floor(Math.random() * 3); // Gets a random number for comInput from 0 to 2
        console.log(comInput);
        console.log(getWinner(userInput, comInput));
        console.log(`User: ${userScore} Computer: ${comScore}`);
    }

    if (comScore > userScore) {
        console.log('You Lose!');
    } else {
        console.log('You Win!');
    }

    return;
}

game();