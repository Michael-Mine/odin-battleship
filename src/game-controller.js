import { displayBothBoards } from "./dom-view";
import { player } from "./game-logic-tested/player";

export const gameController = (function () {
  const players = createPlayers();

  prePopulateBothShips(players);

  displayBothBoards(players);

  // user click for attacks, re-render boards, track current players turn here
  return {
    sendAttack: function (row, column) {
      players[1].receiveAttack(row, column);
      displayBothBoards(players);
    },
  };

  // make computer attacks random
  // create conditions to end game after all ships sunk here

  // implement system to allow players to place their ships via coord or button to random

  // extra credit:
  // implement drag and drop to place ships ?
  // create 2-player option ?
  // polish intelligence of computer by having it try adjacent slots after hit
})();

function createPlayers() {
  const user = player();
  const computer = player();
  return [user, computer];
}

function prePopulateBothShips(players) {
  const [user, computer] = players;

  user.placeShip(0, 1);
  user.placeShip(5, 5);
  user.placeShip(9, 8);

  computer.placeShip(1, 8);
  computer.placeShip(4, 4);
  computer.placeShip(8, 7);

  return [user, computer];
}
