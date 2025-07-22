function createArrayOfFunctions(len) {
  if (typeof len === "undefined") {
    return [];
  }
  if (typeof len !== "number") {
    return null;
  }
  const mas = [];
  for (let i = 0; i < len; i += 1) {
    mas[i] = function () {
      return i;
    };
  }
  return mas;
}
console.log(createArrayOfFunctions()[5]());
