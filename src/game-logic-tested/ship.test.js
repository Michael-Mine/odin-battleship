import { expect, jest, test } from "@jest/globals";
import { Ship, ship } from "./ship";

const testShip = Ship(3);

test("Ship properties exist", () => {
  expect(testShip).toHaveProperty("length");
  expect(testShip).toHaveProperty("timesHit");
  expect(testShip).toHaveProperty("sunk");
});

test("Ship hit function", () => {
  testShip.hit();
  expect(testShip.timesHit).toBe(1);
  testShip.hit();
  expect(testShip.timesHit).toBe(2);
});

test("Ship isSunk function", () => {
  testShip.hit();
  expect(testShip.sunk).toBeTruthy();
});

const testShip2 = ship(3);

test("ship hit function", () => {
  testShip2.hit();
  expect(testShip2.getTimesHit()).toEqual(1);
  testShip2.hit();
  expect(testShip2.getTimesHit()).toEqual(2);
});

test("ship isSunk function", () => {
  testShip2.hit();
  expect(testShip2.isSunk()).toBeTruthy();
});
