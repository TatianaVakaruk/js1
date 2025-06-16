const withdraw = (clients, balances, client, amount) => {
  const indexClient = clients.indexOf(client);
  if (balances[indexClient] - amount < 0) {
    return -1;
  }
  return balances[indexClient] - amount;
};
console.log(withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 50)); // ==> 37 (balances array should be [1400, 37, -6])
console.log(withdraw(["Ann", "John", "User"], [1400, 87, -6], "User", 10)); // ==> -1 (balances array should be [1400, 87, -6])
