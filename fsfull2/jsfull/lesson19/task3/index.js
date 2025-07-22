function User(name, age) {
  this.name = name;
  this.age = age;
}
User.prototype.sayHi = function() {
  console.log(`Hi, I am ${this.name}`);
};
User.prototype.requestNewPhoto = function() {
  console.log(`New photo request was sent for ${this.name}`);
};
User.prototype.setAge = function(age){
  this.age = age;
  if (this.age >= 25) {
    console.log(`New photo request was sent for ${this.name}`);
  }
  if (this.age >= 0) {
    return this.age;
  };
  if (this.age < 0) {
    return false;
  }
};
const user1 = new User("Tom", 17);
//console.log(user1);
//user1.sayHi();
//user1.requestNewPhoto();
console.log(user1.setAge(29));
