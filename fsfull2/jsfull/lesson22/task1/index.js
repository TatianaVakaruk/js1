const divElem = document.querySelector(".rect_div");
const pElem = document.querySelector(".rect_p");
const spanElem = document.querySelector(".rect_span");
const logTarget = (text, color) => {
  const eventsListElem = document.querySelector(".events-list");
  eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`;
};
const logGreenDiv = logTarget.bind(null, "DIV", "green");
const logGreenP = logTarget.bind(null, "P", "green");
const logGreenSPAN = logTarget.bind(null, "SPAN", "green");

const logGreyDiv = logTarget.bind(null, "DIV", "grey");
const logGreyP = logTarget.bind(null, "P", "grey");
const logGreySPAN = logTarget.bind(null, "SPAN", "grey");

divElem.addEventListener("click", logGreyDiv, {capture: true});
divElem.addEventListener("click", logGreenDiv);

pElem.addEventListener("click",logGreyP, {capture:true});
pElem.addEventListener("click", logGreenP);

spanElem.addEventListener("click",logGreySPAN, {capture: true});
spanElem.addEventListener("click", logGreenSPAN);

const clear = () => {
    const eventsListElem = document.querySelector(".events-list");
    eventsListElem.innerHTML = " ";
}
const clearBtn = document.querySelector(".clear-btn");
clearBtn.addEventListener("click", clear);


const attachHandlers = () => {
  divElem.addEventListener("click", logGreyDiv, true);
  divElem.addEventListener("click", logGreenDiv);
  pElem.addEventListener("click", logGreyP, true);
  pElem.addEventListener("click", logGreenP);
  spanElem.addEventListener("click", logGreySpan, true);
  spanElem.addEventListener("click", logGreenSpan);
};

const attachHandlersBtnElem = document.querySelector(".attach-handlers-btn");
attachHandlersBtnElem.addEventListener("click", attachHandlers);

const removeHandlers = () => {
  divElem.removeEventListener("click", logGreenDiv);
  divElem.removeEventListener("click", logGreyDiv, true);
  pElem.removeEventListener("click", logGreenP);
  pElem.removeEventListener("click", logGreyP, true);
  spanElem.removeEventListener("click", logGreenSpan);
  spanElem.removeEventListener("click", logGreySpan, true);
};

const removeHandlersBtnElem = document.querySelector(".remove-handlers-btn");
removeHandlersBtnElem.addEventListener("click", removeHandlers);

document.addEventListener("DOMContentLoaded", () => {
  attachHandlers();
});
