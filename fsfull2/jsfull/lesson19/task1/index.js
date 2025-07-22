const vehicle = {
  move() {
    console.log(`${ship.name} is moving`);
  },
  stop() {
    console.log(`${ship.name} stopped`);
  },
};
const ship = {
  name: "Aurora",
  __proto__: vehicle,
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    this.move();
  },
  stopMachine() {
    this.stop();
    console.log(`${this.name} lifting anchor down`);
  },
};

vehicle.move();
ship.startMachine();
vehicle.stop();
ship.stopMachine();
