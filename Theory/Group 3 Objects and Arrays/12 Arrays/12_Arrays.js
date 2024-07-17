let number = [12, 15, 14, 18, 19, 20, 125];
number[1] = 78;
console.log(number[0]);
console.log(number[1]);

// for-each loop
let arr = [1, 5, 3, 56, 55, 43, 5, 6];
arr.forEach((element, index) => {
  console.log("index " + index + " element " + element);
});
