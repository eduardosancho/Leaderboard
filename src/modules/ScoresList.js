import Score from './Score';

export default class ScoresList {
  constructor() {
    this.scores = localStorage.getItem('scores') ? JSON.parse(localStorage.getItem('scores')) : [];
    this.scoresContainer = document.getElementById('scores-list');
  }

  displayList() {
    this.scoresContainer.innerHTML = '';
    this.scores.forEach((score) => {
      const line = document.createElement('li');
      line.textContent = `${score.name}: ${score.number}`;
      this.scoresContainer.appendChild(line);
    });
  }

  storeData() {
    localStorage.setItem('scores', JSON.stringify(this.scores));
  }

  addScore() {
    const score = new Score();
    this.scores.push(score);
    this.storeData();
    this.displayList();
    document.getElementById('score-name-input').value = '';
    document.getElementById('score-number-input').value = '';
  }

  refreshScores() {
    this.scores = [];
    this.storeData();
    this.displayList();
  }
}