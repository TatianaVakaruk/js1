class Vehicle {
    constructor(name, numberOfWheels){
        this.name = name;
        this.numberOfWheels = numberOfWheels;
    }
  move() {
    console.log(`${this.name} is moving`);
  }
  stop() {
    console.log(`${this.name} stopped`);
  }
}
class Ship extends Vehicle {
    constructor(name, numberOfWheels, maxSpeed) {
        super(name, numberOfWheels);
     this.maxSpeed = maxSpeed;
    }
   move() {
    console.log(`${this.name} lifting anchor up`);
   super.move();
  }
  stop() {
    super.stop();
    console.log(`${this.name} lifting anchor down`);
  }
}
const ship = new Ship("Aurora", 10, 5);
console.log(ship);
ship.move();