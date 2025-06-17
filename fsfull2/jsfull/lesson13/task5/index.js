export const reverseArray = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const mas = arr.slice();
  return mas.reverse();
};
export const withdraw = (clients, balances, client, amount) => {
  const indexClient = clients.indexOf(client);
  if (balances[indexClient] - amount < 0) {
    return -1;
  }
  return balances[indexClient] - amount;
};
export const getAdults = (obj) => {
  const obj1 = {};
  for (let key in obj) {
    if (obj[key] >= 18) {
      obj1[key] = obj[key];
    }
  }
  return obj1;
};
