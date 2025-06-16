import { minimal } from "./getMinSquaredNumber";

it("sholld be infinbity if arr is empty", () => {
  const result = minimal([]);
  expect(result).toEqual(Infinity);
});
it("should be null if arr is string", () => {
  const result = minimal("sgghhjj");
  expect(result).toEqual(null);
});
it("should by min when it take arr of numbers", () => {
  const result = minimal([1, 3, -4.5, 9]);
  expect(result).toEqual(1);
});
