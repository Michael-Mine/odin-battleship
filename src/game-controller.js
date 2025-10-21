import { infoDiv } from ".";
import { displayBothBoards } from "./dom-view";
import { player } from "./game-logic-tested/player";
import { getRandomInt, getRandomShips } from "./random-ships";

export const gameController = (function () {
  const user = player();
  const computer = player();
  const players = [user, computer];

  displayBothBoards(players);

  return {
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

      displayBothBoards(players);
    },
    sendAttack: function (row, column) {
      players[1].receiveAttack(row, column, 0);
      displayBothBoards(players);

      if (
        infoDiv.textContent === "You Won! All Enemy's Battleships are sunk!"
      ) {
        return;
      }

      setTimeout(() => {
        const [row2, column2] = getComputerAttack(players[0]);
        players[0].receiveAttack(row2, column2, 1);
        displayBothBoards(players);
      }, 1000);
    },
  };
})();

function getComputerAttack(computer) {
  const board = computer.getBoard();

  let adjacent = getAdjacentSlotsAfterHit(board);
  if (adjacent) return adjacent;

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

function getAdjacentSlotsAfterHit(board) {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (board[i][j].getValue() === 2) {
        if ([j + 1] >= 0 && [j + 1] < 10 && board[i][j + 1].getValue() < 2)
          return [i, j + 1];
        if ([j - 1] >= 0 && [j - 1] < 10 && board[i][j - 1].getValue() < 2)
          return [i, j - 1];
        if ([i + 1] >= 0 && [i + 1] < 10 && board[i + 1][j].getValue() < 2)
          return [i + 1, j];
        if ([i - 1] >= 0 && [i - 1] < 10 && board[i - 1][j].getValue() < 2)
          return [i - 1, j];
      }
    }
  }
}

export function hitMessage(player) {
  if (player === 0) {
    infoDiv.textContent = "You hit a BattleShip! Enemy's turn...";
  } else {
    infoDiv.textContent = "The enemy hit your BattleShip! Your turn...";
  }
}

export function missMessage(player) {
  if (player === 0) {
    infoDiv.textContent = "You missed! Enemy's turn...";
  } else {
    infoDiv.textContent = "The enemy missed! Your turn...";
  }
}

export function winMessage(player) {
  if (player === 0) {
    infoDiv.textContent = "You Won! All Enemy's Battleships are sunk!";
  } else {
    infoDiv.textContent = "You Lost! All your Battleships are sunk!";
  }
}
