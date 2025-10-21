import { expect, test } from "@jest/globals";
import { gameBoard } from "./game-board";

const playerGameBoard = gameBoard();

test("board setup", () => {
  const testBoard = playerGameBoard.getBoard();
  expect(testBoard[9][9].getValue()).toBe(0);
});

test("place ship", () => {
  playerGameBoard.placeShip(0, 1);

  const testBoard = playerGameBoard.getBoard();
  expect(testBoard[0][1].getValue()).toBe(1);
});

test("receiveAttack hit", () => {
  playerGameBoard.receiveAttack(0, 1);

  const testBoard = playerGameBoard.getBoard();
  expect(testBoard[0][1].getValue()).toBe(2);
});

test("receiveAttack miss", () => {
  playerGameBoard.receiveAttack(0, 3);

  const testBoard = playerGameBoard.getBoard();
  expect(testBoard[0][3].getValue()).toBe(3);
});

test("receiveAttack error", () => {
  expect(() => {
    playerGameBoard.receiveAttack(0, 3);
  }).toThrow("These coordinates have already received an attack!");
});
