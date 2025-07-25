const tasks = [
   { text: 'Buy milk', done: true },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: false },
];

/**
 * @param {object[]} tasksList
 * @return {undefined}
 */
const renderTasks = tasksList => {
  // put your code here
  const listElem = document.querySelector(".list");
  const listItemsElems = tasksList
  .sort((a, b)=> a.done - b.done).map(({text, done}) => {
    const listItemElem = document.createElement("li");
    listItemElem.classList.add("list__item");
    const checkboxElem = document.createElement("input");
    if (done) {
       listItemElem.classList.add("list__item_done");   
    }
    checkboxElem.setAttribute("type", "checkbox");
    checkboxElem.checked = done;
    checkboxElem.classList.add("list__item-checkbox");
    listItemElem.append(checkboxElem, text);
    return listItemElem;
  });
 listElem.append(...listItemsElems);
};
renderTasks(tasks);
