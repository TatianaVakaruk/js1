function swap(numbers) {
  // put your code here
  const [start, ...rest] = numbers;
  return [...rest, start];
}

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function swapManual(numbers) {
  // put your code here
  const arr = [];
  for (let i = 0; i < numbers.length; i += 1) {
    arr[i] = numbers[i];
  }
  const start = arr.shift();
  arr[arr.length] = start;
  return arr;
}
const result1 = swap([1, 2, 3]);
console.log(result1);
const result2 = swapManual([1, 2, 4]);
console.log(result2);
