import 'babel-polyfill';

const basicURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
let gameId = 'kx9a3dil6og5G5rfrqFt'; // SudokuOrigami GameID

// https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/kx9a3dil6og5G5rfrqFt/scores/

export default async function addGame() {
  const response = await fetch(`${basicURL}games/`, {
    method: 'POST',
    body: JSON.stringify({ name: 'SudokuOrigami' }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await response.json();
  console.log(data);
  gameId = data.result.slice(14, 34);
  console.log(gameId);
}