function getParsedIntegers(arr) {
  const arr1 = [];
  arr.map((key) => {
    arr1.push(Number.parseInt(key));
  });
  return arr1;
}
function getParsedIntegersV2(arr) {
  const arr1 = [];
  arr.map((key) => {
    arr1.push(parseInt(key));
  });
  return arr1;
}
function getParsedFloats(arr) {
  const arr1 = [];
  arr.map((key) => {
    arr1.push(Number.parseFloat(key));
  });
  return arr1;
}
function getParsedFloatsV2(arr) {
  const arr1 = [];
  arr.map((key) => {
    arr1.push(parseFloat(key));
  });
  return arr1;
}
const arr = [NaN, null, undefined, 17, "text", 17.5];
console.log(getParsedIntegers(arr));
console.log(getParsedIntegersV2(arr));
console.log(getParsedFloats(arr));
console.log(getParsedFloatsV2(arr));