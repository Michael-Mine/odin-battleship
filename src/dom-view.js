// only sends messages to controller
import sailBoat from "./images/sail-boat.svg";
import sailBoatSink from "./images/sail-boat-sink.svg";
import { gameController } from "./game-controller";

const boardDiv1 = document.querySelector("#user-board");
const boardDiv2 = document.querySelector("#computer-board");

export function displayBothBoards(players) {
  clearBoards();
  const [user, computer] = players;
  // user.printBoard();
  // computer.printBoard();
  displayBoardUser(user);
  displayBoardComputer(computer);
}

function clearBoards() {
  boardDiv1.textContent = "";
  boardDiv2.textContent = "";
}

function displayBoardUser(user) {
  const board = user.getBoard();

  board.forEach((row) => {
    row.forEach((cell) => {
      const cellDiv = document.createElement("div");
      const icon = document.createElement("img");

      cellDiv.classList.add("cell");

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
        cellButton.addEventListener("click", clickHandlerBoard);
      } else if (cell.getValue() === 1) {
        cellDiv.appendChild(cellButton);
        cellButton.classList.add("cell-button");
        cellButton.addEventListener("click", clickHandlerBoard);
      } else if (cell.getValue() === 2) {
        icon.src = sailBoatSink;
        cellDiv.appendChild(icon);
      } else {
        cellDiv.textContent = "X";
      }
      boardDiv2.appendChild(cellDiv);
    });
  });
}

function clickHandlerBoard(event) {
  const row = event.target.dataset.row;
  const column = event.target.dataset.column;
  console.log(row, column);
  gameController.sendAttack(row, column);
}
