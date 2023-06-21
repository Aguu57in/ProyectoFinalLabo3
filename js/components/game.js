import { getGameTrailers, getGameScreenshots } from "../gamesApiFunctions.js";
let mostrandoVideo = false;

export function createGameInfo(game) {
  const gameInfo = document.createElement("div");
  gameInfo.classList.add("game-info__container");
  gameInfo.innerHTML = `
<div id="card">


        <div class="game-info__image">
        <img src="${game.background_image}" alt="${game.name}" class="background-img-game" />
        </div>
        <div class="game-info__text">
        <h2>${game.name}</h2>
        <p>${game.description_raw}</p>
        </div>

        </div>
    `;

  return gameInfo;
}

export function addGameTrailer(juegoId) {
  getGameTrailers(juegoId).then((data) => {
    if (mostrandoVideo) return;
    mostrandoVideo = true;
    const backgroundEl = document.querySelector(".background-img-game");

    backgroundEl.addEventListener("mouseover", () =>
      crearTrailer(data, backgroundEl)
    );

    mostrandoVideo = false;
  });
}
function crearTrailer(data, backgroundEl) {
  const URLtrailer = data.results[0].data.max;
  const trailerEl = document.querySelector(".trailer-container");
  backgroundEl.style.display = "none";
  const iframeConEl = document.createElement("div");
  iframeConEl.innerHTML = `<iframe width="560" height="315" src="${URLtrailer}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  trailerEl.innerHTML = iframeConEl.innerHTML;
  setTimeout(() => {
    trailerEl.innerHTML = "";
    backgroundEl.style.display = "block";
  }, 30000);
}

export function addScreenshots(juegoId) {
  getGameScreenshots(juegoId).then((screenshots) => {
    const screenshotsEl = document.querySelector(".screenshots-container");
    screenshots.results.forEach((screenshot, i) => {
      if (i > 5) return;
      screenshotsEl.innerHTML += `<li class="slide-visible"><img src="${screenshot.image}" alt="${screenshot.id}"></li>`;
    });
  });
}
