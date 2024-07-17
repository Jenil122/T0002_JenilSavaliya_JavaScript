const btn = document.getElementById("btn");
let countdown = document.getElementById("countdown");
let stopBtn = document.getElementById("stopBtn")

btn.addEventListener("click", () => {
  let number = document.querySelector(".number").value-1;
  setInterval(() => {
    if (number > 0) {
      countdown.innerHTML = number;
      number--;
      countdown.style.display = "block"
    } else if (number === 0) {
      countdown.innerHTML = "";
      countdown.style.display = "none"
    } 
  }, [1000]);
});
