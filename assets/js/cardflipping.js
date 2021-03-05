/*
game starts with middle card face up - see wireframes
questions have options available
each option will have a data-set
if the data-set != right then it's Css changes - red background
else the card traverses to the back of the pile and flips over - showing the back
a card from the stack flips over and moves to the middle - shows front
*/

let answer = $(".option").data-value.value()
let AnswerCounter = 0
let DrinkCounter = 0

// increases correct answer count
function correctCounterIncrease(){
    increaseAnswer = AnswerCounter ++
    AnswerCounter = increaseAnswer
    return AnswerCounter
}

// increases drink count
function DrinkCounterIncrease(){
    increaseDrink = DrinkCounter ++
    DrinkCounter = increaseDrink
    return DrinkCounter
}

// changes the background of wrong answers
function WrongBackground(){
    let wrongStyle = {
        .option{
            background: red;
            color: white;
        }
    }
    this.$('.option').mount({style: wrongStyle});
}

// Main game functionality
if (answer == "right"){
    correctCounterIncrease(); // Done
    MoveBack();
    FlipOver();
    NewCard();
}else{
    WrongBackground(); // in progress
    DrinkCounterIncrease(); // Done
}