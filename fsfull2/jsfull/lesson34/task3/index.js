const baseUrl = "https://68a42ae6c123272fb9b19b0c.mockapi.io/name";
const buttonElem = document.querySelector(".submit-button");
const formElem = document.querySelector(".login-form");

const putData = (event) => {
  event.preventDefault();
  let data1 = Object.fromEntries(new FormData(formElem));
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(data1),
}).then(response => response.json())
.then(data => {
  alert(JSON.stringify(data));
  formElem.reset();
}).catch(error => {
    console.error('Ошибка при загрузке данных:', error);
  });
 
}
const onInput = () => {
    if (formElem.reportValidity()) {
      buttonElem.disabled = false;
    } else {
        buttonElem.disabled = true;
    }
}
formElem.addEventListener("input", onInput);
buttonElem.addEventListener("click", putData);

