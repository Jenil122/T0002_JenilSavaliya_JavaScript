// For Loop
for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    process.stdout.write("*"); // without newline
  }
  console.log();
}
console.log();


for(let i=0; i<5; i++){
  // space
  for(let j=0; j<5-i-1; j++){
    process.stdout.write(" ")
  }
  // String
  for (let j = 0; j <= i; j++) {
    process.stdout.write("*");
  }
  for (let j = 1; j <= i; j++) {
    process.stdout.write("*");
  }

  console.log();
}


// While Loop
let i = 0;
let sum = 0;
while (i < 10) {
  sum += i;
  i++;
}
console.log(sum);

// Do-While Loop
let x = 1;
let j = 1;
do {
  x = x * j;
  j++;
} while (j < 5);

console.log(x);
