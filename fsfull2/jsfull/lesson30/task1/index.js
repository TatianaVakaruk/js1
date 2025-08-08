const addImage = (imgSrc) => {
  const p = new Promise((resolveCb, rejectCb) => {
    const imgElem = document.createElement("img");
    imgElem.setAttribute("alt", "My photo");
    imgElem.src = imgSrc;
    const containerElem = document.querySelector(".page");
    containerElem.append(imgElem);
    const onImageLoaded = () => {
    const { width, height } = imgElem;
    resolveCb({ width, height });
    };
    imgElem.addEventListener("load", onImageLoaded);
    imgElem.addEventListener("error", () => rejectCb(new Error("Image load is failed...")));
  });
  return p;
};

const resultPromise = addImage("https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg");
console.log(resultPromise);
resultPromise.then((data) => {
  const size = document.querySelector(".image-size");
  size.textContent = JSON.stringify(data);
});
resultPromise.catch((error) => console.log(error));
