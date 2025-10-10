import { expect, jest, test } from "@jest/globals";
import { Ship } from "./ship";

const testShip = Ship("Voyager", 3);

test("ship properties exist", () => {
  expect(testShip).toHaveProperty("name");
  expect(testShip).toHaveProperty("length");
  expect(testShip).toHaveProperty("timesHit");
  expect(testShip).toHaveProperty("sunk");
});

test("ship hit function", () => {
  testShip.hit();
  expect(testShip.timesHit).toBe(1);
});

test("ship isSunk function", () => {
  testShip.hit();
  testShip.hit();
  testShip.hit();
  
  expect(testShip.isSunk).toBeTruthy();
});
