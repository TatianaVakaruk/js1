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
  wheels: false,
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

 
   function getOwnProps(ship) {
    let arr = [];
  for (let prop in ship){
      if (ship.hasOwnProperty(prop) && (typeof ship[prop] !== "function")){
        arr.push(prop);
      }
  }
      
   return arr;
}

console.log(getOwnProps());
