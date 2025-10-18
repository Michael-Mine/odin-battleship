import { displayBothBoards } from "./dom-view";
import { player } from "./game-logic-tested/player";

export const gameController = (function () {
  const user = player();
  const computer = player();
  const players = [user, computer];
  // const ships = createShips();
  // prePopulateBothShips(players);

  displayBothBoards(players);

  return {
    sendAttack: function (row, column) {
      players[1].receiveAttack(row, column);
      displayBothBoards(players);
      const [row2, column2] = getComputerAttack(players[0]);
      players[0].receiveAttack(row2, column2);
      displayBothBoards(players);
    },
    placeUserShipsRandom: function () {
      user.resetBoard();
      const userShips = getRandomShips();
      userShips.forEach((element) => {
        let shipRow = Number(element.charAt(0));
        let shipColumn = Number(element.charAt(2));
        user.placeShip(shipRow, shipColumn);
      });
      displayBothBoards(players);
    },
  };

  // create conditions to end game after all ships sunk here

  // implement system to allow players to place their ships via coord or button to random

  // polish intelligence of computer by having it try adjacent slots after hit
})();

function getRandomShips() {
  const ships = [];
  const ship1 = getShipLength4Row();
  ships.push(...ship1);

  let ship2;

  do {
    ship2 = "";
    ship2 = getShipLength3Row();
    console.log("got ship");
    console.log(ships.some((v) => ship2.includes(v)))
  } while (ships.some((v) => ship2.includes(v)));
  ships.push(...ship2);

  console.log(ships);
  return ships;
}

function getShipLength4Row() {
  let shipStart = [getRandomInt(10), getRandomInt(10)];
  let shipMiddle1;
  let shipMiddle2;
  let shipEnd;

  if (shipStart[1] > 5) {
    shipMiddle1 = [shipStart[0], shipStart[1] - 1];
    shipMiddle2 = [shipStart[0], shipStart[1] - 2];
    shipEnd = [shipStart[0], shipStart[1] - 3];
  } else {
    shipMiddle1 = [shipStart[0], shipStart[1] + 1];
    shipMiddle2 = [shipStart[0], shipStart[1] + 2];
    shipEnd = [shipStart[0], shipStart[1] + 3];
  }
  return [
    shipStart.toString(),
    shipMiddle1.toString(),
    shipMiddle2.toString(),
    shipEnd.toString(),
  ];
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getShipLength3Row() {
  let shipStart = [getRandomInt(10), getRandomInt(10)];
  let shipMiddle;
  let shipEnd;

  if (shipStart[1] > 4) {
    shipMiddle = [shipStart[0], shipStart[1] - 1];
    shipEnd = [shipStart[0], shipStart[1] - 2];
  } else {
    shipMiddle = [shipStart[0], shipStart[1] + 1];
    shipEnd = [shipStart[0], shipStart[1] + 2];
  }
  return [shipStart.toString(), shipMiddle.toString(), shipEnd.toString()];
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
