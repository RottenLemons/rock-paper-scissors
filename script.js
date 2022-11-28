let wordToInt = ['Rock', 'Paper', 'Scissors'];

function getUserInput() {
    userInput = prompt("Enter Rock, Paper or Scissors");
    userInput = userInput[0].toUpperCase() + userInput.slice(1).toLowerCase();
    return wordToInt.indexOf(userInput);
}

function game() {
    for (let i = 0; i < 5; i++) {

    }
}