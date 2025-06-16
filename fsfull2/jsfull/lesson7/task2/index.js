const sortDesc = (numbers) => {
  return [...numbers].sort((a, b) => b - a);
};
const arr = [1, 0, 18, 27, 3, 2, 40, 50, 1];
console.log(sortDesc(arr));
