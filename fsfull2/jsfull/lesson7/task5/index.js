const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.filter((num) => num % 2 === 0).map((name) => name + delta);
};

console.log(increaseEvenEl([1, 2, 3, 4], 5));
