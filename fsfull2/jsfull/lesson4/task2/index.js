const m = 10;
const n = 20;
let i = m;
let sum = 1;
do {
  if (i % 2 === 1) {
    sum *= i;
  }
  i += 1;
} while (i <= n);
console.log(sum);
