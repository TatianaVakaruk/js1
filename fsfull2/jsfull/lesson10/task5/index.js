function getTotalPrice(arr) {
  const result = arr.reduce((acc, el) => {
    return acc + el;
  }, 0);
  return "$" + Math.floor(result * 100) / 100;
}
console.log(getTotalPrice([1, 2, 3.1465, 4]));
