
const baseUrl = "https://63ad3e19da81ba97619671ad.mockapi.io/users";
const buttonElem = document.querySelector(".submit-button");
const formElem = document.querySelector(".login-form");

const onClick = () => {
  alert(JSON.stringify(Object.fromEntries(new FormData(formElem))));

  formElem.reset();

  return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(Object.fromEntries(new FormData(formElem))),
    });
    
};
const onInput = () => {
    if (formElem.reportValidity()) {
      buttonElem.disabled = false;
    } else {
        buttonElem.disabled = true;
    }
}
formElem.addEventListener("input", onInput);
buttonElem.addEventListener("click", onClick);

