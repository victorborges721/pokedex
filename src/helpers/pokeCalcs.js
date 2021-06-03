import allTypes from "../data/allTypes.js";

const getMultipliers = (types) => {
  const multipliers = {
    defense: {},
    attack: {},
  };
  types.forEach((type) => {
    let damage_relations = allTypes[type];
    let no_damage_to = damage_relations.attack.zero;
    let no_damage_from = damage_relations.defense.zero;
    let half_damage_to = damage_relations.attack.half;
    let half_damage_from = damage_relations.defense.half;
    let double_damage_to = damage_relations.attack.double;
    let double_damage_from = damage_relations.defense.double;
    no_damage_to.forEach((type) => {
      if (multipliers.attack.hasOwnProperty(type)) {
        multipliers.attack[type] = multipliers.attack[type] * 0;
      } else {
        multipliers.attack[type] = 0;
      }
    });
    no_damage_from.forEach((type) => {
      if (multipliers.defense.hasOwnProperty(type)) {
        multipliers.defense[type] = multipliers.defense[type] * 0;
      } else {
        multipliers.defense[type] = 0;
      }
    });
    half_damage_to.forEach((type) => {
      if (multipliers.attack.hasOwnProperty(type)) {
        multipliers.attack[type] = multipliers.attack[type] * 0.5;
      } else {
        multipliers.attack[type] = 0.5;
      }
    });
    half_damage_from.forEach((type) => {
      if (multipliers.defense.hasOwnProperty(type)) {
        multipliers.defense[type] = multipliers.defense[type] * 0.5;
      } else {
        multipliers.defense[type] = 0.5;
      }
    });
    double_damage_to.forEach((type) => {
      if (multipliers.attack.hasOwnProperty(type)) {
        multipliers.attack[type] = multipliers.attack[type] * 2;
      } else {
        multipliers.attack[type] = 2;
      }
    });
    double_damage_from.forEach((type) => {
      if (multipliers.defense.hasOwnProperty(type)) {
        multipliers.defense[type] = multipliers.defense[type] * 2;
      } else {
        multipliers.defense[type] = 2;
      }
    });
  });
  return multipliers;
};

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

export const getFlavorText = (pokemonQuerySpecies) => {
  let flavorText = "";
  for (let text of pokemonQuerySpecies.flavor_text_entries) {
    if (text.language.name === "en") {
      flavorText = text.flavor_text;
      break;
    } else {
      continue;
    }
  }
  return flavorText;
};

export const getEvolutions = (evoData, evoChain) => {
  do {
    let numberOfEvolutions = evoData.evolves_to.length;

    evoChain.push({
      species_name: evoData.species.name,
      // min_level: !evoData ? 1 : evoData.min_level,
      // trigger_name: !evoData ? null : evoData.trigger.name,
      // item: !evoData ? null : evoData.item,
    });

    if (numberOfEvolutions > 1) {
      for (let i = 1; i < numberOfEvolutions; i++) {
        evoChain.push({
          species_name: evoData.evolves_to[i].species.name,
          // min_level: !evoData.evolves_to[i]
          //   ? 1
          //   : evoData.evolves_to[i].min_level,
          // trigger_name: !evoData.evolves_to[i]
          //   ? null
          //   : evoData.evolves_to[i].trigger.name,
          // item: !evoData.evolves_to[i] ? null : evoData.evolves_to[i].item,
        });
      }
    }

    evoData = evoData.evolves_to[0];
  } while (evoData !== undefined && evoData.hasOwnProperty("evolves_to"));

  return evoChain;
};
