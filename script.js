// Get random item
function getComputerChoice(choices) {
   const random = Math.floor(Math.random() * choices.length);
   const result = choices[random];
    return result;
}
const choices = ["rock", "paper", "scissors"];
// const result = getComputerChoice(RockPaperScissors);
console.log(getComputerChoice((choices)));

// Play one round of game

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors") {
        const result = "You Win! Rock beats Scissors";
        return result;
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        const result = "You Lose! Paper beats Rock";
        return result;
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        const result = "You Win! Scissors beats Paper";
        return result;
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        const result = "You Lose! Rock beats Scissors";
        return result;
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        const result = "You Lose! Scissors beats Paper";
        return result;
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        const result = "You Win! Paper beats Rock";
        return result;
    }
    else if (playerSelection == "rock" && computerSelection == "rock") {
        const result = "Its a Draw";
        return result;
    }
    else if (playerSelection == "paper" && computerSelection == "paper") {
        const result = "Its a Draw";
        return result;
    }
    else if (playerSelection == "scissors" && computerSelection == "scissors") {
        const result = "Its a Draw";
        return result;
    }
}

// console.log(oneRoundGame);
// console.log(oneRoundGame);
function game() {
    let playerScore = 0;
    let computerScore = 0;
    const numRounds = 5;
    for(let i = 0; i < numRounds; i++){
        const playerSelection = prompt("Enter your Choice: ").toLowerCase();
        const computerSelection = getComputerChoice(choices);
        const roundResult = playRound(playerSelection, computerSelection);
        console.log(`Round ${i+1}: ${roundResult}`);
        if (roundResult == "You Win! Rock beats Scissors" || roundResult == "You Win! Scissors beats Paper" || roundResult == "You Win! Paper beats Rock") {
            playerScore++;}
        else if (roundResult == "You Lose! Paper beats Rock" || roundResult == "You Lose! Rock beats Scissors" || roundResult == "You Lose! Scissors beats Paper") {
            computerScore++;}
    if (playerScore > computerScore) {
        console.log(`You Win! Score: ${playerScore}: ${computerScore}`);
    } else {
        console.log(`You Lose! Score: ${playerScore}: ${computerScore}`);
    }
    }
}
game();
// const gameResult = game();
// console.log(gameResult);