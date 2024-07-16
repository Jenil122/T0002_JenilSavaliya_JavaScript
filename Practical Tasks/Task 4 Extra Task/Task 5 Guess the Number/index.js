const btn = document.getElementById("btn");
const display = document.getElementById("display");
const attemp = document.getElementById("attemp");
let attempValue = Number(attemp.innerHTML);

let computer = Math.floor(Math.random() * 100);
console.log(computer);

const restart = () => {
  window.location.reload();
};

btn.addEventListener("click", () => {
  let numberData = document.getElementById("number");
  let number = Number(numberData.value);

  if (number !== 0 && number < 100 && attempValue > 0) {
    if (number === computer) {
      display.innerHTML = `
        <h3>You Win</h3>
        <button onClick="restart()">Play Again</button>
        `;
    } else if (number > computer) {
      attemp.innerHTML = --attempValue;
      display.innerHTML = "Too High";
    } else {
      attemp.innerHTML = --attempValue;
      display.innerHTML = "Too Low";
    }
  } else {
    alert("Enter the Number");
  }
});
