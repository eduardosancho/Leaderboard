import "babel-polyfill";
import displayList from "./displayList";

const URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/kx9a3dil6og5G5rfrqFt/scores/';

const postData = async (data) => {
    const response = await fetch(`${URL}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    await response.json();
    getData();
};

const getData = async () => {
    let data = [];
    const res = await fetch(`${URL}`);
    const scores = await res.json();
    data = scores.result;
    data.sort((a, b) => b.score - a.score);
    displayList(data);
};

export { postData, getData };