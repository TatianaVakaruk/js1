class Wallet {
 _balance = 0;
  getBalance() {
    return this._balance;
  }
  deposit(amount) {
   return this._balance += amount;
  }
  withdraw (amount) {
    if (amount > this._balance) {
        console.log("No enough funds");
        return;
    }
   return this._balance -= amount;
  }
}
const wallet = new Wallet();
console.log(wallet.getBallance());
console.log(wallet.deposit(40));
console.log(wallet.withdraw(12));
console.log(wallet.withdraw(100));
