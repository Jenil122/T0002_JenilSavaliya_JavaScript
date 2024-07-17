const body = document.getElementsByTagName("body");
const create = document.createElement("div");
const p = document.createElement("p");
const defaultData = document.getElementById("default");
const before = document.getElementById("before");

// prepend
body[0].prepend(create);

// appendChild
create.appendChild(p);
p.innerText = "J";

// removeChild
body[0].removeChild(defaultData);

// before
create.before(before);
