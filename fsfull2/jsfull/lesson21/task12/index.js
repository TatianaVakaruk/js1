function squaredNumbers() {
  const number = document.querySelectorAll(".number");
Array.from([...number], el => el.dataset.squaredNumber = el.dataset.number * el.dataset.number);
}
squaredNumbers();
