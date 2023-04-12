import './style.css';
import GameScore from './modules/gameScore.js';

const currentScore = new GameScore();
const addScore = document.querySelector('.add-form');

addScore.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = addScore.name.value;
  const score = addScore.score.value;
  currentScore.addNewScore({ user, score });
  addScore.reset();
});

const refreshBtn = document.getElementById('refresh');
refreshBtn.addEventListener('click', currentScore.fetchScores);
document.addEventListener('DOMContentLoaded', currentScore.showScores);