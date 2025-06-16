function filterNames(arr, text) {
  return arr.filter((el) => {
    if (el.length > 5) {
      return el.includes(text);
    }
  });
}

console.log(filterNames(["Oliviya", "Nastya", "Vanya", "Rita", "Sonya"], "ya"));
