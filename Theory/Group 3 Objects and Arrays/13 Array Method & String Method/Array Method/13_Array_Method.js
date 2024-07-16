let Arrays = [1,15,18,36,25,75,18,78,96];



// length
console.log("Length: "+ Arrays.length);


// Filter Method
const filterData = Arrays.filter((e)=>{
    return e > 10;
})

console.log("filter: " + filterData);


// Map Method
const mapData = Arrays.map((e)=>{
    return e * 5;
})
console.log("map: " + mapData);


// Reduce Method - left to right
const reduceData = Arrays.reduce((previous,current)=>{
    console.log(previous);
    console.log(current);
    return previous += current;
})
console.log("reduce: " + reduceData);


// Reduce Right
const reduceRightData = Arrays.reduceRight((previous,current)=>{
    return previous += current;
})
console.log("reduceRight: " + reduceRightData);


// Slice
const sliceData = Arrays.slice(0,2);
console.log("slice: " + sliceData);


// Join
const joinData = Arrays.join("-");
console.log("join: " + joinData);


// Sort
const sortData = Arrays.sort((a,b)=>{
    return a - b;
})
console.log("sort: " + sortData);

const randomSort = Arrays.sort(()=>{
    return 0.5 - Math.random()
})
console.log("random Sort: " + randomSort);


// At
const atData = Arrays.at(4);
console.log("at: " + atData);

let Arra = [1,5,36,56,26,63];
let element;
for (let i = 0; i < Arra.length; i++) {
    element = Arra.at(-1-i);
    console.log(element);
}


// Flat
const a = [[1,2,3,4],[7,8,9,10]]
const flatData = Arrays.flat()
console.log("flat: " + flatData);


// FlatMap
const flatMapData = Arrays.flatMap((e)=>{
    return e ** 2 ;
})
console.log("flatMap: " + flatMapData);


// CopyWithIn
const copyWithInData = Arrays.copyWithin(2,5);
console.log("copyWithin" + copyWithInData);


// of
const ofData = Array.of("abc","xyz",12,63);
console.log("of: " + ofData);


// From
const fromData = Array.from("JenilSavaliya");
console.log("from: " + fromData);




// Searching
// isArray
const isArray = Array.isArray(Arrays);
console.log("isArray: " + isArray);


// Find
const findData = Arrays.find((e)=>{
    return e >= 47;
});
console.log("find: " + findData);


// Index of
const indexOfData = Arrays.indexOf(78);
console.log("indexOf: " + indexOfData);


// Last Index of
const lastIndexOfData = Arrays.lastIndexOf(18);
console.log("lastIndexOf: " + lastIndexOfData);


// Find Index
const findIndexData = Arrays.findIndex((e)=>{
    return e > 15;
});
console.log("findIndex: " + findIndexData);


// Some
const someData = Arrays.some((e)=>{
    return e > 18;
})
console.log("some: " + someData);


// Every
const everyData = Arrays.every((e)=>{
    return e > 18;
})
console.log("every: " + everyData);


// Includes
const includeData = Arrays.includes(45);
console.log("include: " + includeData);





// Change Original Arrays

// Splice Method
Arrays.splice(2,0,36,12);
console.log("splice: " + Arrays);


// POP
Arrays.pop();
console.log("pop: " + Arrays); 


// Shift
Arrays.shift();
console.log("shift: " + Arrays);


// Push
Arrays.push(10);
console.log("push: " + Arrays);


// Unshift
Arrays.unshift(20)
console.log("unshift: " + Arrays);


// Reverse
Arrays.reverse();
console.log("reverse: " + Arrays);


// Fill
Arrays.fill(1);
console.log("fill: " + Arrays);


