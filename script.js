// Write a function to get computer's choice
function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

// function that finds the winner
function findWinner (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return 'tie';
    }
    else if (
        playerSelection === 'rock' && computerSelection === "scissors" ||
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'paper'
    ) {
        return 'player';
    }
    else {
        return 'computer';
    }
}

//  function that will play one round
function playRound (playerSelection, computerSelection) {
    const result = findWinner(playerSelection, computerSelection);
    if (result == 'tie') {
        return "It's a tie!";
    }
    else if (result == 'player') {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else {
        return `Computer Win! ${computerSelection} beats ${playerSelection}`;
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));