function sortAsc(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  const count = array.length - 1;
  for (let i = 0; i < count; i += 1)
    for (let j = 0; j < count - i; j += 1)
      if (array[j] > array[j + 1]) {
        const max = array[j];
        array[j] = array[j + 1];
        array[j + 1] = max;
      }
  return array;
}
function sortDesc(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  const count = array.length - 1;
  for (let i = 0; i < count; i += 1)
    for (let j = 0; j < count - i; j += 1)
      if (array[j] < array[j + 1]) {
        const min = array[j];
        array[j] = array[j + 1];
        array[j + 1] = min;
      }
  return array;
}
