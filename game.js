const CHOICES = ["rock", "paper", "scissors"]

function getComputerChoice () {
    const computerChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
    return computerChoice;
}

function playerSelection () {

    let keepAsking = true;
    while(keepAsking){
        let = playerChoice = prompt("Choose: Rock, Paper or Scissors?")

        playerChoice.toLowerCase();
        if (CHOICES.includes(playerChoice)){
            break;
        }else{
            console.log("Your choice not one of: Rock, Paper or Scissors. Choose again")
            continue;
        }
    }
    return playerChoice;
    
}