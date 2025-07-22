const user = {
  firstName: "John",
  lastName: "Doe",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(fullName) {
    const arr = fullName.split(" ");
  return (user.firstName = arr[0]), (user.lastName = arr[1]);
  },
};
console.log(user);
console.log(user.getFullName());
console.log(user.setFullName("Tom Soer"));
console.log(user);