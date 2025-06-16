function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const mas = arr.slice();
  return mas.reverse();
}
