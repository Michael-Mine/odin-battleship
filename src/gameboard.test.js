import { expect, jest, test } from "@jest/globals";
import { gameBoard } from "./gameboard";

const playerGameBoard = gameBoard();

test("board exists", () => {
  expect(playerGameBoard.getBoard()).toBeDefined();
});
