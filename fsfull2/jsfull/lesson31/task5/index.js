export const delay = (millisec) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, millisec);
  });
};
delay(3000).then(() => console.log("Done"));
