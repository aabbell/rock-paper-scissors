let playerSelection;
let computerSelection;
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".scissors");
let outcome = document.querySelector(".outcome");
let seletionMade = 0;

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
let playerScore =  0;
let computerScore = 0;
function playRound(playerSelection,computerSelection){
    result = checkWinner(playerSelection,computerSelection)
    if (result === 'Tie'){
        let p = document.createElement("p")
        p.textContent = `it's a tie`
        outcome.appendChild(p)
    } else if(result === 'player'){
        playerScore++
        let p = document.createElement("p")
        p.textContent = `player wins with a point of ${playerScore}`
        outcome.appendChild(p)      
    }else{
        computerScore++
        let p = document.createElement("p")
        p.textContent = `computer wins with a point of ${computerScore}`
        outcome.appendChild(p)            
    }
    
}
const final = (playerScore,computerScore) =>{
if (playerScore === 5){
    let h = document.createElement("h2");
    h.textContent = `player has won this round with a point of ${playerScore}`;
    outcome.appendChild(h);
   
}else if (computerScore === 5){
    let h = document.createElement("h2")
    h.textContent = `computer has won this round with a point of ${computerScore}`;
    outcome.append(h);
}
}
rock.addEventListener("click", () => {
    computerSelection = getComputerChoice();
    playerSelection = 'rock';
    playRound(playerSelection,computerSelection);
    final(playerScore,computerScore);
})

paper.addEventListener("click", () => {
    computerSelection = getComputerChoice();
    playerSelection = 'paper';
    playRound(playerSelection,computerSelection)
    final(playerScore,computerScore)
})

scissor.addEventListener("click", () => {
    computerSelection = getComputerChoice();
    playerSelection = 'scissor';
    playRound(playerSelection,computerSelection)
    final(playerScore,computerScore)
})