const img = document.querySelector("#img");
const divImg = document.querySelectorAll(".divImg img");
const container = document.getElementById("container");

let current = 0;

function createImg(current) {
  img.innerHTML = `<img src="${divImg[current].src}" />`;
}

function previous() {
  if (current === 0) {
    current = divImg.length - 1;
    createImg(current);
  } else {
    current--;
    createImg(current);
  }
}

function next() {
  if (current === divImg.length - 1) {
    current = 0;
    createImg(current);
  } else {
    current++;
    createImg(current);
  }
}

setInterval(() => {
  next();
}, [3000]);

createImg(current);
