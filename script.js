

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
    resultsDiv.textContent = `It's a tie! You both chose ${humanChoice}`;
    }

    if (humanScore === 5 || computerScore === 5){
        return;
    }

    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        resultsDiv.textContent = (`You win! ${humanChoice} beats ${computerChoice}!`);
    }
    else {
        computerScore++;
        resultsDiv.textContent = (`You lose! ${computerChoice} beats ${humanChoice}!`);
    }

    scoreDiv.textContent = `Score: You ${humanScore} - Computer ${computerScore}`;

    if (humanScore === 5){
        resultsDiv.textContent = "You win the game!";
    }

    if (computerScore === 5){
        resultsDiv.textContent = "Computer wins the game!";
    }
}

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const resultsDiv = document.querySelector('#results');
const scoreDiv = document.querySelector('#score');

rockBtn.addEventListener('click', () => playRound("rock", getComputerChoice()));
paperBtn.addEventListener('click', () => playRound("paper", getComputerChoice()));
scissorsBtn.addEventListener('click', () => playRound("scissors", getComputerChoice()));




}
  playGame();

 