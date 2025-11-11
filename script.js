

function getHumanChoice(){
let input = prompt("Rock, paper, or scissors?");
return input.toLowerCase();
}


function getComputerChoice (){

const randomNumber = Math.random()
if (randomNumber < 0.33){ 
    return "rock";
} else if(randomNumber < 0.66){
    return "paper";
} else  {
    return "scissors";
}
}



function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        console.log("It's a tie!");
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
    }
    else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
    }
}

    for (let i = 0; i < 5; i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);

        console.log(`Round ${i+1} Score: You ${humanScore} - Computer ${computerScore}`);

    }

}
  playGame();

 