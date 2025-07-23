function getSection(num) {
  const number = String(num);
  const number1 = document.querySelector(`span[data-number='${number}']`);
  const parent = number1.closest(".box");
  return parent.dataset.section;
}
console.log(getSection(4));
