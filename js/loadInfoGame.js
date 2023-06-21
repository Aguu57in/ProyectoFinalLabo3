import { getGame } from "../js/gamesApiFunctions.js";
import {
  createGameInfo,
  addGameTrailer,
  addScreenshots,
} from "./components/game.js";

const urlParams = new URLSearchParams(window.location.search);
const juegoId = urlParams.get("id");

getGame(juegoId)
  .then((data) => {
    gameInfoEl.appendChild(createGameInfo(data));
  })
  .then(() => addGameTrailer(juegoId))
  .then(() => addScreenshots(juegoId))
  .catch((error) => console.log(error));
