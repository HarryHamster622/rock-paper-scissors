function getComputerChoice() {
    let rpsChoices = ['rock', 'paper', 'scissors'];
    let computerPick = rpsChoices[Math.floor(Math.random() * rpsChoices.length)]
    return computerPick;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper') {
        console.log("You lose! Paper beats rock!")
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') {
        console.log("You win! Rock beats scissors!")
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'rock') {
        console.log("It's a tie! We both picked rock!")
    }
}