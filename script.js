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

// function that plays 5 rounds, keep score, and annouce winner
function game () {
    let playerWinCounts = 0;
    let computerWinCounts = 0;
    let tieCounts = 0;
    // round 1
    let computerSelection = getComputerChoice ();
    let playerSelection = prompt ('Please make a selection: rock, paper, or scissors?');
    let result = findWinner (playerSelection, computerSelection);
    if (result == 'tie') {
        tieCounts += 1;
        console.log ('It\'s a tie.')
    }
    else if (result == 'player') {
        playerWinCounts += 1;
        console.log ('Player win!')
    }
    else if (result == 'computer') {
        computerWinCounts += 1;
        console.log ('Computer win!')
    }
    else {
        console.log ('Invalid entry')
    }
    console.log (computerSelection)
    console.log (playerSelection)
    // round 2
    computerSelection = getComputerChoice ();
    playerSelection = prompt ('Please make a selection: rock, paper, or scissors?');
    result = findWinner (playerSelection, computerSelection);
    if (result == 'tie') {
        tieCounts += 1;
        console.log ('It\'s a tie.')
    }
    else if (result == 'player') {
        playerWinCounts += 1;
        console.log ('Player win!')
    }
    else if (result == 'computer') {
        computerWinCounts += 1;
        console.log ('Computer win!')
    }
    else {
        console.log ('Invalid entry')
    }
    console.log (computerSelection)
    console.log (playerSelection)
    // round 3
    computerSelection = getComputerChoice ();
    playerSelection = prompt ('Please make a selection: rock, paper, or scissors?');
    result = findWinner (playerSelection, computerSelection);
    if (result == 'tie') {
        tieCounts += 1;
        console.log ('It\'s a tie.')
    }
    else if (result == 'player') {
        playerWinCounts += 1;
        console.log ('Player win!')
    }
    else if (result == 'computer') {
        computerWinCounts += 1;
        console.log ('Computer win!')
    }
    else {
        console.log ('Invalid entry')
    }
    console.log (computerSelection)
    console.log (playerSelection)
    // round 4
    computerSelection = getComputerChoice ();
    playerSelection = prompt ('Please make a selection: rock, paper, or scissors?');
    result = findWinner (playerSelection, computerSelection);
    if (result == 'tie') {
        tieCounts += 1;
        console.log ('It\'s a tie.')
    }
    else if (result == 'player') {
        playerWinCounts += 1;
        console.log ('Player win!')
    }
    else if (result == 'computer') {
        computerWinCounts += 1;
        console.log ('Computer win!')
    }
    else {
        console.log ('Invalid entry')
    }
    console.log (computerSelection)
    console.log (playerSelection)
    // round 5
    computerSelection = getComputerChoice ();
    playerSelection = prompt ('Please make a selection: rock, paper, or scissors?');
    result = findWinner (playerSelection, computerSelection);
    if (result == 'tie') {
        tieCounts += 1;
        console.log ('It\'s a tie.')
    }
    else if (result == 'player') {
        playerWinCounts += 1;
        console.log ('Player win!')
    }
    else if (result == 'computer') {
        computerWinCounts += 1;
        console.log ('Computer win!')
    }
    else {
        console.log ('Invalid entry')
    }
    console.log (computerSelection)
    console.log (playerSelection)

    // annouce final winner
    if (playerWinCounts == computerWinCounts) {
        console.log ('Tie')
    }
    else if (playerWinCounts > computerWinCounts) {
        console.log ('Final winner is player!')
    }
    else {
        console.log ('Final winner is computer!')
    }
}

// call the game function to run 5 rounds of rock paper scissors
game ();