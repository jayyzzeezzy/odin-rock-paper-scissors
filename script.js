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

// function that plays a single round
function playOneRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return 'tie';
    }
    else if (
        playerSelection === 'rock' && computerSelection === "scissors" ||
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'paper'
    ) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else {
        return `Computer Win! ${computerSelection} beats ${playerSelection}`;
    }
}