import { expect, jest, test } from "@jest/globals";
import { player } from "./player";


const testPlayer = player()

test("player factory to exist", () => {
  expect(testPlayer).toBeDefined();
})