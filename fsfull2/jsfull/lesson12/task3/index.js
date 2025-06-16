function cleanTransactionsList(arr) {
  const mas1 = arr.filter((el) => isFinite(el));
  const mas3 = mas1.map((el) => "$" + parseFloat(el).toFixed(2));
  return mas3;
}

console.log(cleanTransactionsList(["1.37", "ghjk 2", "3"]));
