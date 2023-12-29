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
            console.log("You Lose! Paper beats Rock");
            return "computer";
        }else if(computerChoice === "scissors"){
            console.log("You Won! Rock beats Scissors");
            return "player";
        }else{
            console.log("Tie!");
            return "tie";
        }
    } else if (playerChoice === "paper"){
        if (computerChoice === "paper"){
            console.log("Tie!");
            return "tie";
        }else if(computerChoice === "scissors"){
            console.log("You Lose! Scissors beats Paper");
            return "computer";
        }else{
            console.log("You Won! Paper beats Rock");
            return "player";
        }
    } else {
        if (computerChoice === "paper"){
            console.log("You Won! Scissor beats Paper");
            return "player";
        }else if(computerChoice === "scissors"){
            console.log("Tie!");
            return "tie";
        }else{
            console.log("You Lose! Rock beats Scissors");
            return "computer";
        }
    }
}

function game (){

    let playerScore = 0;
    let computerScore = 0;
    let rounds = 1;

    while(rounds <= 5){
        let playerChoice = playerSelection();
        let computerChoice = getComputerChoice();
        let result = playRound(playerChoice, computerChoice)
        if (result === "player"){
            playerScore += 1;
            rounds += 1;
        }else if (result === "computer"){
            computerScore += 1;
            rounds += 1;
        }
    }
 
    if (computerScore > playerScore){
        console.log("You lose " + playerScore + " : " + computerScore);
    }else{
        console.log("You Won " + playerScore + " : " + computerScore )
    }
}
    
