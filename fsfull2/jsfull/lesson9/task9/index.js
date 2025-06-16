function buildObject(keysList, valuesList) {
  // put you code here
  const Object1 = {};
  keysList.forEach((key, index) => {
    Object1[key] = valuesList[index];
  });
  return Object1;
}
// examples
const keys = ["name", "address", "age"];
const values = ["Vasyl", "Ukraine", 34];
const result = buildObject(keys, values); // ==> { name: 'Vasyl', address: 'Ukraine', age: 34 }
console.log(result);
