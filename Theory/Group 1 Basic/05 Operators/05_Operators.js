// Arithmetic Operators
console.log("Addition: " + (45 + 15));
console.log("Subtraction: " + (45 - 15));
console.log("Multiply: " + (45 * 15));
console.log("Division: " + (45 / 15));
console.log("Exponential: " + (45 ** 5));
console.log("Module: " + (45 % 5));

let z = 36;
console.log("Post Increment: " + (z++));
console.log("Pre Increment: " + (++z));
console.log("Post Decrement: " + (z--));
console.log("Pre Decrement: " + (--z));


// Comparison Operators
let p = 96;
let s = "96"
let m = 63;
console.log("Strick Equal to: " + (p === s));
console.log("Equal to: " + (p == s));
console.log("Not Equal to: " + (p != s));
console.log("Not Strick Equal to: " + (p !== s));
console.log("Grater then: " + (p > m));
console.log("Less then: " + (p < m));
console.log("Grater then Equal to: " + (p >= m));
console.log("Less then Equal to: " + (p <= m));



// Bitwise Operators
console.log("Bitwise AND: " + (5 & 4));
console.log("Bitwise OR: " + (5 | 4));
console.log("Bitwise XOR: " + (5 ^ 4));
console.log("Bitwise NOT: " + (~5));
console.log("Right Shift: " + (5 >> 1));
console.log("Left Shift: " + (5 << 2));
console.log("unsigned Right Shift: " + (5 >>> 2));


// Logical Operators
let l = 85;
let n = 47;
console.log("AND: "+ (l > 55 && n < 89));
console.log("OR: "+ (l > 55 || n < 89));
console.log("NOT: "+ ~(l > 55 ));


// Assignment Operators
let w = 67;
w += 10;
w -= 30;
w *= 78;
w /= 45;
w %= 10;
console.log(w);


// Special Operators
let x = 5 ? console.log("Conditional Yes"): console.log("No");
console.log("typeof: "+ typeof(x));

let y = null;
let o = "J";
console.log("The Nullish Coalescing Operator - returns the first argument that is not nullish : " + (y ?? o));


const myDate = new Date(); 
console.log(myDate instanceof Date);