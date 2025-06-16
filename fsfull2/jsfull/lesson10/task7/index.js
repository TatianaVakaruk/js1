const superRound = (num, prec) => {
// put your code here
  const multiplier = Math.pow(10, prec);
  return [Math.floor(num * multiplier) / multiplier,
    Math.trunc(num * multiplier) / multiplier,
    Math.ceil(num * multiplier) / multiplier,
    Math.round(num * multiplier) / multiplier,
    Number(num.toFixed(prec))
  ];
};
// examples
console.log(superRound(11.12556, 2)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
console.log(superRound(6.11, 3)); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]
