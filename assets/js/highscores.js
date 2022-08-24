let highScore = localStorage.getItem('userScore');
let highScoreList = document.getElementById('high-score-list');
highScoreList.innerText = JSON.stringify(userScore[0])

saveHighScore = (e) => {
    console.log("clicked")
    e.preventDefault();
}