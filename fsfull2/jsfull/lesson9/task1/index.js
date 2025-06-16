const getAdults = (userObj) => {
  return Object.entries(userObj)
    .filter(user => user[1] >= 18)
    .map(user => user[0]);
};
