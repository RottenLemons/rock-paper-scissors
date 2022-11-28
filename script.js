let wordToInt = ['Rock', 'Paper', 'Scissors'];
let userScore;
let comScore;

function getUserInput() {
    let userInput = prompt("Enter Rock, Paper or Scissors");
    userInput = userInput[0].toUpperCase() + userInput.slice(1).toLowerCase();
    return wordToInt.indexOf(userInput);
}

function getWinner(userInput, comInput) {
    let change = comInput - userInput;
    switch (change) {
        case -1:
            userScore++;
            return `You Win! ${wordToInt[userInput]} beats ${wordToInt[comInput]}`;
        case -2:
            comScore++;
            return `You Lose! ${wordToInt[comInput]} beats ${wordToInt[userInput]}`;
        case 1:
            comScore++;
            return `You Lose! ${wordToInt[comInput]} beats ${wordToInt[userInput]}`;            
        case 2:
            userScore++;
            return `You Win! ${wordToInt[userInput]} beats ${wordToInt[comInput]}`;
        default:
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
        } while (userInput == -1);
        let comInput = Math.floor(Math.random() * 3);
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