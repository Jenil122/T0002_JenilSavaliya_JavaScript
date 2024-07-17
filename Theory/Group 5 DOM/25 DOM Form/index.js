// const form = document.getElementsByClassName("form")[0]
const form = document.forms["form"];
const tags = document.querySelectorAll("input");
const firstName = form["fname"];
const btn = document.getElementById("btn");
let flag = false;
const option = document.querySelectorAll("option");
const select = document.getElementById("select")



for (let i = 0; i < tags.length; i++) {
  tags[i].style.outline = "none";
}

tags.forEach((data) => {
    data.style.color = "red";
});


select.style.outline = "none"

option.forEach((data) => {
    data.style.outline = "none";
});



btn.addEventListener("click", (e) => {
  e.preventDefault();
  tags.forEach((data) => {
    if (data.innerText === "") {
      flag = true;
    }
  });
  if (flag) {
    alert("Please fill the Data");
  }
});
