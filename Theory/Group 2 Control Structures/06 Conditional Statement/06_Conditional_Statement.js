// if-else Statement

let x = 8;

if (x >= 18) {
  console.log("Large Number");
} else {
  console.log("Small Number");
}

// else-if Statement

let marks = 65;
if (marks < 100 && marks >= 80) {
  console.log("A");
} else if (marks < 80 && marks > 60) {
  console.log("B");
} else if (marks < 60 && marks > 40) {
  console.log("C");
} else {
  console.log("Fail");
}

// Switch Statement
let Operator = "*";
let a = 15;
let b = 10;
switch (Operator) {
  case "+":
    console.log(a + b);
    break;
  case "-":
    console.log(a - b);
    break;
  case "*":
    console.log(a * b);
    break;
  case "/":
    console.log(a / b);
    break;
  case "%":
    console.log(a % b);
    break;

  default:
    console.log("Not Valid Operator");
    break;
}
