const event = {
  message: "Welcome to the party!",
  guests: [
    { name: "Tom", age: 18, email: "tom@gmail.com"},
    { name: "Jogn", age: 19, email: "jogn@gmail.com"},
    { name: "Ann", age: 16, email: "ann@gmail.com"},
  ],
  getInvitations() {
    return this.guests.filter(({age}) => age >= 18).map(({name, email}) => ({message: `Dear ${name}! ${this.message}`, email}));
  },
};
console.log(event.getInvitations());
