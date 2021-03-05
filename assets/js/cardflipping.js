/*
game starts with middle card face up - see wireframes
questions have options available
each option will have a data-set
if the data-set != right then it's Css changes - red background
else the card traverses to the back of the pile and flips over - showing the back
a card from the stack flips over and moves to the middle - shows front
*/

let answer = $(".option").data-value.value()

if (answer == "right"){
    correctCounterIncrease();
    MoveBack();
    FlipOver();
    NewCard();
}else{
    WrongBackground();
    DrinkCounterIncrease();
}