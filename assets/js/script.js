let timerEl = document.querySelector("#timer");
let viewScoreEl = document.querySelector(".view-highscore");
let topRowEl = document.querySelector("#top-row");
let innerBoxEl = document.querySelector("#inner-box");
let gameAreaEl = document.querySelector("#game-area");
let startButton = document.querySelector("#start-button");
let nextButton = document.querySelector("#next-button");

// var timeLeft = questionBank.length * 10;
var q = 0;
var s = 0;
var score = 0;
var leaderBoard = [];
var timeInterval;

startButton.addEventListener("click", startQuiz);

// getScore();

// Timer Element
function timer() {
  timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft + " Seconds Remaining!";

    if (timeLeft === 0 || q >= questionBank.length) {
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
  gameAreaEl.classList.remove("hide");
  nextButton.classList.remove("hide");
  nextQuestion();
}
// End Start Game
// Set up the next question
function nextQuestion() {
    
}
//End Next question
// Grade Answer selection
function selectAnswer() {}
// End Grade Answer selection

//TODO: Make a timer that counts down from 100 seconds, and with each incorrect input (either halves the time or subtracts 10)

//TODO: Make the start button begin the quiz

//TODO: Make the quiz. Will need 5 or so questions with 4 answers each. Quiz will need to hide previous question's content and show next question's content (buttons, question)

//TODO: Make the questions display correct or incorrect

//TODO: Store highscore data locally, make it accessible/readable on a second html document that users can get to by clicking "view highscores" on main page

//TODO: Enter initials submit form at end of the quiz

//TODO: Clear button to clear localstorage of highscores.
