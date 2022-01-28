import './style.css';
import addScore from './modules/addScore';
import { getData } from './modules/data';
// import addGame from './modules/addGame';

//Run this to get new game ID
// window.addEventListener('load', addGame);

const addScoreForm = document.getElementById('scores-form');
addScoreForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addScore();
});
const addScoreButton = document.getElementById('add-score');
addScoreButton.addEventListener('click', () => {
  addScoreForm.trigger('submit');
});
 
const refreshButton = document.getElementById('refresh-button');
refreshButton.addEventListener('click', () => {
  const board = getData();
  displayList(board);
});
