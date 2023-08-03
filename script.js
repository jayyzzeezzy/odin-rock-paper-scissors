// variables
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

const resultText = document.querySelector('.result-message-text');
const playerScoreboard = document.querySelector('#player-score');
const computerScoreboard = document.querySelector('#computer-score');
const modal = document.querySelector('#modal');
const modalMessage = document.querySelector('.modal-message');
const closeModalBtn = document.querySelector('#restart');

// game
const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
    //add 'click' listener for each button
    button.addEventListener('click', () => {
        // event.stopPropagation();
        playerSelection = button.id;
        console.log(playerSelection);
        playRound(playerSelection, computerSelection);
    });
});

closeModalBtn.addEventListener('click', () => {
    modal.close();
    restartGame();
});

// UI
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
    modalMessage.textContent = message;
    modal.showModal();
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
                displayEndgame('You won!');
            }
            else {
                displayResult(`You win! ${playerSelection} beats ${computerSelection}`);
            }
    } else {
        computerScore++;
        showRunningScore(playerScore, computerScore);
        if (computerScore === 5) {
            displayEndgame('You lost!');
        }
        else {
            displayResult(`Computer Win! ${computerSelection} beats ${playerSelection}`);
        }
    };
};

// reset game UI
function restartGame () {
    playerScore = 0;
    computerScore = 0;
    showRunningScore(playerScore, computerScore);
    displayResult('First to 5 wins!');
};