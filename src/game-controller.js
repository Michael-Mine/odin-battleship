import { displayBothBoards } from "./dom-view";
import { player } from "./game-logic-tested/player";

export const gameController = (function () {
  const players = createPlayers();

  prePopulateBothShips(players);

  displayBothBoards(players);

  return {
    sendAttack: function (row, column) {
      players[1].receiveAttack(row, column);
      displayBothBoards(players);
      const [row2, column2] = getComputerAttack(players[0]);
      players[0].receiveAttack(row2, column2);
      displayBothBoards(players);
    },
  };

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

function getComputerAttack(computer) {
  const board = computer.getBoard();
  let row;
  let column;
  let boardValue;
  do {
    row = getRandomInt(10);
    column = getRandomInt(10);
    boardValue = board[row][column].getValue();
  } while (boardValue > 1);

  return [row, column];
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
