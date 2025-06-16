function getIntervalSum(from, to) {
  let sum = 0;
  // put your code here
  for (let i = from; i <= to; i += 1) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}
// examples
console.log(getIntervalSum(0, 20)); // ===> 110
console.log(getIntervalSum(20, 25)); // ===> 66
console.log(getIntervalSum(120, 160)); // ===> 2940
