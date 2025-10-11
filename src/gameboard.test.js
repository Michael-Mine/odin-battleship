import { expect, jest, test } from "@jest/globals";
import { gameBoard } from "./gameboard";

const playerGameBoard = gameBoard();

test("board setup", () => {
  playerGameBoard.printBoard();

  const testBoard = playerGameBoard.getBoard();
  expect(testBoard[9][9].getValue()).toBe(0);
});
