let sum = 0;
for (let i = 0; i <= 1000; i += 1){
  sum += 1;
}
let result1 = (sum - sum % 1234) / 1234;
let result2 = sum % 1234;
if (result1 > result2){
  console.log(true);
}
if (result2 > result1){
  console.log(false);
}
