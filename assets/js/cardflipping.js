/*
game starts with middle card face up - see wireframes
questions have options available
each option will have a data-set
if the data-set != right then it's Css changes - red background
else the card traverses to the back of the pile and flips over - showing the back
a card from the stack flips over and moves to the middle - shows front
*/

let answer = $("#answer-btn").data-value.value()
let answerCounter = 0
let drinkCounter = 0

// increases correct answer count
function correctCounterIncrease(){
    increaseAnswer = answerCounter ++
    answerCounter = increaseAnswer
    return answerCounter
}

// increases drink count
function drinkCounterIncrease(){
    increaseDrink = drinkCounter ++
    drinkCounter = increaseDrink
    return drinkCounter
}

// changes the background of wrong answers
function wrongAnswer(){
    let answerWrong = $("#answer-btn").css({
        "background": "red",
        "color": "white"
        }); 
    }
    this.$("#answer-btn").mount({style: answerWrong});
}

// Main game functionality
if (answer == "right"){
    correctCounterIncrease(); // Done
    moveBack();
    flipOver();
    newCard();
}else{
    wrongAnswer(); // Done
    drinkCounterIncrease(); // Done
}