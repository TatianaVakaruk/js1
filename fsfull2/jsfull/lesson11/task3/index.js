const splitString = (text, len) => {
  if (typeof text !== "string") {
    return null;
  }
  if (len === undefined) {
    len = 10;
  }
  let startPosition = 0;
  const strArr = [];
  while (true) {
    const chunk = text.substr(startPosition, len);
    if (chunk.length === 0) {
      break;
    }
    strArr.push(chunk);
    startPosition += len;
  }
  const lastElem = strArr.length - 1;
  if (strArr[lastElem].length < len) {
    let numPoint = len - strArr[lastElem].length;
    let point = ".".repeat(numPoint);
    strArr[lastElem] = strArr[lastElem].concat(point);
  }
  return strArr;
};
  console.log(splitText("abcdeas", 4));
  console.log(splitText([1, 2, 3, 4, 5], 4));
  console.log(splitText("abcdefghjhjvvhjvhjjghfmfhhmhfmhfhmhfm"));
