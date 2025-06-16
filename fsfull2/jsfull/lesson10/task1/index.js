function getFiniteNumbers(arr) {
  const arr1 = [];
  arr.map((key) => {
    if (Number.isFinite(key)) {
      arr1.push(key);
    }
  });
  return arr1;
}
function getFiniteNumbersV2(arr) {
  const arr1 = [];
  arr.map((key) => {
    if (isFinite(key)) {
      arr1.push(key);
    }
  });
  return arr1;
}
function getNaN(arr) {
  const arr1 = [];
  arr.map((key) => {
    if (Number.isNaN(key)) {
      arr1.push(key);
   }
  });
  return arr1;
}
function getNaNV2(arr) {
  const arr1 = [];
  arr.map((key) => {
    if (isNaN(key)) {
      arr1.push(key);
    }
  });
  return arr1;
}
function getIntegers(arr) {
  const arr1 = [];
  arr.map((key) => {
    if (Number.isInteger(key)) {
      arr1.push(key);
    }
  });
  return arr1;
}
const arr = [NaN, null, undefined, 17, "text", 17.5];
console.log(getFiniteNumbers(arr));
console.log(getFiniteNumbersV2(arr));
console.log(getNaN(arr));
console.log(getNaNV2(arr));
console.log(getIntegers(arr));
