const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  interval: null,
  startTimer() {
    timer.secondsPassed = this.secondsPassed;
    timer.minsPassed = this.minsPassed;
   this.interval = setInterval(() => {
      this.secondsPassed += 1;
      if (this.secondsPassed === 60) {
        this.secondsPassed = 0;
        this.minsPassed += 1;
      }
    }, 1000);
    return this.interval;
  },
  getTime() {
  
return`${String(this.minsPassed).padStart(1, "0")}:${String(this.secondsPassed).padStart(2, "0")}`;


  },
  stopTimer() {
    clearInterval(this.interval);
    this.interval = null;
    
  },
resetTimer(){
  this.minsPassed = 0;
  this.secondsPassed = 0;
},
}

console.log(timer.startTimer());
console.log(timer.getTime());
