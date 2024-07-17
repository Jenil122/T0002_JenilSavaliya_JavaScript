const getID = document.getElementById("id");
getID.innerHTML = "My Name is ";

const getQuery = document.querySelector("p.class");
getQuery.innerHTML = "J";

const getClass = document.getElementsByClassName("class");

for (const iterator of getClass) {
  console.log(iterator.innerHTML);
}

const getTags = document.getElementsByTagName("div");
console.log(getTags[0].children);

const getName = document.getElementsByName("name");
console.log(getName[0].value);

const getQueryAll = document.querySelectorAll("p");
console.log(getQueryAll[0].innerText);

const div = document.getElementById("div");

console.log(div.firstChild);
console.log(div.firstElementChild);
console.log(div.lastChild);
console.log(div.lastElementChild);
console.log(div.parentNode);
console.log(div.parentElement);
console.log(div.nextSibling);
console.log(div.nextElementSibling);
console.log(div.previousSibling);
console.log(div.previousElementSibling);
console.log(document.documentElement.parentElement);
console.log(document.documentElement.parentNode);

div.style.height = "20px";
div.style.cssText = "border : 2px solid black; padding : 15px; margin : 10px";
