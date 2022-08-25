let highScore = localStorage.getItem('userScore');
let highScoreList = document.getElementById('high-score-list');
let initialsEl = document.getElementById('initials')
let scoresEl = document.getElementById('high-score-list')

let lastInitials = JSON.parse(localStorage.getItem('userScore'))
// highScoreList.innerText = JSON.stringify(userScore[0])
lastInitials.sort((a, b) => {
    return b.score - a.score;
  });
let mostRecentPlayer = lastInitials.slice(0, 10);
console.log(mostRecentPlayer);
for (let i = 0; i < mostRecentPlayer.length; i++) {
    let initials = mostRecentPlayer[i].initials;
    let score = mostRecentPlayer[i].score;

    let playerInitialsDiv = document.createElement("div");
    initialsEl.appendChild(playerInitialsDiv);

    let individualInitialsEl = document.createElement("label");
    individualInitialsEl.textContent = initials;
    playerInitialsDiv.appendChild(individualInitialsEl);


    let playerScoresDiv = document.createElement("div");
    scoresEl.appendChild(playerScoresDiv);

    let individualScoresEl = document.createElement("label");
    individualScoresEl.textContent = score;
    playerScoresDiv.appendChild(individualScoresEl);
}
