import { displayBothBoards } from "./dom-view";
import { player } from "./game-logic-tested/player";
import { getRandomInt, getRandomShips } from "./random-ships";

export const gameController = (function () {
  const user = player();
  const computer = player();
  const players = [user, computer];

  displayBothBoards(players);

  return {
    sendAttack: function (row, column) {
      players[1].receiveAttack(row, column);
      displayBothBoards(players);
      const [row2, column2] = getComputerAttack(players[0]);
      players[0].receiveAttack(row2, column2);
      displayBothBoards(players);
    },
    placeShipsRandom: function () {
      user.resetBoard();
      const userShips = getRandomShips();
      userShips.forEach((element) => {
        let shipRow = Number(element.charAt(0));
        let shipColumn = Number(element.charAt(2));
        user.placeShip(shipRow, shipColumn);
      });
      computer.resetBoard();
      const computerShips = getRandomShips();
      computerShips.forEach((element) => {
        let shipRow = Number(element.charAt(0));
        let shipColumn = Number(element.charAt(2));
        computer.placeShip(shipRow, shipColumn);
      });
      computer.printBoard();
      displayBothBoards(players);
    },
  };

  // create conditions to end game after all ships sunk here

  // polish intelligence of computer by having it try adjacent slots after hit
})();

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
