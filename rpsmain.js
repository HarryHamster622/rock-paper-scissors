function getComputerChoice() {
    let rpsChoices = ['rock', 'paper', 'scissors'];
    let computerPick = rpsChoices[Math.floor(Math.random() * rpsChoices.length)]
    return computerPick;
}

let wins = 0;
let losses = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper') {
        console.log("You lose! Paper beats rock!");
        losses++;
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') {
        console.log("You win! Rock beats scissors!");
        wins++;
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'rock') {
        console.log("It's a tie! We both picked rock!");
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') {
        console.log("You win! Paper beats rock!");
        wins++;
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors') {
        console.log("You lose! Scissors beats paper!");
        losses++;
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'paper') {
        console.log("It's a tie! We both picked paper!");
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock') {
        console.log("You lose! Rock beats scissors!");
        losses++;
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') {
        console.log("You win! Scissors beats paper!");
        wins++;
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'scissors') {
        console.log("It's a tie! We both picked scissors!")
    }
}

function game() {
    playRound(prompt('Rock, paper, or scissors?'), getComputerChoice())
    playRound(prompt('Rock, paper, or scissors?'), getComputerChoice())
    playRound(prompt('Rock, paper, or scissors?'), getComputerChoice())
    playRound(prompt('Rock, paper, or scissors?'), getComputerChoice())
    playRound(prompt('Rock, paper, or scissors?'), getComputerChoice())
    if (wins > losses) {
        console.log('You win the game! You won ' + wins + ' rounds and lost ' + losses + ' rounds.')
    } else {
        console.log('You lose! You won ' + wins + ' rounds ' + ' and lost ' + losses + ' rounds.')
    }
}