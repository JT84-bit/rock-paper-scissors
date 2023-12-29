const CHOICES = ["rock", "paper", "scissors"]

function getComputerChoice () {
    let computerChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
    return computerChoice;
}

function playerSelection () {

    let keepAsking = true;
    while(keepAsking){
        let = playerChoice = prompt("Choose: Rock, Paper or Scissors?")

        playerChoice = playerChoice.toLowerCase();
        if (CHOICES.includes(playerChoice)){
            break;
        }else{
            console.log("Your choice not one of: Rock, Paper or Scissors. Choose again")
            continue;
        }
    }
    return playerChoice;
}

function playRound (playerChoice, computerChoice){

    if (playerChoice === "rock"){
        if (computerChoice === "paper"){
            return "You Lose! Paper beats Rock"
        }else if(computerChoice === "scissors"){
            return "You Won! Rock beats Scissors"
        }else{
            return "Tie!"
        }
    } else if (playerChoice === "paper"){
        if (computerChoice === "paper"){
            return "Tie!"
        }else if(computerChoice === "scissors"){
            return "You Lose! Scissors beats Paper"
        }else{
            return "You Won! Paper beats Rock"
        }
    } else {
        if (computerChoice === "paper"){
            return "You Won! Scissor beats Paper"
        }else if(computerChoice === "scissors"){
            return "Tie!"
        }else{
            return "You Lose! Rock beats Scissors"
        }
    }
}

function game (){

    let playerChoice = playerSelection();
    let computerChoice = getComputerChoice();
    console.log(playRound(playerChoice, computerChoice));
}
    
