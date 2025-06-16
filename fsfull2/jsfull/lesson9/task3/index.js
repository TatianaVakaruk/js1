function getKeys(obj) {
  const arrKeys = Object.keys(obj);
  return arrKeys.forEach((el) => console.log(el));
}
getKeys({ name: "Denis", city: "Warsaw", englishLevel: "A1" });
// prints ===>
// name
// city
// englishLevel
