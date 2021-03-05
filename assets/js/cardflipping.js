$(document).ready(function() {
/*
game starts with middle card face up - see wireframes
questions have options available
each option will have a data-set
if the data-set != right then it's Css changes - red background
else the card traverses to the back of the pile and flips over - showing the back
a card from the stack flips over and moves to the middle - shows front

5/3 
Hey Keis, I have done quite a few changes as you will see. 
I added camelcase and renamed stuff. 
I have kept your main game functionality build bellow, with the appropriate changes
to function names. 
I have reworked the logic using jquery and the basic frame for it is showing I think.
Essentialy I combined a lot of the stuff you have written to save us code length. 
A lot of the functions a logic used come from my MS2 and are tested to work. 
Feel free to change anything.
Nikolas
*/

// Main game functionality
//   if (answer == "right"){
//       rightAnswerCountIncrease(); - Done
//       nextTurn(); - Done
//       newCard(); 
//       flipCard();       
//      }else{
//       drinkCountIncrease(); - Done
//   }
//   endGame() - Done
//   startbutton event listener - done

    let answerButton = $("answer-btn");
    let startButton = $(".newgame");
    let nextButton = $(".next");
    let rightAnswers = 0;
    let answerCount = documemt.getElementById("answerCounter");
    let drinks = 0;
    let drinkCount = document.getElementById("drinkCounter");
    let turn = 0;

    // Start button event listener
    $(startButton).on("click", function() {
            
            turn = 1;
            window.location.replace("/game.html");;            
                    
    });

    // Answer button event listener
    $(answerButton).on("click", function() {
        
        if (answerButton.hasClass("right")) {
            // changes the background of right answers
            $(this).css({ 
                "background": "green",
                "color": "white"
            });

            rightAnswerCountIncrease();
            nextTurn();

        } else {
            // changes the background of wrong answers
            $(this).css({ 
                "background": "red",
                "color": "white"
            });
            
            drinkCountIncrease();
            nextTurn();
        }
    });

    // increases right answer count
    function rightAnswerCountIncrease() {

        rightAnswers++;
        answerCount.innerHTML = rightAnswers;

    }

    // increases drink count
    function drinkCountIncrease() {

        drinks++;
        drinkCount.innerHTML = drinks;

    }

    // increments the turn count (to help with moving to the next card)
    function nextTurn() {
        if (turn <= 10, turn != 0) { //checks against total number of game turns (tbd)

            $(nextButton).attr("disabled", "false");
            newCard();
            turn++

        } else  {

            gameEnd(); 

        };
    }
    
    // ends the game
    function gameEnd() { //not 100% sure on that we'll have to test it

      window.location.replace("/endgame.html");

    }

    function newCard() {
        flipCard();
    }

    function flipCard() {

    }


});