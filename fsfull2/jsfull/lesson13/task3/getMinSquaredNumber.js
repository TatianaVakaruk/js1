export const minimal = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const squaredArr = arr.map((el) => {
    return el * el;
  });
  return Math.min(...squaredArr);
};
