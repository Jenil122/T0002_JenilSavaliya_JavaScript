const addElementBtn = document.getElementById("btn");
const data = document.getElementById("data");
const removeBtn = document.getElementById("removeBtn");
const body = document.getElementsByTagName("body");

// addEventListener, click
addElementBtn.addEventListener("click", () => {
  const create = document.createElement("p");
  create.innerText = "Jenil";
  data.appendChild(create);
});

removeBtn.addEventListener("click", () => {
  if (data.children.length > 2) {
    data.removeChild(data.lastChild);
  }
});

// mousemove, dblClick, removeEventListener
const mouse = document.getElementById("mouse");
const remove = document.getElementById("remove");

function mouseFunction() {
  mouse.innerHTML = Math.random() * 15;
}

mouse.addEventListener("mousemove", mouseFunction);

remove.addEventListener("click", () => {
  mouse.removeEventListener("mousemove", mouseFunction);
});
remove.addEventListener("dblclick", () => {
  mouse.addEventListener("mousemove", mouseFunction);
});

const ChangeThem = () => {
  body[0].classList.toggle("black");
};
