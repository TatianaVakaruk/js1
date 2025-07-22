class Order {
  // put your code here
   id = Math.random (). toString (36) .replace (/ [^ az] + / , '');
  dateCreated = new Date();
  isConfirmed = false;
  dateConfirmed = new Date();
  constructor(price, city, type) {
    this.price = price;
    this.city = city;
    this.type = type;
  }
  checkPrice() {
    if (this.price > 1000){
      return true;
    }
    return false;
  }
  confirmOrder() {
    if (this.isConfirmed === false){
    this.isConfirmed = true;
 this.dateConfirmed = new Date();
    }
  }
  isValidType() {
    if (this.type === "Buy" || this.type === "Sell") {
      return true;
    }
    return false;
  }
}
console.log(Math.random (). toString (36) .replace (/ [^ az] + / , ''));
