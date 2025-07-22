function finishList() {
  const listItem = document.querySelector(".list");
  const liElem = document.createElement("li");
  liElem.innerHTML = "1";
  listItem.prepend(liElem);
  const findElem = document.querySelector(".special")
  const liElem1 = document.createElement("li");
  liElem1.innerHTML = "4";
  findElem.before(liElem1);
  const liElem2 = document.createElement("li");
  liElem2.innerHTML = "6";
  findElem.after(liElem2);
  const liElem3 = document.createElement("li");
  liElem3.innerHTML = "8";
  listItem.append(liElem3);
}
finishList();
