/*
console.log([1, 2, 3, 4].reduce(function(acc, num) {
 return acc + num;
}, 0));
*/
const flatArray = (arr) => {
  return arr.reduce((acc, el) => {
    return acc.concat(el);
  }, []);
};

const flatArray1 = (arr) => {
  return arr.flat().sort((a, b) => a - b);
};
console.log(flatArray1([[1, 2], 3, 9, 8, [5, 10], [7, 8]]));
