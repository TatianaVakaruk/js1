const countOccurrences = (text, str) => {
  // put your code here
  let count = 0;
  let index = 0;
  if (text === undefined) {
    text = "";
  }
  if (str === "") {
    return null;
  }
  while ((index = text.indexOf(str, index)) !== -1) {
    count += 1;
    index += str.length;
  }
  return count;
};
