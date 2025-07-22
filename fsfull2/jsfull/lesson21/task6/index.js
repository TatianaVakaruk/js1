function setButton(buttonText) {
  const bodyElem = document.querySelector("body");
 return bodyElem.innerHTML = "<button>" + buttonText + "</button>";
}
console.log(setButton());
