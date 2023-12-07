let playerSelection;
let computerSelection;
for (let i = 1; i <=5; i++){
    let playerSelection = prompt("please enter rock, paper or scissor").toLowerCase();
}

let playerScore = 0;
let computerScore = 0;

for(let i = 1; i <= 5; i++){
    function getComputerChoice (){
        if(choice === 0){
            return 'rock';
        }else if (choice === 1){
            return 'paper';
        }else {
            return 'scissor';
        }
        
        }
    let choice = Math.floor(Math.random()*3);
    let computerSelection = getComputerChoice();
}

function playRound(playerSelection,computerSelection){
    
    if ((playerSelection === 'rock' && computerSelection === 'scissor')||
       (playerSelection === 'scissor' && computerSelection === 'paper')||
       (playerSelection === 'paper' && computerSelection === 'rock')){
            playerScore++;
    }else if((playerSelection === 'rock' && computerSelection === 'paper')||
            (playerSelection === 'scissor' && computerSelection === 'rock')||
            (playerSelection === 'paper' && computerSelection === 'scissor')){
                computerScore++;
    }else {
        return 'Tie';
    }
}
for (let i = 1; i <= 5; i++){
    console.log(playRound(playerSelection,computerSelection));
}
function result(playerscore,computerScore){
    if (playerscore > computerScore){
        console.log("player wins");
    }else{
        console.log("computer wins");
    }
}
console.log(result(playerScore,computerScore));