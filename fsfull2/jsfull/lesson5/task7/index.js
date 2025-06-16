/**
 * @param {number} from
 * @param {number} to
 * @return {number}
 */
function sum(from, to) {
  // put your code here
  let sum1 = 0;
  for (let i = from; i <= to; i += 1) {
    sum1 += i;
  }
  return sum1;
}
/**
//* @param {number} firstFrom
   * @param {number} firstTo
   * @param {number} secondFrom
   * @param {number} secondTo
   * @return {boolean}
   */
function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
  // hint: you should use sum function inside compareSums
  // put your code here
  if (sum(firstFrom, firstTo) > sum(secondFrom, secondTo)) {
    return true;
  }
  return false;
}
// examples
console.log(sum(5, 10)); // ===> 45
console.log(sum(11, 11)); // ===> 11
console.log(compareSums(5, 10, 5, 10)); // ===> false
console.log(compareSums(5, 15, 3, 5)); // ===> true
console.log(compareSums(-2, 5, 5, 9)); // ===> false
