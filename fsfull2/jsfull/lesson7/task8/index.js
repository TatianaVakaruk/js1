function sum(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.reduce((acc, el) => {
    return acc + el;
  });
}
