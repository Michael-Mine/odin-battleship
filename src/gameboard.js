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
    addToken: function (player) {
      value = player;
    },
    getValue: function () {
      return value;
    },
  };
}

// 0 = no ships
// 1 = ship no hit
// 2 = ship hit (or miss?)
// 3 = miss
