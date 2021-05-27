import getMultipliers from "./getMultipliers";

export const getPokeTypes = (pokemon) => {
  let pokemonTypes = [];
  pokemonTypes.push(pokemon.types[0].type.name);
  if (pokemon.types[1]) {
    pokemonTypes.push(pokemon.types[1].type.name);
  }
  return pokemonTypes;
};

export const getPokeWeaknesses = (pokemonTypes) => {
  let typeRelations = getMultipliers(pokemonTypes);
  let defenseRelations = typeRelations.defense;
  let weaknesses = [];
  let defenseRelationsArray = Object.entries(defenseRelations); // creates an array of arrays [type, effectiveness]
  for (let pair of defenseRelationsArray) {
    if (pair[1] > 1) {
      weaknesses.push(pair[0]);
    }
  }
  return weaknesses;
};

export const getPokeAbilities = (pokemon) => {
  let pokemonAbilities = [];
  pokemonAbilities.push(pokemon.abilities[0].ability.name);
  if (pokemon.abilities[1] && !pokemon.abilities[1].is_hidden) {
    pokemonAbilities.push(pokemon.abilities[1].ability.name);
  }
  return pokemonAbilities;
};

export const getPokeHeightWeight = (pokemon) => {
  let pokemonTotalInches = pokemon.height * 3.93701;
  let pokemonFeet = Math.floor(pokemonTotalInches / 12);
  let pokemonInches = pokemonTotalInches - pokemonFeet * 12;
  let pokemonWeight = pokemon.weight / 4.536;
  return [pokemonFeet, pokemonInches, pokemonWeight];
};

export const getPokeStats = (pokemon) => {
  return [
    { stat: "HP", num: pokemon.stats[0].base_stat },
    { stat: "Atk", num: pokemon.stats[1].base_stat },
    { stat: "Def", num: pokemon.stats[2].base_stat },
    { stat: "Sp.Atk", num: pokemon.stats[3].base_stat },
    { stat: "Sp.Def", num: pokemon.stats[4].base_stat },
    { stat: "Speed", num: pokemon.stats[5].base_stat },
  ];
};

const padZeros = (num, size) => {
  num = num.toString();
  while (num.length < size) num = "0" + num;
  return num;
};

export const getPokeNum = (num) => {
  return padZeros(num, 3);
};

export const getPokeSprite = (pokemon) => {
  let baseUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
  return baseUrl + pokemon.id + ".png";
};
