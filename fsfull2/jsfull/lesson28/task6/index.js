function sumFibonacci(limit) {
  if (limit <= 0) {
    return 0;
  }

  function fibonacci(n) {
    if (n <= 1) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }

  let i = 0;
  let fib = 0;
  while (fib <= limit) {
    let nextFib = fibonacci(i);
    if (nextFib > limit) {
      return fib;
    }
    fib = nextFib;
    i += 1;
  }
  return fib;
}
  
console.log(sumFibonacci(15));
console.log(sumFibonacci(8));
