const btnElems = document.querySelectorAll(".pagination__page");
function func(event) {
  console.log(event.target.dataset.pageNumber);
}
btnElems.forEach((el) => {
  el.addEventListener("click", func);
});
