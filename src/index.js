import "./styles.css";
import "./buttons.css";
import { gameController } from "./game-controller.js";

const playGameButton = document.querySelector("#play-game");
const randomButton = document.querySelector("#random");
const startGameButton = document.querySelector("#start-game");
const newGameButton = document.querySelector("#new-game");
const userBoard = document.querySelector("#user-board");
const computerBoard = document.querySelector("#computer-board");

export const infoDiv = document.querySelector("#info");
export const userScore = document.querySelector("#user-score");
export const computerScore = document.querySelector("#computer-score");

playGameButton.addEventListener("click", (event) => {
  event.preventDefault();
  gameSetup();
});

function gameSetup() {
  playGameButton.style.display = "none";
  randomButton.style.display = "inline-block";
  userBoard.style.display = "grid";
}

randomButton.addEventListener("click", (event) => {
  event.preventDefault();
  gameController.placeShipsRandom();
  startGameButton.style.display = "inline-block";
});

startGameButton.addEventListener("click", (event) => {
  event.preventDefault();
  randomButton.style.display = "none";
  startGameButton.style.display = "none";
  newGameButton.style.display = "inline-block";
  infoDiv.textContent = "Click in grid below to attack!";
  computerBoard.style.display = "grid";
  userScore.style.display = "block";
  computerScore.style.display = "block";
});

newGameButton.addEventListener("click", (event) => {
  event.preventDefault();
  newGameButton.style.display = "none";
  computerBoard.style.display = "none";
  randomButton.style.display = "inline-block";
  userScore.style.display = "none";
  computerScore.style.display = "none";
  
  infoDiv.textContent = "";
  infoDiv.classList.remove("win-background");
  userScore.textContent = "Your score is: 0";
  computerScore.textContent = "Enemy score is: 0";
});
