const pinger = (count, period) => {
  let i = count;
  console.log("ping");
  const interval = setInterval(() => {
    if (--i > 0) {
     console.log("ping");
    } else {
  clearInterval(interval);
    }
  }, period);
};
pinger(5, 1000);
