// Get random item
function getComputerChoice(choices) {
   const random = Math.floor(Math.random() * choices.length);
   const result = choices[random];
    return result;
}


const choices = ["rock", "paper", "scissors"];


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

// Play round of 5 games, tracks score of each round.

function game() {
    let playerScore = 0;
    let computerScore = 0;
    const numRounds = 3;

    
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
        const playerSelection = btn.value.toString();
        const computerSelection = getComputerChoice(choices);
        const roundResult = playRound(playerSelection, computerSelection);
        const computerChoices = document.getElementById('computer');
        computerChoices.textContent = computerSelection;
        const matchResult = document.getElementById('player');
        matchResult.textContent = `${roundResult}`;
           
        
    if (roundResult == "You Win! Rock beats Scissors" || roundResult == "You Win! Scissors beats Paper" || roundResult == "You Win! Paper beats Rock") {
        playerScore++;}
    else if (roundResult == "You Lose! Paper beats Rock" || roundResult == "You Lose! Rock beats Scissors" || roundResult == "You Lose! Scissors beats Paper") {
        computerScore++;}
    if (playerScore > computerScore) {
        const plScore = document.getElementById('finalResult');
        plScore.textContent = `You Win! Score: ${playerScore}: ${computerScore}`;
    } else {
        const plScore = document.getElementById('finalResult');
        plScore.textContent = `You Lose! Score: ${playerScore}: ${computerScore}`;
    }
    
    if (playerScore == numRounds || computerScore == numRounds) {
        const gametotal = document.getElementById('totalgame');
        gametotal.textContent = `Final Score: Player - ${playerScore}, Computer - ${computerScore}`;
        buttons.forEach(btn => btn.disabled = true);
    }
});
});
}

game();

// button parameters

jQuery(document).ready(($) => {
    $('.quantity').on('click', '.plus', function(e) {
        let $input = $(this).prev('input.qty');
        let val = parseInt($input.val());
        $input.val( val+1 ).change();
    });

    $('.quantity').on('click', '.minus', 
        function(e) {
        let $input = $(this).next('input.qty');
        const val = parseInt($input.val());
        if (val > 0) {
            $input.val( val-1 ).change();
        } 
    });
});
