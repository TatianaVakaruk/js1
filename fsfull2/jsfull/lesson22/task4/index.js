const checkboxElem = document.querySelector(".task-status");
checkboxElem.addEventListener("change",() =>{
if (checkboxElem.checked) {
  console.log(true);
  console.log(checkboxElem.value);
} else {
console.log(false);
console.log(checkboxElem.value);
}
});
