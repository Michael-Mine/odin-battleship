export function gameBoard() {
  const board = createBoard();

  function checkAllShipsSunk() {
    //run through board for 20 x 2
    // or check ship.isSunk
  }

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
    receiveAttack: function (row, column) {
      if (board[row][column].getValue() === 1) {
        board[row][column].hitShip();
        checkAllShipsSunk();
      } else if (board[row][column].getValue() === 0) {
        board[row][column].missShip();
      } else {
        throw new Error("These coordinates have already received an attack!");
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
