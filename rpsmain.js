function getComputerChoice() {
    let rpsChoices = ['rock', 'paper', 'scissors'];
    let computerPick = rpsChoices[Math.floor(Math.random() * rpsChoices.length)]
    return computerPick;
}

let wins = 0;
let losses = 0;
let resultsDiv = document.querySelector('#results');

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper') {
        resultsDiv.textContent = "You lose this round! Paper beats rock!";
        losses++;
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') {
        resultsDiv.textContent = "You win! Rock beats scissors!";
        wins++;
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'rock') {
        resultsDiv.textContent = "It's a tie! We both picked rock!";
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') {
        resultsDiv.textContent = "You win! Paper beats rock!";
        wins++;
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors') {
        resultsDiv.textContent = "You lose! Scissors beats paper!";
        losses++;
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'paper') {
        resultsDiv.textContent = "It's a tie! We both picked paper!";
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock') {
        resultsDiv.textContent = "You lose! Rock beats scissors!";
        losses++;
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') {
        resultsDiv.textContent = "You win! Scissors beats paper!";
        wins++;
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'scissors') {
        resultsDiv.textContent = "It's a tie! We both picked scissors!";
    }
}