function createButton(buttonText) {
  const budyElem = document.querySelector("body");
  const button = document.createElement("button");
  button.innerHTML = buttonText;
  budyElem.append(button);
}
createButton();
