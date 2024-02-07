function getComputerChoice() {
    let rpsChoices = ['rock', 'paper', 'scissors'];
    let computerPick = rpsChoices[Math.floor(Math.random() * rpsChoices.length)]
    return computerPick;
}

let wins = 0;
let losses = 0;
let resultsDiv = document.querySelector('#results');
let playerScore = document.querySelector('#playerScore');
let computerScore = document.querySelector('#computerScore');
let finalWinner = document.querySelector('#finalScore');

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper') {
        resultsDiv.textContent = "You lose this round! Paper beats rock!";
        losses++;
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') {
        resultsDiv.textContent = "You win this round! Rock beats scissors!";
        wins++;
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'rock') {
        resultsDiv.textContent = "It's a tie! We both picked rock!";
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') {
        resultsDiv.textContent = "You win this round! Paper beats rock!";
        wins++;
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors') {
        resultsDiv.textContent = "You lose this round! Scissors beats paper!";
        losses++;
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'paper') {
        resultsDiv.textContent = "It's a tie! We both picked paper!";
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock') {
        resultsDiv.textContent = "You lose this round! Rock beats scissors!";
        losses++;
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') {
        resultsDiv.textContent = "You win this round! Scissors beats paper!";
        wins++;
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'scissors') {
        resultsDiv.textContent = "It's a tie! We both picked scissors!";
    }
    playerScore.textContent = "Player: " + wins;
    computerScore.textContent = "Computer: " + losses;

    if (wins == 5) {
        finalWinner.textContent = "You win! " + wins + ' - ' + losses;
    } else if (losses == 5) {
        finalWinner.textContent = 'You lose! ' + losses + ' - ' + wins;
    }

}