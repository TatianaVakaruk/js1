function addPropertyV1(userData, userId) {
  userData.id = userId;
  return userData;
}
const user = {
  name: "Sam",
};
console.log(addPropertyV1(user, "1234567")); // ==> { name: 'Sam', id: '1234567' }

function addPropertyV2(userData, userId) {
  userData.id = userId;
  const userData1 = Object.assign({}, userData);
  return userData1;
}
console.log(addPropertyV2(user, "1234567"));
function addPropertyV3(userData, userId) {
  const userData1 = Object.assign({}, userData);
  userData1.id = userId;
  return userData1;
}
console.log(addPropertyV3(user, "1234567"));
function addPropertyV4(userData, userId){
  const userData1 = { ...userData};
  userData1.id = userId;
  return userData1;
}
console.log(addPropertyV4(user, "1234567"));
