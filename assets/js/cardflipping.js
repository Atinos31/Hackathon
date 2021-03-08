// Quiz App js
let rightAnswers = 0;
let answerCount = $(".answerCounter");
let drinks = 0
let drinkCount = document.getElementById("drinkCounter");
let turn = 0;
let gameOver = true 
let questionList
const ENDButton = document.getElementById('END-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

// An array contaiining all the possible questions and answers
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
    },
]

// Event listener for the next button
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

startGame()

// Flips the card
function flipCard() {
  let qCard = document.getElementById("question-card")  
  qCard.classList.add("flipped")
}

// Starts the game
function startGame() {
    flipCard()
    shuffledQuestions = questionlist.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

// Sets the next random question
function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

// Shows the randomly selected question
function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn', 'question-btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }else{
        button.dataset.wrong = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

// Resets button states
function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

// Checks if the selected answer is right
function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  const wrong = selectedButton.dataset.wrong

  if(correct){
    rightAnswers += 1
    document.getElementById("answers-score").innerHTML = rightAnswers;
  }else if(wrong){
    drinks += 1
    document.getElementById("drinks-score").innerHTML = drinks;
  }

  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })

  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    document.cookie = 'drinks='+drinks;
    document.cookie = 'answers='+rightAnswers;
    console.log(document.cookie);
    ENDButton.classList.remove('hide')
  }
}

// Sets correct or wrong status to answers
function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

// Clears correct or wrong status from answers
function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

