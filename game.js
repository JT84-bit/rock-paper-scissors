const CHOICES = ["rock", "paper", "scissors"]
let PLAYER_SCORE = 0;
let COMPUTER_SCORE = 0;

let round = document.querySelector('#round');
let scores = document.querySelector('#scores')
round.textContent = "Take your pick"
scores.textContent = `Player Scoce :${PLAYER_SCORE} - Computer Score :${COMPUTER_SCORE}`;

function getComputerChoice () {
    let computerChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
    return computerChoice;
}

function playRound (playerChoice){

    let computerChoice = getComputerChoice();

    if (playerChoice === "rock"){
        if (computerChoice === "paper"){
            COMPUTER_SCORE += 1;
            update("You Lose! Paper beats Rock");
        }else if(computerChoice === "scissors"){
            PLAYER_SCORE += 1;
            update("You Won! Rock beats Scissors");
        }else{
            update("Tie!");
        }
    } else if (playerChoice === "paper"){
        if (computerChoice === "paper"){
            update("Tie!");
        }else if(computerChoice === "scissors"){
            COMPUTER_SCORE += 1;
            update("You Lose! Scissors beats Paper");
        }else{
            PLAYER_SCORE += 1;
            update("You Won! Paper beats Rock");
        }
    } else {
        if (computerChoice === "paper"){
            PLAYER_SCORE += 1;
            update("You Won! Scissor beats Paper");
        }else if(computerChoice === "scissors"){
            update("Tie!");
        }else{
            COMPUTER_SCORE += 1;
            update("You Lose! Rock beats Scissors");          
        }
    }

    if (COMPUTER_SCORE === 5){
        update("Computer has WON " + COMPUTER_SCORE + " : " + PLAYER_SCORE + "!")
        COMPUTER_SCORE = 0;
        PLAYER_SCORE = 0;
    } else if (PLAYER_SCORE === 5){
        update("You have WON " + PLAYER_SCORE + " : " + COMPUTER_SCORE + "!")
        COMPUTER_SCORE = 0;
        PLAYER_SCORE = 0;
    }
}

const rockButton = document.querySelector('#rock');
rockButton.addEventListener('click', () => {
  playRound("rock");
});

const paperButton = document.querySelector('#paper');
paperButton.addEventListener('click', () => {
  playRound("paper");
});

const scissorsButton = document.querySelector('#scissors');
scissorsButton.addEventListener('click', () => {
  playRound("scissors");
});

function update(roundResult){

    round.textContent = roundResult;
    scores.textContent = `Player Scoce :${PLAYER_SCORE} - Computer Score :${COMPUTER_SCORE}`;
}


