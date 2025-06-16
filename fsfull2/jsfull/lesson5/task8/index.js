function findDivCount(a, b, n) {
  let counter = 0;
  for (let i = a; i <= b; i += 1) {
    if (i % n === 0) {
      counter += 1;
    }
  }
  return counter;
}

console.log(findDivCount(1, 10, 2));
