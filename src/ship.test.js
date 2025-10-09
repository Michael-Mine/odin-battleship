import { expect, jest, test } from "@jest/globals";
import { sum } from "./ship";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
