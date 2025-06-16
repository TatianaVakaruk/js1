function compareObjects(firstObj, secondObj) {
  // put your code here
  if (firstObj === secondObj) {
    return true;
  }
  const keys1 = Object.keys(firstObj);
  const keys2 = Object.keys(secondObj);
  // Проверка равенства количества ключей
  if (keys1.length !== keys2.length) {
    return false;
  }
  return keys1.every((key) => {
    if (!secondObj.hasOwnProperty(key)) {
      return false;
    }
    const val1 = firstObj[key];
    const val2 = secondObj[key];
    return val1 === val2;
  });
}
// examples
const obj1 = {
  name: "Tom",
  age: 17,
};
const obj2 = {
  name: "Bob",
  age: 17,
};
const obj3 = {
  name: "Bob",
  age: 17,
  student: false,
};
const obj4 = {
  name: "Tom",
  age: 17,
};
const obj5 = {
  age: 17,
  name: "Tom",
};
compareObjects(obj1, obj2); // ==> false
compareObjects(obj2, obj3); // ==> false
compareObjects(obj1, obj4); // ==> true
compareObjects(obj4, obj5); // ==> true
