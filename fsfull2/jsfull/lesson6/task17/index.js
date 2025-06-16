function uniqueCount(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const mas = Array.from(new Set(arr));
  return mas.length;
}

console.log(uniqueCount([1, 2, 2, 4, 4, 3, 3, 3]));
