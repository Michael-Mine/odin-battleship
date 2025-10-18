import { hitMessage, missMessage } from "../game-controller.js";

export function gameBoard() {
  const board = createBoard();

  return {
    getBoard: function () {
      return board;
    },
    printBoard: function () {
      const boardWithCellValues = board.map((row) =>
        row.map((cell) => cell.getValue())
      );
      console.table(boardWithCellValues);
    },
    placeShip: function (row, column) {
      board[row][column].addShip();
      // call ship factory?
    },
    receiveAttack: function (row, column, player) {
      if (board[row][column].getValue() === 1) {
        board[row][column].hitShip();
        hitMessage(player);
        checkAllShipsSunk(board);
      } else if (board[row][column].getValue() === 0) {
        board[row][column].missShip();
        missMessage(player);
      } else {
        throw new Error("These coordinates have already received an attack!");
      }
    },
    resetBoard: function () {
      for (let i = 0; i < 10; i++) {
        board[i] = [];
        for (let j = 0; j < 10; j++) {
          board[i].push(cell());
        }
      }
    },
  };
}

function createBoard() {
  const rows = 10;
  const columns = 10;
  const board = [];

  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i].push(cell());
    }
  }
  return board;
}

function cell() {
  let value = 0;

  return {
    getValue: function () {
      return value;
    },
    addShip: function () {
      value = 1;
    },
    hitShip: function () {
      value = 2;
    },
    missShip: function () {
      value = 3;
    },
  };
}

function checkAllShipsSunk(board) {
  let hitCounter = 0;

  board.forEach((row) => {
    row.forEach((element) => {
      if (element.getValue() === 2) {
        hitCounter += 1;
      }
    });
  });
  if (hitCounter === 20) {
    console.log("Game over");
    return true;
  }
  // or check ship.isSunk
}
