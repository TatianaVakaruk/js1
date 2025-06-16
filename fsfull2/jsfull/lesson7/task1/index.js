function getSpecialNumbers(arr) {
  const mas = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 3 === 0) {
      mas.push(arr[i]);
    }
  }
  return mas;
}

const getSpecialNumbers1 = (arr) => {
  const mas = [];
  arr.forEach((num) => {
    if (num % 3 === 0) {
      mas.push(num);
    }
  });
  return mas;
};
const getSpecialNumbers2 = (arr) => arr.filter((num) => num % 3 === 0);

const arr = [1, 2, 3, 18, 6, 5, 27, 33];
console.log(getSpecialNumbers2(arr));
