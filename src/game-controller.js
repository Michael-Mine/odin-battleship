import { displayBothBoards } from "./dom-view";
import { player } from "./game-logic-tested/player";

export function gameController() {
  const players = createPlayers();

  prePopulateBothShips(players);

  // display both player's boards in html and render using info from gameBoard in dom-view
  displayBothBoards(players);

  // event listeners to step through game turn by turn using other objects methods
  // user click for attacks, re-render boards, track current players turn here
  // make computer attacks random
  // create conditions to end game after all ships sunk here

  // implement system to allow players to place their ships via coord or button to random

  // extra credit:
  // implement drag and drop to place ships
  // create 2-player option
  // polish intelligence of computer by having it try adjacent slots after hit
}

function createPlayers() {
  const player1 = player();
  const player2 = player();
  return [player1, player2];
}

function prePopulateBothShips(players) {
  const [player1, player2] = players;

  player1.placeShip(0, 1);
  player1.placeShip(5, 5);
  player1.placeShip(9, 8);

  player2.placeShip(1, 8);
  player2.placeShip(4, 4);
  player2.placeShip(8, 7);

  return [player1, player2];
}
