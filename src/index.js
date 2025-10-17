import "./styles.css";
import { gameController } from "./game-controller.js";

const playGameButton = document.querySelector("#play-game");
const randomButton = document.querySelector("#random");
const startGameButton = document.querySelector("#start-game");
const newGameButton = document.querySelector("#new-game");
const userBoard  = document.querySelector("#user-board");
const infoDiv  = document.querySelector("#info");
const computerBoard  = document.querySelector("#computer-board");

playGameButton.addEventListener("click", (event) => {
  event.preventDefault();
  gameSetup()
});

function gameSetup() {
  playGameButton.style.display = "none";
  randomButton.style.display = "inline-block";
  userBoard.style.display = "grid";
}

randomButton.addEventListener("click", (event) => {
  event.preventDefault();
  // placeShipsrandom();
  startGameButton.style.display = "inline-block";
});

startGameButton.addEventListener("click", (event) => {
  event.preventDefault();
  randomButton.style.display = "none";
  startGameButton.style.display = "none";
  newGameButton.style.display = "inline-block";
  infoDiv.textContent = "Click in grid below to attack!"
  computerBoard.style.display = "grid";
});

newGameButton.addEventListener("click", (event) => {
  event.preventDefault();
  newGameButton.style.display = "none";
  infoDiv.textContent = "";
  computerBoard.style.display = "none";
  randomButton.style.display = "inline-block";
  //clear user board
});

