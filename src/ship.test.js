import { expect, jest, test } from "@jest/globals";
import { Ship } from "./ship";

test("ship properties exist", () => {
  const testShip = Ship({
    name: "Voyager",
    length: 5,
    timesHit: 0,
    isSunk: false,
  });

  expect(testShip).toHaveProperty("name");
  expect(testShip).toHaveProperty("length");
  expect(testShip).toHaveProperty("timesHit");
  expect(testShip).toHaveProperty("isSunk");
});
