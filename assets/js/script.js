let timerEl = document.querySelector("#timer");
let viewScoreEl = document.querySelector(".view-highscore");
let topRowEl = document.querySelector("#top-row");
let innerBoxEl = document.querySelector("#inner-box");
let gameAreaEl = document.querySelector("#game-area");
let startButton = document.querySelector("#start-button");
let nextButton = document.querySelector("#next-button");
let questionEl = document.querySelector("#question");
let answerButtons = document.querySelector("#answer-buttons");
document.getElementById;

let questions = [
  {
    question: "Which is not one of the 3 base languages of web development?",
    answers: [
      { text: "Python", correct: true },
      { text: "HTML", correct: false },
      { text: "CSS", correct: false },
      { text: "JavaScript", correct: false },
    ],
  },
  {
    question:
      "To fetch an HTML element by its ID, which of the following can we use?",
    answers: [
      { text: "document.querySelector", correct: false },
      { text: "document.querySelectorAll", correct: false },
      { text: "document.getElementById", correct: true },
      { text: "document.addEventListener", correct: false },
    ],
  },
  {
    question: "To make your HTML more accessible, you should use ____ Tags?",
    answers: [
      { text: "Eclectic", correct: false },
      { text: "Semantic", correct: true },
      { text: "Romantic", correct: false },
      { text: "Mantis", correct: false },
    ],
  },
  {
    question:
      "What selector should you use to create variables in a CSS stylesheet?",
    answers: [
      { text: "*", correct: false },
      { text: ":before", correct: false },
      { text: ":var", correct: false },
      { text: ":root", correct: true },
    ],
  },
  {
    question:
      "If a variable is declared in the beginning of a javascript document, it has a ____ scope?",
    answers: [
      { text: "universal", correct: false },
      { text: "local", correct: false },
      { text: "global", correct: true },
      { text: "wide", correct: false },
    ],
  },
];

let currentQuestion;
let randomizeQuestions;

let timeLeft = 101;
let score = 0;
let leaderBoard = [];
let timeInterval;

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", () => {
  currentQuestion++;
  nextQuestion();
});

// getScore();

// Timer Element
function startTimer() {
  timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft + " Seconds Remaining!";

    if (timeLeft <= 0) {
      clearInterval(timeInterval);
      gameOver();
    }
  }, 1000);
}
// End Timer
// Start Game
function startQuiz() {
  console.log("started");
  startButton.classList.add("hide");
  randomizeQuestions = questions.sort(() => 0.5 - Math.random());
  currentQuestion = 0;
  gameAreaEl.classList.remove("hide");
  nextButton.classList.remove("hide");
  nextQuestion();
  startTimer();
}
// End Start Game

// Set up the next question
function nextQuestion() {
  clearPlaceholders();
  console.log(currentQuestion);
  if (currentQuestion < questions.length) {
    showQuestions(randomizeQuestions[currentQuestion]);
  }
  else {
    gameOver(); 
  }
}

//End Next question

// Show Questions
function showQuestions(questions) {
  questionEl.innerText = questions.question;
  questions.answers.forEach((answer) => {
    var button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("button");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", chooseAnswer);
    answerButtons.appendChild(button);
  });
}
// End Show Questions

// Clear out placeholder buttons AND buttons created with each question
function clearPlaceholders() {
  nextButton.classList.add("hide");
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}
//End Clear out buttons from prev question

// Grade Answer selection
function chooseAnswer(s) {
  let chosenA = s.target;
  let correct = chosenA.dataset.correct;
  console.log(chosenA);
  console.log(correct);
  if (!correct) {
    timeLeft -= 15;
  }
  setClass(document.body, correct);
  Array.from(answerButtons.children).forEach((button) => {
    setClass(button, button.dataset.correct);
  });
  if (currentQuestion + 1 < randomizeQuestions.length) {
    nextButton.classList.remove("hide")
  }
  else {
    var finishButton = document.createElement("button");
    finishButton.innerText = 'Save Score';
    finishButton.classList.add("button");
    
    finishButton.addEventListener("click", highScores);
    answerButtons.appendChild(finishButton);
  };
  nextButton.classList.remove("hide");
}
// End Grade Answer selection

function setClass(element, correct) {
  clearClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

function gameOver() {
    alert("Game over!")
    return window.location.assign("./highscores.html")
  let userScore = {
    initials: "ns",
    score: timeLeft,
  };
  localStorage.setItem("userScore", JSON.stringify(userScore));
  console.log(userScore);
}

//TODO: Make a timer that counts down from 100 seconds, and with each incorrect input (either halves the time or subtracts 10)

//TODO: Make the start button begin the quiz

//TODO: Make the quiz. Will need 5 or so questions with 4 answers each. Quiz will need to hide previous question's content and show next question's content (buttons, question)

//TODO: Make the questions display correct or incorrect

//TODO: Store highscore data locally, make it accessible/readable on a second html document that users can get to by clicking "view highscores" on main page

//TODO: Enter initials submit form at end of the quiz

//TODO: Clear button to clear localstorage of highscores.
