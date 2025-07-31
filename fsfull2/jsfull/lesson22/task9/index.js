const checkboxElem = document.querySelector(".task-status");
function func(event) {
  console.log(event.target.checked);
}
checkboxElem.addEventListener("change", func);
