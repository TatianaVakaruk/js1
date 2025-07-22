class Timer {
    constructor() {
      this.startTime = Date.now();
      this.intervalId = null;
    }
  
    start() {
      this.intervalId = setInterval(() => {
        const elapsedTime = Date.now() - this.startTime;
        const seconds = Math.floor(elapsedTime / 1000) % 60;
        const minutes = Math.floor(elapsedTime / 1000 / 60) % 60;
        const formattedTime = `${String(minutes).padStart(1, '0')}:${String(seconds).padStart(2, '0')}`;
        console.log(formattedTime);
      }, 1000);
    }
  
    stop() {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  
    reset() {
      this.stop();
      this.startTime = Date.now();
      this.start();
    }
  }
  
  const myTimer = new Timer();
  myTimer.start();
