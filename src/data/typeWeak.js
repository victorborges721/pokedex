const typeWeak = {
  normal: ["fighting"],
  fighting: ["flying", "psychic", "fairy"],
  flying: ["rock", "electric", "ice"],
  poison: ["ground", "psychic"],
  ground: ["water", "grass", "ice"],
  rock: ["fighting", "ground", "steel", "water", "grass"],
  bug: ["flying", "rock", "fire"],
  ghost: ["ghost", "dark"],
  steel: ["fire", "fighting", "ground"],
  fire: ["ground", "rock", "water"],
  water: ["grass", "electric"],
  grass: ["flying", "poison", "bug", "fire", "ice"],
  electric: ["ground"],
  psychic: ["bug", "ghost", "dark"],
  ice: ["fighting", "rock", "steel", "fire"],
  dragon: ["ice", "dragon", "fairy"],
  dark: ["fighting", "bug", "fairy"],
  fairy: ["poison", "steel"],
};

export default typeWeak;
