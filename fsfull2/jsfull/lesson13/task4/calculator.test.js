import { calc } from "./calculator";

it("should be plas if +", () => {
  const result = calc("3 + 5");
  expect(result).toEqual("3 + 5 = 8");
});
it("should be minus if -", () => {
  const result = calc("5 - 3");
  expect(result).toEqual("5 - 3 = 2");
});
it("should be mult if *", () => {
  const result = calc("5 * 3");
  expect(result).toEqual("5 * 3 = 15");
});
it("should be div if /", () => {
  const result = calc("10 / 5");
  expect(result).toEqual("10 / 5 = 2");
});
