const firstInput = document.getElementById("first");
const secondInput = document.getElementById("second");
const showData = document.getElementById("showData");

let ans;

function plus() {
  let first = Number(firstInput.value);
  let second = Number(secondInput.value);
  if (first !== "" && second) {
    ans = first + second;
    showData.innerHTML = `Ans: ${ans}`;
  } else {
    showData.innerHTML = "Please filed the input";
  }
}
function minus() {
  let first = Number(firstInput.value);
  let second = Number(secondInput.value);
  if (first !== "" && second) {
    ans = first - second;
    showData.innerHTML = `Ans: ${ans}`;
  } else {
    showData.innerHTML = "Please Enter the filed";
  }
}
function multi() {
  let first = Number(firstInput.value);
  let second = Number(secondInput.value);
  if (first !== "" && second) {
    ans = first * second;
    showData.innerHTML = `Ans: ${ans}`;
  } else {
    showData.innerHTML = "Please Enter the filed";
  }
}
function divison() {
  let first = Number(firstInput.value);
  let second = Number(secondInput.value);
  if (first !== "" && second) {
    ans = first / second;
    showData.innerHTML = `Ans: ${ans}`;
  } else {
    showData.innerHTML = "Please Enter the filed";
  }
}
