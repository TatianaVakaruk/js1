import { getSum, getSquaredArray, getOddNumbers } from "./calculator.js";

it("should return squared numbers", () => {
  const result = getSquaredArray([1, 2, 3]);
  expect(result).toEqual([1, 4, 9]);
});
it("should return odd numbers", () => {
  const result = getOddNumbers([1, 2, 3]);
  expect(result).toEqual([1, 3]);
});
it("should return sum of numbers numbers", () => {
  const result = getSum(1, 2);
  expect(result).toEqual(3);
});
