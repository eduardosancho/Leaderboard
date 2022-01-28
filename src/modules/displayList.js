
function displayList(data) {

    const scoresContainer = document.getElementById('scores-list');

    scoresContainer.innerHTML = '';

    data.forEach((element) => {
        const line = document.createElement('li');
        line.textContent = `${element.user}: ${element.score}`;
        scoresContainer.appendChild(line);
    });
}

export default displayList;