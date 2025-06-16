/*const getMaxAbsoluteNumber = (arr) => {
  // put your code here
  if (!Array.isArray(arr)) {
        return null;
    }
    if (arr.length === 0){
      return null;
    }
  let max = -Infinity;
  arr.forEach((el) => {
    if (Math.abs(el) > max) {
      max = Math.abs(el);
    }
  });
  return max;
};*/
const getMaxAbsoluteNumber = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  if (arr.length === 0){
    return null;
}
  const absoluteValue = arr.map((el) => {
    return Math.abs(el);
  });
  const max = Math.max(...absoluteValue);
  return max;
};
// examples
console.log(getMaxAbsoluteNumber([-10, 10, -10])); // ===> 10
console.log(getMaxAbsoluteNumber([2.1, 0, 1.6])); // ===> 2.1
console.log(getMaxAbsoluteNumber([-6, 3, 5, -1])); // ===> 6
console.log(getMaxAbsoluteNumber([-777, 3, -1, 45, -20])); // ===> 777
