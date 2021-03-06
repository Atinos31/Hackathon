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
//       flipCard(); - Included in Kirsty's carousel?       
//      }else{
//       drinkCountIncrease(); - Done
//   }
//   endGame() - Done
//   startbutton event listener - done

    let answerButton = $("#answer-btn");
    let startButton = $("#newgame");
    let nextButton = $(".next");
    let rightAnswers = 0;
    let answerCount = $(".answerCounter");
    let drinks = 0;
    let drinkCount = document.getElementById("drinkCounter");
    let turn = 0;
    let gameOver = true; 

    // Start button event listener
    $(startButton).on("click", function() {
            
        gameOver = false; 
        turn = 1;
        console.log(window.location)
        window.location.replace("/game.html");     
    });

    // Carousel functionality from Bootstrap
    $('.carousel').carousel('1', {
        interval: false, // The amount of time to delay between automatically cycling an item. If false, carousel will not automatically cycle.
        wrap: false //Whether the carousel should cycle continuously or have hard stops (default is true).
    });

    // Answer button event listener
    $(answerButton).on("click", function(e) {
        
        if ($(e.target).hasClass("right")) {
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
            $(nextButton).attr("aria-display", "visible");
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

    // Event listener for next card button.
    (nextButton).on("click", function() {
        if (turn <= 10, turn != 0) { 
            
            turn++;
            newCard(); // maybe this will need to call one of the carousel's built in functions (?)
           

        } else  {
           
            gameEnd(); 

        };
    });
    
    // ends the game
    function gameEnd() { //not 100% sure on that we'll have to test it
        
            $('.carousel').carousel('dispose'); // Destroys an element’s carousel.
            gameOver = true;
            window.location.replace("/end_game.html");

    }

    function newCard() { //this will have to edit the carousel's js
        
    }   
});