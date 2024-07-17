let anotherPokemon = {
    name:"greNinja",
    attack:["cut","arialAge","doubleTeam", "watershotagain"],
    leg:2,
    tail:false,
    evolution_Form:"no"
}


// stringify
let objectToJson = JSON.stringify(anotherPokemon);
console.log(objectToJson);


// parse
let jsonToObject = JSON.parse(objectToJson);
console.log(jsonToObject);