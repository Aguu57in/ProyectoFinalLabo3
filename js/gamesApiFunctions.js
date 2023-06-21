const URL = import.meta.env.VITE_API_URL;
const KEY = import.meta.env.VITE_API_KEY;

export async function getGames(
  next = `${URL}games?page_size=40&page=1&key=${KEY}`
) {
  let response = await fetch(next);
  let data = await response.json();
  let results = data.results;

  return { results, data };
}

export async function getGame(id) {
  return await fetch(`${URL}games/${id}?key=${KEY}`)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

export async function getGameTrailers(id) {
  return await fetch(`${URL}games/${id}/movies?key=${KEY}`)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

export async function getGameScreenshots(id) {
  return await fetch(`${URL}games/${id}/screenshots?key=${KEY}`)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

export async function getGameStores(id) {
  return await fetch(`${URL}games/${id}/stores?key=${KEY}`)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}
