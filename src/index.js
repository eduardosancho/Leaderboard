// import _ from 'lodash';
import './style.css';
// import printMe from './print.js';
import ScoresList from './modules/ScoresList';

const scoresList = new ScoresList();

const addScoreForm = document.getElementById('scores-form');
addScoreForm.addEventListener('submit', (e) => {
  e.preventDefault();
  scoresList.addScore();
});
const addScoreButton = document.getElementById('add-score');
addScoreButton.addEventListener('click', () => scoresList.addScore());

const refreshButton = document.getElementById('refresh-button');
refreshButton.addEventListener('click', () => scoresList.refreshScores());

scoresList.displayList();
