it("should 17 allways be 17", () => {
  expect(17).toEqual(17);
});
it("should 18 never be 17", () => {
  expect(18).not.toEqual(17);
});
const getEvenNumbers = (numbers) => {
  return numbers.filter((num) => {
    return num % 2 === 0;
  });
};
it("should be return only even numbers", () => {
  const result = getEvenNumbers([1, 2, 3, 4]);
  expect(result).toEqual([2, 4]);
});
