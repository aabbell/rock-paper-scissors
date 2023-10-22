
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
    if (player_selection = 'rock' && computer_selection == 'paper'){
        return "You Lose! Paper beats Rock";
    }
    else if (player_selection = 'rock'  && computer_selection == 'scissors'){
        return "You Win! Rock beats Scissors";
    }
    else if (player_selection = 'paper' && computer_selection == 'scissors'){
        return "You Lose! Scissors beats Rock"; 
    }
    else if (player_selection = 'paper'  && computer_selection == 'rock'){
        return "You Win! Paper beats Rock";
    }
    else if (player_selection = 'Scissors' && computer_selection == 'rock'){
        return "You Lose! Rock beats Sciccors";
    }
    else if (player_selection = 'Scissors'  && computer_selection == 'paper'){
        return "You Win! Scissors beats Paper";
    }
    else {
        return "Draw";
    }
}


function game(){
    for (let i = 1; i <= 5; i++){
        const player_selection = prompt("write your choices");
        const computer_selection = getComputerchoice();
        console.log(play_round(player_selection,computer_selection));
    }
}
console.log(game());