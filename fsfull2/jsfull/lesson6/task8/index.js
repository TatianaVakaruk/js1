const increaseEvenEl = (arr, delta) => {
  // put your code here
  if (!Array.isArray(arr)) {
    return null;
  }
  const mas = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 2 === 0) {
      mas.push(arr[i] + delta);
    } else {
      mas.push(arr[i]);
    }
  }
  return mas;
};
// examples
console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20)); // ===> [22, 5, 26, 28, 11, 9, 24]
console.log(increaseEvenEl([7, 11, 1], 10)); // ===> [7, 11, 1]
console.log(increaseEvenEl([], 120)); // ===> []
