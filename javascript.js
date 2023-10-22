
function getComputerchoice(){
    let choicenum = Math.floor(Math.random()*3);
    if (choicenum === 0){
        return 'Rock';
    }
    else if (choicenum === 1){
        return 'Paper';
    }
    else (choicenum === 2)
       return 'Sciccors';
}


function play_round(player_selection, computer_selection){
    if (player_selection === 'rock' ||'Rock'||"ROCK" && computer_selection === 'paper'||'Paper'||'PAPER'){
        return "You Lose! Paper beats Rock";
    }
    else if (player_selection === 'rock' ||'Rock'||"ROCK" && computer_selection === 'scissors'||'Scissors'||'SCISSORS'){
        return "You Win! Rock beats Scissors";
    }
    else if (player_selection === 'paper' ||'Paper'||"PAPER" && computer_selection === 'scissors'||'Scissors'||'SCISSORS'){
        return "You Lose! Scissors beats Rock"; 
    }
    else if (player_selection === 'paper' ||'Paper'||"PAPER" && computer_selection === 'rock'||'Rock'||'ROCK'){
        return "You Win! Paper beats Rock";
    }
    else if (player_selection === 'Scissors' ||'Scissors'||"SCISSORS" && computer_selection === 'rock'||'Rock'||'ROCK'){
        return "You Lose! Rock beats Sciccors";
    }
    else if (player_selection === 'Scissors' ||'Scissors'||"SCISSORS" && computer_selection === 'paper'||'Paper'||'PAPER'){
        return "You Win! Scissors beats Paper";
    }
    else {
        return "Draw";
    }
}
const player_selection = "rock";
const computer_selection = getComputerchoice();
console.log(play_round(player_selection,computer_selection));