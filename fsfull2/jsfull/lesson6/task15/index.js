const includes = (arr, num) => {
  // put your code here
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === num) {
      return true;
    }
  }
  return false;
};

console.log(includes([1, 2, 3, 4], 4));
console.log(includes([1, 2, 3, 4], 5));
