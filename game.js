let gameLoop = () => {

    let computerScore = 0;
    let playerScore = 0;
    while (playerScore != 3 && computerScore != 3){
        let result = game();
        if (result === "player"){
            playerScore += 1;
            console.log(`Player: ${playerScore} | Computer: ${computerScore}`)
        }
        if (result === "computer"){
            computerScore += 1;
            console.log(`Player: ${playerScore} | Computer: ${computerScore}`)
        }
        // document.getElementById('playerScore').innerHTML = `Player: ${playerScore}`;
        // document.getElementById('computerScore').innerHTML = `Computer: ${computerScore}`;
    }

    if (playerScore > computerScore){
        console.log("Player wins!")
    }else {
        console.log("Computer wins!")
    }
}

let game = () => {
    let choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * 3)];

    let userInput = prompt("Make your choice").toLocaleLowerCase();

    if (userInput === computerChoice) {
        console.log(`Player: ${userInput} | Computer ${computerChoice} | Result: Tie`)
        return "tie";
    }
    else{
        if (userInput === "rock") {
            if (computerChoice === "paper"){
                console.log(`Player: ${userInput} | Computer ${computerChoice} | Result: Computer`)
                return "computer"
            }
            else {
                console.log(`Player: ${userInput} | Computer ${computerChoice} | Result: Player`)
                return "player"
            }
        }
        if (userInput === "paper"){
            if (computerChoice === "scissors"){
                console.log(`Player: ${userInput} | Computer ${computerChoice} | Result: Computer`)
                return "computer"
            }
            else {
                console.log(`Player: ${userInput} | Computer ${computerChoice} | Result: Player`)
                return "player"
            }
        }
        if (userInput === "scissors"){
            if (computerChoice === "rock"){
                console.log(`Player: ${userInput} | Computer ${computerChoice} | Result: Computer`)
                return "computer"
            } 
            else {
                console.log(`Player: ${userInput} | Computer ${computerChoice} | Result: Player`)
                return "player"
            }
        }
    }
}