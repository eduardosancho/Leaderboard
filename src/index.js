import _ from 'lodash';
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

scoresList.displayList();




/* function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component()); */