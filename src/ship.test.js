import { expect, jest, test } from "@jest/globals";
import { Ship } from "./ship";

const testShip = Ship(3);

test("ship properties exist", () => {
  expect(testShip).toHaveProperty("length");
  expect(testShip).toHaveProperty("timesHit");
  expect(testShip).toHaveProperty("sunk");
});

test("ship hit function", () => {
  testShip.hit();
  expect(testShip.timesHit).toBe(1);
  testShip.hit();
  expect(testShip.timesHit).toBe(2);
});

test("ship isSunk function", () => {
  testShip.hit();
  expect(testShip.sunk).toBeTruthy();
});
