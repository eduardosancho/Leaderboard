import 'babel-polyfill';

const basicURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
let gameId = ''; // SudokuOrigami GameID: kx9a3dil6og5G5rfrqFt

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
  gameId = data.result.slice(14, 34);
  return gameId;
}