// only sends messages to controller
import sailBoat from "./images/sail-boat.svg";
import sailBoatSink from "./images/sail-boat-sink.svg";

export function displayBothBoards(players) {
  const [player1, player2] = players;
  player1.printBoard();
  player2.printBoard();
  displayBoardPlayer(player1);
  displayBoardComputer(player2);
}

function displayBoardPlayer(player) {
  const board = player.getBoard();
  const boardDiv = document.querySelector("#player1-board");

  board.forEach((row, rowIndex) => {
    row.forEach((cell, columnIndex) => {
      const cellDiv = document.createElement("div");
      const icon = document.createElement("img");

      cellDiv.classList.add("cell");
      cellDiv.dataset.row = rowIndex;
      cellDiv.dataset.column = columnIndex;

      if (cell.getValue() === 1) {
        icon.src = sailBoat;
        cellDiv.appendChild(icon);
      } else if (cell.getValue() === 2) {
        icon.src = sailBoatSink;
        cellDiv.appendChild(icon);
      } else if (cell.getValue() === 3) {
        cellDiv.textContent = "X";
      }

      boardDiv.appendChild(cellDiv);
    });
  });
}

function displayBoardComputer(player) {
  const board = player.getBoard();
  const boardDiv = document.querySelector("#player2-board");

  board.forEach((row, rowIndex) => {
    row.forEach((cell, columnIndex) => {
      const cellDiv = document.createElement("div");
      const cellButton = document.createElement("button");
      const icon = document.createElement("img");

      cellDiv.classList.add("cell");
      cellDiv.dataset.row = rowIndex;
      cellDiv.dataset.column = columnIndex;

      if (cell.getValue() === 0) {
        cellDiv.classList.add("cell-button");
        cellDiv.appendChild(cellButton);
        cellButton.textContent = "";
      } else if (cell.getValue() === 1) {
        cellDiv.classList.add("cell-button");
        cellDiv.appendChild(cellButton);
      } else if (cell.getValue() === 2) {
        icon.src = sailBoatSink;
        cellDiv.appendChild(icon);
      } else {
        cellDiv.textContent = "X";
      }

      boardDiv.appendChild(cellDiv);
    });
  });
}
