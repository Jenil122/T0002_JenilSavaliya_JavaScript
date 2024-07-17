const data = ["https://cdn.esawebb.org/archives/images/screen/weic2218a.jpg"];

const photo = document.querySelector(".photo");
const btn = document.getElementById("btn");
let current;

function imgCreated() {
  current = data.length - 1;
  const div = document.createElement("div");
  div.className = "img";
  const a = document.createElement("a");
  a.setAttribute("href", data[current]);
  a.target = "_";
  const createImg = document.createElement("img");
  createImg.setAttribute("src", data[current]);
  const removeButton = document.createElement("button");
  removeButton.innerHTML = "Remove";
  removeButton.id = "removeButton";

  removeButton.addEventListener("click", () => {
    a.removeAttribute("href");
    div.remove(data.slice(current, 1));
    imgUrl.innerHTML = "";
  });

  photo.appendChild(div);
  div.appendChild(a);
  a.appendChild(createImg);
  createImg.after(removeButton);
}

btn.addEventListener("click", () => {
  const imgUrl = document.getElementById("imgUrl");
  if (imgUrl.value !== "") {
    data.push(imgUrl.value);
    imgCreated();
    imgUrl.value = "";
  } else {
    alert("Please Enter the URL");
  }
});

imgCreated();
