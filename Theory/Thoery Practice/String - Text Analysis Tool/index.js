const input = "My name is Jenil Savaliya";


// Character Count
console.log("Character Count: " + input.length);


// Word Count
const splitWord = input.split(" ");
console.log("Word Count: " + splitWord.length);


// Word Frequecy Count
for (let i = 0; i < splitWord.length; i++) {
  let frequency = 0;
  for (let j = 0; j < splitWord[i].length; j++) {
    frequency++;
  }
  console.log(`${splitWord[i]}: ` + frequency);
}


// Frequecy of each Duplicate Word
const unique = [];
const notUnique = []

for(let i=0; i<input.length; i++){
  if(unique.indexOf(input[i]) === -1 && input[i] !== " "){
    unique.push(input[i]);
  }else {
    notUnique.push(input[i])
  }
}

for(let i=0; i<unique.length; i++){
  let counter = 1;
  for(let j=0; j<notUnique.length; j++){
    if (unique[i] === notUnique[j]) {
      counter++;
    }
  }
  if (counter > 1) {
    console.log(`${unique[i]}: ` + counter);
  }
}