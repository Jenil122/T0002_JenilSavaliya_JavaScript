// Global Scope
var x = 45;
{
  x = 78;
}
console.log(x);



// Local Scope
let y = 45;
{
  let y = 0;
  y += 78;
}
console.log(y);



// Function Scope
let z = 12;
function sum() {
  let z = 45;
  console.log(z);
}
sum();
console.log(z);


// Block Scope
let xy = 45;
{
  let xy = 0;
  xy += 78;
  console.log(xy);
}

// console.log(xy);