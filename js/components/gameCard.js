export function createGameCard(game) {
  const gameEl = document.createElement("div");
  gameEl.classList.add("game");
  gameEl.innerHTML = `
  <div id="card" class="${game.name}">
      <img src="${game.background_image}" alt="${game.name}" class="game-img" />
      <div class="game-info">
        <a href="../html/game.html?id=${game.id}">Ver más</a>
        <h3>${game.name}</h3>
        <span>${game.released}</span>
        <span>RATING ${game.rating}</span>
      </div>
      </div>
    `;

  return gameEl;
}

export function hoverCard(card) {
  const game = games.find((game) => game.name == card.classList);
  const { ratings } = game;
  const contenedorLista = document.createElement("div");
  contenedorLista.classList.add("contenedorLista");
  const ulEl = document.createElement("ul");
  ratings.forEach((rating) => {
    ulEl.innerHTML += `<li>${rating.title} ${rating.percent}</li>`;
  });
  contenedorLista.appendChild(ulEl);
  card.innerHTML = `
  <div id="card">
     ${contenedorLista.innerHTML}
      <div class="game-info">
        <a href="../html/game.html?id=${game.id}">Ver más</a>
        <h3>${game.name}</h3>
        <span>${game.released}</span>
        <span>RATING ${game.rating}</span>
      </div>
      </div>
    `;
}
