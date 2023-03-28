// Get random item
function getComputerChoice(arr) {
   const random = Math.floor(Math.random() * arr.length);
   const result = arr[random];
    return result;
}
const RockPaperScissors = ["rock", "paper", "scissors"];
const result = getComputerChoice(RockPaperScissors);
console.log(result);

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
const playerSelection = prompt("Enter your Choice: ").toLowerCase();
const computerSelection = result;
// console.log(playRound(playerSelection, computerSelection));

function game() {
    let times = 5;
    for(let i = 0; i < times; i ++ ){
        playRound(playerSelection, computerSelection)
    }
}
console.log(game());