let humanScore = 0;
let computerScore = 0;

function getHumanChoice(){
let input = prompt("Rock, paper, or scissors?");
return input.toLowerCase();
}
console.log(getHumanChoice())


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
console.log(getComputerChoice());



function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        console.log("It's a tie!");
    }
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);
 