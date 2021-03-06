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

    const answerButton = $(".answer-btn");
    const startButton = $("#newgame");
    const nextButton = $(".next");
    const restartButton = $("#restart");
    let rightAnswers = 0;
    let answerCount = $("#answerCounter");
    let drinks = 0;
    let drinkCount = $("#drinkCounter");
    let turn = 0;
    let gameOver = Boolean; 

    // Start button event listener
    $(startButton).on("click", function() {
            
        gameOver = false; 
        turn = 1;
        window.location.replace('/game.html');
        $(".carousel").carousel('1');

    });
    // increases right answer count
    function rightAnswerCountIncrease() {

        rightAnswers++;
        console.log(rightAnswers)
        $('#answerCounter').innerHTML = rightAnswers;
        console.log("Right answer count increased")
    }

    // Carousel functionality from Bootstrap
    $('.carousel').carousel({
        interval: false, // The amount of time to delay between automatically cycling an item. If false, carousel will not automatically cycle.
        wrap: false //Whether the carousel should cycle continuously or have hard stops (default is true).
    });
    
    // A function to start the next turn
    function nextTurn(){
        console.log("next turn")
    }

    // Answer button event listener
    $(answerButton).on("click", function() {
        
        if ($(this).hasClass("right")) {
            // changes the background of right answers
            $(this).css({ 
                "background": "#008000",
                "color": "#FFFFFF"
            });
            console.log("Right answer clicked")
            rightAnswerCountIncrease();
            nextTurn();

        } else {
            // changes the background of wrong answers
            $(this).css({ 
                "background": "red",
                "color": "#FFFFFF"
            });
            
            drinkCountIncrease();
            $(nextButton).attr("aria-display", "visible");
        }
    });


    // increases drink count
    function drinkCountIncrease() {

        drinks++;
        drinkCount.innerHTML = drinks;

    }

    // Event listener for next card button.
    $(nextButton).on("click", function() {
        if (turn <= 10, turn != 0) { 
            
            turn++;
            newCard(); // maybe this will need to call one of the carousel's built in functions (?)
           

        } else  {
           
            gameEnd(); 

        };
    });

    // Event listener for restart game button
    $(restartButton).on("click", function() {

        $('.carousel').carousel('dispose');
        gameOver = true;
        window.location.replace("/index.html");
    });
    
    // ends the game
    function gameEnd() { //not 100% sure on that we'll have to test it
        
            $('.carousel').carousel('dispose'); // Destroys an element’s carousel.
            gameOver = true;
            window.location.replace("/end_game.html");

    }

    // moves the deck to the next card
    function newCard() { //this will have to edit the carousel's js
        
    }   
});