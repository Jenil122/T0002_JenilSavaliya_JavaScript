const addButton = document.querySelector(".addButton");
const removeAll = document.querySelector(".removeAll");
const addToDoList = document.querySelector(".addToDoList");
const filterSelect = document.getElementById("filter");

let arr = [];

addButton.addEventListener("click", () => {
  const input = document.getElementById("input");

  if (input.value !== "") {
    const todo = {
      text: input.value,
      completed: false,
    };

    arr.push(todo);
    renderList();

    input.value = "";
  } else {
    alert("Please enter the ToDo");
  }
});

removeAll.addEventListener("click", () => {
  arr = [];
  renderList();
});

filterSelect.addEventListener("change", renderList);

function renderList() {
  addToDoList.innerHTML = "";

  let filteredArr = arr;
  if (filterSelect.value === "completed") {
    filteredArr = arr.filter((todo) => todo.completed);
  } else if (filterSelect.value === "incomplete") {
    filteredArr = arr.filter((todo) => !todo.completed);
  }

  filteredArr.forEach((todo, index) => {
    const div = document.createElement("div");
    const p = document.createElement("p");
    const edit = document.createElement("button");
    const remove = document.createElement("button");
    const checkbox = document.createElement("input");
    const editIndivial = document.querySelector(".editIndivial");

    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", () => {
      todo.completed = checkbox.checked;
      renderList();
    });

    p.innerHTML = todo.text;
    if (todo.completed) {
      p.style.textDecoration = "line-through";
    }
    edit.innerHTML = "Edit";
    remove.innerHTML = "Remove";

    div.appendChild(checkbox);
    div.appendChild(p);
    div.appendChild(edit);
    div.appendChild(remove);
    addToDoList.appendChild(div);

    edit.onclick = () => {
      editIndivial.style.display = "inline-block";
      addButton.style.display = "none";
      input.value = todo.text;
      editIndivial.onclick = () => {
        todo.text = input.value;
        renderList();
        addButton.style.display = "inline-block";
        editIndivial.style.display = "none";
        input.value = "";
      };
    };
    remove.onclick = () => {
      arr.splice(index, 1);
      renderList();
    };
  });
}
