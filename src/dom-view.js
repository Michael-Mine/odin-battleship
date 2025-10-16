// only sends messages to controller
import sailBoat from "./images/sail-boat.svg";
import sailBoatSink from "./images/sail-boat-sink.svg";
import { gameController } from "./game-controller";

export function displayBothBoards(players) {
  const [user, computer] = players;
  // user.printBoard();
  // computer.printBoard();
  displayBoardUser(user);
  displayBoardComputer(computer);
}

function displayBoardUser(user) {
  const board = user.getBoard();
  const boardDiv1 = document.querySelector("#player1-board");

  board.forEach((row, rowIndex) => {
    row.forEach((cell, columnIndex) => {
      const cellDiv = document.createElement("div");
      const icon = document.createElement("img");

      cellDiv.classList.add("cell");
      // cellDiv.dataset.row = rowIndex;
      // cellDiv.dataset.column = columnIndex;

      if (cell.getValue() === 1) {
        icon.src = sailBoat;
        cellDiv.appendChild(icon);
      } else if (cell.getValue() === 2) {
        icon.src = sailBoatSink;
        cellDiv.appendChild(icon);
      } else if (cell.getValue() === 3) {
        cellDiv.textContent = "X";
      }

      boardDiv1.appendChild(cellDiv);
    });
  });
}

function displayBoardComputer(computer) {
  const board = computer.getBoard();
  const boardDiv2 = document.querySelector("#player2-board");

  board.forEach((row, rowIndex) => {
    row.forEach((cell, columnIndex) => {
      const cellDiv = document.createElement("div");
      const cellButton = document.createElement("button");
      const icon = document.createElement("img");

      cellDiv.classList.add("cell");
      cellButton.dataset.row = rowIndex;
      cellButton.dataset.column = columnIndex;

      if (cell.getValue() === 0) {
        cellDiv.appendChild(cellButton);
        cellButton.classList.add("cell-button");
        cellButton.textContent = "";
      } else if (cell.getValue() === 1) {
        cellDiv.appendChild(cellButton);
        cellButton.classList.add("cell-button");
      } else if (cell.getValue() === 2) {
        icon.src = sailBoatSink;
        cellDiv.appendChild(icon);
      } else {
        cellDiv.textContent = "X";
      }

      boardDiv2.appendChild(cellDiv);
    });
  });
  boardDiv2.addEventListener("click", clickHandlerBoard);
}

function clickHandlerBoard(event) {
  const row = event.target.dataset.row;
  const column = event.target.dataset.column;
  console.log(row, column);
  clearBoards();
  gameController.sendAttack(row, column);
}

function clearBoards() {
  const boardDiv1 = document.querySelector("#player1-board");
  const boardDiv2 = document.querySelector("#player2-board");
  boardDiv1.textContent = "";
  boardDiv2.textContent = "";
}
