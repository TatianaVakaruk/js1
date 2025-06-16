function arrAverage(arr) {
  const summa = arr.reduce((acc, el) => {
    return acc + el;
  }, 0);
  return summa / arr.length;
}
