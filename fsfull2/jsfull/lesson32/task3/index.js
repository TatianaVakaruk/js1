 const makePromise = (num) => {
  // put you code here
  return new Promise(resolve=>{
    return resolve(num);
  });
};
makePromise(17).then(number => {
  console.log(number); // 17
});
