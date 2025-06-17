import { reverseArray, withdraw, getAdults } from "./index.js";

it("should be vererse arr 1", () => {
  const result = reverseArray([1, 2, 3, 4]);
  expect(result).toEqual([4, 3, 2, 1]);
});
it("should be vererse arr 2", () => {
  const result = reverseArray([2, 4, 6, 8]);
  expect(result).toEqual([8, 6, 4, 2]);
});
it("should be vererse arr 3", () => {
  const result = reverseArray([1, 3, 5, 7]);
  expect(result).toEqual([7, 5, 3, 1]);
});
it("should be amount 1", () => {
  const result = withdraw(["Ann", "John", "Viktor"], [1400, 50, -8], "Ann", 10);
  expect(result).toEqual(1390);
});
it("should be amount 2", () => {
  const result = withdraw(
    ["Ann", "John", "Viktor"],
    [1400, 50, -8],
    "Viktor",
    10,
  );
  expect(result).toEqual(-1);
});
it("should be amount 1", () => {
  const result = withdraw(
    ["Ann", "John", "Viktor"],
    [1400, 50, -8],
    "John",
    10,
  );
  expect(result).toEqual(40);
});
it("should be adalt student 1", () => {
  const result = getAdults({"John": 19, "Tom": 10, "Willy": 21});
  expect(result).toEqual({"John": 19, "Willy": 21});
});
it("should be adalt student 2", () => {
  const result = getAdults({"John": 21, "Tom": 30, "Willy": 21});
  expect(result).toEqual({"John": 21, "Tom": 30, "Willy": 21});
});
it("should be adalt student 3", () => {
  const result = getAdults({"John": 5, "Tom": 19, "Willy": 21});
  expect(result).toEqual({"Tom": 19, "Willy": 21});
});
