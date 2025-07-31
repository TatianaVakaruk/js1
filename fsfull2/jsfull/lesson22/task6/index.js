const btnElem = document.querySelector(".single-use-btn");
function clickMe() {
  console.log("clicked");
  btnElem.removeEventListener("click", clickMe);
}
btnElem.addEventListener("click", clickMe);
