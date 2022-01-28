import './style.css';
import addScore from './modules/addScore';
import { getData } from './modules/data';

// Run this to get new game ID!
// import addGame from './modules/addGame';
// window.addEventListener('load', addGame);

const addScoreForm = document.getElementById('scores-form');
addScoreForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addScore();
});

const refreshButton = document.getElementById('refresh-button');
refreshButton.addEventListener('click', () => {
  getData();
});

getData();
