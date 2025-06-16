/**
 * @param {number[]} arr
 * @return {number[]}
 */
function getArrayBounds(arr) {
  // put your code here
  if (!Array.isArray(arr)) {
    return null;
  }
  const first = arr[0];
  const last = arr[arr.length - 1];
  const length1 = arr.length;
  return [length1, first, last];
}

// examples
console.log(getArrayBounds([1, 10, 9, 11])); // ==> [4, 1, 11]
console.log(getArrayBounds(10, 12, 14)); // ==> null
console.log(getArrayBounds([1])); // ==> [1, 1, 1]
