function defer(func, ms) {
  // put your code here
  return function() {
    setTimeout(() => func.call(this, ...arguments), ms);
  };
}
const user = {
  name: "Tom",
  sayHi() {
    console.log(`Hi, I'm ${this.name}`);
  },
};
const deferredSayHi = defer(user.sayHi, 3000);
deferredSayHi.call({name: "Bob"});
