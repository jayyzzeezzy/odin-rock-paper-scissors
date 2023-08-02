// variables
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

const resultText = document.querySelector('.result-message-text');
const playerScoreboard = document.querySelector('#player-score');
const computerScoreboard = document.querySelector('#computer-score');

// game
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    //add 'click' listener for each button
    button.addEventListener('click', () => {
        playerSelection = button.id;
        playRound(playerSelection, computerSelection);
    });
});

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

// UI
// display result message
function displayResult (message) {
    resultText.textContent = message;
};

// show running score
function showRunningScore (playerScore, computerScore) {
    playerScoreboard.textContent = playerScore;
    computerScoreboard.textContent = computerScore;
};

// show gameover UI
function displayEndgame (message) {
    showRunningScore(playerScore, computerScore);
    if (playerScore > computerScore) {
        displayResult(message);
    } else {
        displayResult(message);
    }
};

//  play one round of rock paper scissors
function playRound (playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        displayResult('Tie game');
    }
    else if (
        (playerSelection === 'rock' && computerSelection === "scissors") ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
        ) {
            playerScore++;
            showRunningScore(playerScore, computerScore);
            if (playerScore === 5) {
                displayEndgame('You are the final winner. Congrats!');
            }
            else {
                displayResult(`You win! ${playerSelection} beats ${computerSelection}`);
            }
    } else {
        computerScore++;
        showRunningScore(playerScore, computerScore);
        if (computerScore === 5) {
            displayEndgame('Computer is the final winner. Better luck next time!');
        }
        else {
            displayResult(`Computer Win! ${computerSelection} beats ${playerSelection}`);
        }
    };
};