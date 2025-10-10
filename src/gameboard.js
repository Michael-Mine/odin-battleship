export function gameBoard() {
  const board = createBoard();

  return {
    getBoard: function () {
      return board;
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
      board[i].push(0);
    }
  }
  return board;
}
