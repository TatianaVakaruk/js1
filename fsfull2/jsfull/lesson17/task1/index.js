const user = {
  // put your code here
  firstName: "John",
  lastName: "Doe",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
/*user.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};*/
console.log(user.getFullName());
