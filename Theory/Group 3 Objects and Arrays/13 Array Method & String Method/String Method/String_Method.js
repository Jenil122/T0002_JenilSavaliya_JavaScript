let str = "abcdefgabc";
let str2 = "xyz-abc";

// String Method

// concat()
console.log("concat: " + str2);

// replace()
console.log("replace: " + str.replace("d", "5"));

// slice()
console.log("slice: " + str.slice(0, 5));

// substr()
console.log("substr: " + str.substr(3, 5));

// subString()
console.log("subString: " + str.substring(1, 3));

// toUpperCase()
console.log("upperCase: " + str.toUpperCase());

// toLowerCase()
console.log("lowerCase: " + str.toLowerCase());

// trim()
let str4 = "    Jenil Savaliya   ";
console.log("trim: " + str4.trim());

// toString()
console.log("toString: " + str.toString());

// include()
console.log("include: " + str.includes("z"));

// split()
console.log("split: " + str2.split("-"));

// valueOf()
console.log("valueOf: " + str2.valueOf());

// CharAt()
console.log("charAt: " + str.charAt(4));

// charCodeAt()
console.log("charCodeAt: " + str.charCodeAt(3));

// padStart()
console.log("padStart: " + str.padStart(3, "1"));

// String Search
// search()
console.log("search: " + str.search("fg"));

// indexOf()
console.log("indexOf: " + str.indexOf("d"));

// lastIndexof()
console.log("lastIndexOf: " + str.lastIndexOf("a"));

// match()
let str3 = "My name is Jenil Savaliya";
console.log("match: " + str3.match(/en/g));

// matchAll()
let matchAll = str3.matchAll(/a/g);
console.log("matchAll: " + Array.from(matchAll));




// unique Value

const arr = "Jenil Savaliya";
const unique = [];

for (let i = 0; i < arr.length; i++) {
  if (unique.indexOf(arr[i]) === -1 && !arr[i].includes(" ")) {
    unique.push(arr[i]);
  } 
}

console.log(unique);
