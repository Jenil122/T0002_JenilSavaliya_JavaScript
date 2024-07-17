const btn = document.getElementById("btn");
const showData = document.querySelector(".showData");
const containers = document.querySelectorAll(".container");

function createInputFiled() {
  const inputFiled = document.querySelector(".inputFiled");
  const div = document.createElement("div");
  div.className = "dragData";
  div.draggable = true;
  div.innerHTML = inputFiled.value;
  const button = document.createElement("button");
  button.innerHTML = "Remove";
  button.onclick = () => {
    div.remove();
  };
  showData.appendChild(div);
  div.appendChild(button);
  inputFiled.value = "";
  return div;
}

function dragItem() {
  const divItem = createInputFiled();
  divItem.addEventListener("dragstart", () => {
    divItem.classList.add("dragItem");
  });
  divItem.addEventListener("dragend", () => {
    divItem.classList.remove("dragItem");
  });
}

btn.addEventListener("click", dragItem);

containers.forEach((container) => {
  container.addEventListener("dragover", (e) => {
    e.preventDefault();
    const dragItem = document.querySelector(".dragItem");
    container.appendChild(dragItem);
  });
});
