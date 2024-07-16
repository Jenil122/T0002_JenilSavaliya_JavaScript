// Object Creation
const x = new Object()
x.name = "abc";
x.value = 45;
console.log(x);


let books = {
    name:"JavaScript",
    hour: 15,
    Chapter: 15,
}

console.log(books.name);


// for-in loop
for (const key in books) {
    console.log(key);
}


// for-of loop
for (const iterator of books.name) {
    console.log(iterator);
}


// for-each loop
Object.values(books).forEach((e)=>{
   console.log(e);
})



// delete
delete books.hour;