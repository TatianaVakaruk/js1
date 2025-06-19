function makeCounter() {
  let count = 0;
  return function() {
    return (count += 1);
  };
}
/*const counter = makeCounter();
const counter1 = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter1());
console.log(counter1());
console.log(counter());
*/