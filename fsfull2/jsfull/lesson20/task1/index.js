class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }
  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }
  setAge(age){
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
}
static createEmpty() {
  const user = new User("", null);
  return user;
}
};