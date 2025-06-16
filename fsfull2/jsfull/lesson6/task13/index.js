function withdraw(clients, balances, client, amount) {
  for (let i = 0; i < clients.length; i += 1) {
    if (clients[i] === client) {
      const summa = balances[i] - amount;
      if (summa < 0) {
        return -1;
      }
      return summa;
    }
  }
}
