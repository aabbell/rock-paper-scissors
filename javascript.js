
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
console.log(getComputerchoice());
