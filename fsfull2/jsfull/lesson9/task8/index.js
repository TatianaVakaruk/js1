function addPropertyV1(obj, key, value) {
  // put your code here
  obj[key] = value;
  return obj;
}
function addPropertyV2(obj, key, value) {
  // put your code here
  obj[key] = value;
  const obj1 = Object.assign({}, obj);
  return obj1;
}
function addPropertyV3(obj, key, value) {
  // put your code here
  const obj1 = Object.assign({}, obj);
  obj1[key] = value;
  return obj1;
}
function addPropertyV4(obj, key, value) {
  // put your code here
  const obj1 = {...obj};
  obj1[key] = value;
  return obj1;
}
const transaction = {
  value: 170,
};
console.log(addPropertyV1(transaction, 'currency', 'USD'));
console.log(addPropertyV2(transaction, 'currency', 'USD'));
console.log(addPropertyV3(transaction, 'currency', 'USD'));
console.log(addPropertyV4(transaction, 'currency', 'USD'));
