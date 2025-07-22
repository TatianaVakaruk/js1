export function getTitle() {
  const titleElem = document.querySelector(".title");
  return titleElem.textContent;
}
export function getDescription() {
  const descriptionElem = document.querySelector(".about");
  return descriptionElem.innerText;
}
export function getPlans() {
  const plansElem = document.querySelector(".plans");
  return plansElem.innerHTML;
}
export function getGoal() {
  const goalElem = document.querySelector(".goal");
  return goalElem.outerHTML;
}
console.log(getDescription());
