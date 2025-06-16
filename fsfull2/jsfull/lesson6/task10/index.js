function cloneArr(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const mas = [];
  for (let i = 0; i < arr.length; i += 1) {
    mas[i] = arr[i];
  }
  return mas;
}
