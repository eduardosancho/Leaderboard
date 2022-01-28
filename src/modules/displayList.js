
const displayList = (data) => {

    const scoresContainer = document.getElementById('scores-list');

    scoresContainer.innerHTML = '';

    data.result.forEach((score) => {
        const line = document.createElement('li');
        line.textContent = `${score.name}: ${score.number}`;
        this.scoresContainer.appendChild(line);
    });
}

export default displayList;