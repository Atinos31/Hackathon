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

// Quiz App js

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questionlist.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn', 'question-btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questionlist = [
    {
        question: "What is St. Patrick said to have banished from Ireland?",
        answers: [
            {text: "Witches", "correct": false},
            {text: "Rats", "correct": false},
            {text: "Snakes", "correct": true}
        ]
    },
    {
        question: "Where was St. Patrick born?",
        answers: [
            {text: "Ireland", "correct": false},
            {text: "Britain", "correct": true},
            {text: "France", "correct": false}
        ]
    },
    {
        question: "Which St. Patrick's Day tradition is NOT observed in Ireland?",
        answers: [
            {text: "Wear green", "correct": false},
            {text: "Drink green beer", "correct": true},
            {text: "Go to the pub", "correct": false}
        ]
    },
    {
        question: "Where was the first St. Patrick's Day parade?",
        answers: [
            {text: "London", "correct": false},
            {text: "Dublin", "correct": false},
            {text: "New York", "correct": true}
        ]
    },
    {
        question: "What is the shamrock said to have represented to St. Patrick?",
        answers: [
            {text: "The Holy Trinity", "correct": true},
            {text: "The Resurrection", "correct": false},
            {text: "The Immaculate Conceptionn", "correct": false}
        ]
    },
    {
        question: "Why is St Patrick's Day celebrated on 17 March?",
        answers: [
            {text: "St Patrick's birthday", "correct": false},
            {text: "Day of St. Patrick's death", "correct": true},
            {text: "Day St. Patrick was baptised", "correct": false}
        ]
    },
    {
        question: "St. Patrick was the first bishop of which area in Ireland?",
        answers: [
            {text: "Donegal", "correct": false},
            {text: "Derry", "correct": false},
            {text: "Armagh", "correct": true}
        ]
    },
    {
        question: "Before 1798, which colour was associated with St. Patrick?",
        answers: [
            {text: "Green", "correct": false},
            {text: "Red", "correct": false},
            {text: "Blue", "correct": true}
        ]
    },
    {
        question: "Which city dyes their river green on St. Patrick's Day?",
        answers: [
            {text: "New York", "correct": false},
            {text: "Chicago", "correct": true},
            {text: "Boston", "correct": false}
        ]
    },
    {
        question: "Between 1903 and 1970, what was banned in Ireland on St. Patrick's Day?",
        answers: [
            {text: "Visiting pubs", "correct": true},
            {text: "Holding parades", "correct": false},
            {text: "Wearing leprechaun hats", "correct": false}
        ]
    }
]