const addButton = document.querySelector(".addButton");
const removeAll = document.querySelector(".removeAll");
const addToDoList = document.querySelector(".addToDoList");
const filter = document.getElementById("filter");
const editButton = document.querySelector(".editButton");

let editIndex = null;

addButton.addEventListener("click", () => {
  const input = document.getElementById("input");
  if (input.value !== "") {
    addTask(input.value);
    input.value = "";
  } else {
    alert("Please enter a To-Do");
  }
});

editButton.addEventListener("click", () => {
  const input = document.getElementById("input");
  if (input.value !== "" && editIndex !== null) {
    updateTask(editIndex, input.value);
    input.value = "";
    editIndex = null;
    toggleEditMode(false);
  } else {
    alert("Please enter a To-Do");
  }
});

removeAll.addEventListener("click", () => {
  addToDoList.innerHTML = "";
});

filter.addEventListener("change", () => {
  filterTasks();
});

function addTask(text) {
  const div = document.createElement("div");
  const p = document.createElement("p");
  const checkbox = document.createElement("input");
  const edit = document.createElement("button");
  const remove = document.createElement("button");

  checkbox.type = "checkbox";
  checkbox.classList.add("checkbox");
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      p.classList.add("completed");
    } else {
      p.classList.remove("completed");
    }
    filterTasks();
  });

  p.innerHTML = text;
  edit.innerHTML = "Edit";
  edit.classList.add("editButton");
  edit.addEventListener("click", () => {
    document.getElementById("input").value = p.innerHTML;
    editIndex = Array.from(addToDoList.children).indexOf(div);
    toggleEditMode(true);
  });

  remove.innerHTML = "Remove";
  remove.classList.add("removeButton");
  remove.addEventListener("click", () => {
    div.remove();
  });

  div.appendChild(checkbox);
  div.appendChild(p);
  div.appendChild(edit);
  div.appendChild(remove);
  addToDoList.appendChild(div);
  filterTasks();
}

function updateTask(index, newText) {
  const task = addToDoList.children[index];
  const p = task.querySelector("p");
  p.innerHTML = newText;
}

function toggleEditMode(editMode) {
  addButton.style.display = editMode ? "none" : "inline-block";
  editButton.style.display = editMode ? "inline-block" : "none";
}

function filterTasks() {
  const tasks = Array.from(addToDoList.children);
  tasks.forEach((task) => {
    const checkbox = task.querySelector(".checkbox");
    switch (filter.value) {
      case "completed":
        task.style.display = checkbox.checked ? "flex" : "none";
        break;
      case "incomplete":
        task.style.display = !checkbox.checked ? "flex" : "none";
        break;
      default:
        task.style.display = "flex";
        break;
    }
  });
}
