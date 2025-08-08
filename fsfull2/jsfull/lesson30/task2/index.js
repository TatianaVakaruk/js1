const userDataPromise = new Promise(resolve => {
  setTimeout(() => {
    resolve({ name: 'Tom', age: 17 });
  }, 1000);
});
console.log(userDataPromise);
userDataPromise.then(function onSuccess(userData) {
  console.log(userData);
});
userDataPromise.then(function onSuccess(userData) {
  console.log(`My name is ${userData.name}. I am ${userData.age} years old`);
});
