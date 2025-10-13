import "./styles.css";
import { gameController } from "./game-controller.js";

const playGame = document.querySelector("#play-game");

playGame.addEventListener("click", (event) => {
  event.preventDefault();
  gameController()
});



