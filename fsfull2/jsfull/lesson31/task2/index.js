const asyncCalculator = (numbr) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Initial value: ${numbr}`);
      resolve(numbr);
    }, 500);
  }).then((value) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const squared = value * value;
        console.log(`Squared value: ${squared}`)
        resolve(squared);
      }, 500);
    });
}).then((value) => {
    const mult = value * 2;
    console.log(`Doubled value: ${mult}`);
    return mult;
  });
};
asyncCalculator(5).then((value) => console.log(value));
