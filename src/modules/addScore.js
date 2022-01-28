import Score from './Score.js';
// import { postData } from './data.js';

const addScore = () => {
  const score = new Score();

  const object = {
    user: score.name,
    score: score.number,
  };

  postData(object);

  document.getElementById('score-name-input').value = '';
  document.getElementById('score-number-input').value = '';
  document.getElementById('score-name-input').focus();
};

export default addScore;
