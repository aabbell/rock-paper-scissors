let playerSelection;
let computerSelection;


let options = ['rock','paper','scissor']

function getComputerChoice(){
    let chocie = options[Math.floor(Math.random()*3)]
    return chocie;
}

function checkWinner(playerSelection,computerSelection){
    if (playerSelection === computerSelection){
        return "Tie";
    }else if ((playerSelection === 'rock' && computerSelection === 'scissor')||
    (playerSelection === 'paper' && computerSelection === 'rock')||
    (playerSelection === 'scissor' && computerSelection === 'paper')){
        return 'player';
    }else{
        return 'computer';
    }
}
function playRound(playerSelection,computerSelection){
    result = checkWinner(playerSelection,computerSelection)
    if (result === 'Tie'){
        return "It's a tie!"
    } else if(result === 'player'){
        return "player Wins";
    }else{
        return "computer Wins"
    }
}
let playerScore =  0;
let computerScore = 0;
for (let i =0; i < 5;  i++){
    playerSelection = prompt("choose between rock, paper, scissors").toLowerCase();
    computerSelection = getComputerChoice();
    final = playRound(playerSelection,computerSelection)
    console.log(final)
    if (checkWinner(playerSelection,computerSelection) === 'player'){
        playerScore++
    }else if (checkWinner(playerSelection,computerSelection) === 'computer'){
        computerScore++
    }
    }
if (playerScore > computerScore){
    console.log(`player wins with a score of ${playerScore}`)
}else if (playerScore < computerScore){
    console.log(`computer wins with a score of ${computerScore}`)
}

