let pokemon = {
  name: "Pikachu",
  attack: [
    "thunderBolt",
    "ironTail",
    "quickAttack",
    "electroWeb",
    "electroBall",
  ],
  leg: 4,
  tail: true,
  evolution_Form: "riachu",
};

// Keys
console.log("keys: " + Object.keys(pokemon));

// Values
console.log("values: " + Object.values(pokemon));

// entries
console.log("entries: " + Object.entries(pokemon));

// freeze
Object.freeze(pokemon);
pokemon.name = "Charmendar";
console.log("freeze: " + pokemon.name);

// assign
let anotherPokemon = {
  name: "greNinja",
  attack: ["cut", "arialAge", "doubleTeam", "watershotagain"],
  leg: 2,
  tail: false,
  evolution_Form: "no",
};

let s = Object.assign(anotherPokemon, pokemon);
console.log(s);

class Name {
  constructor() {
    console.log("Name is Jenil");
  }
  age() {
    const date = new Date();
    const presentYear = date.getFullYear();
    const presentMonth = date.getMonth();
    const presentDay = date.getDay();

    const past = new Date(2002);
    return presentYear - past;
  }
}

const name = new Name();

console.log(name.age());
