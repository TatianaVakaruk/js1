const successPromise = new Promise(resolve => {
  resolve(67);
});
successPromise.then(function onSuccess(number) {
  const result = number * number;
  console.log(result);
});

successPromise.catch(function onError() {
  console.log("I am an error");
});
