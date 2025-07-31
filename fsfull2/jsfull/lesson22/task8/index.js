const inputElem = document.querySelector(".text-input");
function func(event) {
  console.log(event.target.value);
}
inputElem.addEventListener("change", func);
