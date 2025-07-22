function finishForm() {
  const textToPas = document.querySelector("input");
  textToPas.setAttribute("type", "password");
  const fromElem = document.querySelector(".login-form");
  const inputElem = document.createElement("input");
  inputElem.setAttribute("type", "text");
  inputElem.setAttribute("name", "login");
  fromElem.prepend(inputElem);
}
finishForm();
