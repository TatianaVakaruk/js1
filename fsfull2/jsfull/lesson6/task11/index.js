function checker(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let min = arr[0];
  let max = min;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  const sum = max + min;
  if (sum > 1000) {
    return true;
  }
  return false;
}
