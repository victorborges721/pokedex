export async function getPokemon(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      });
  });
}

const baseUrl = "https://pokeapi.co/api/v2";
const query = {
  pokemon: "pokemon",
  pokemonSpecies: "pokemon-species",
  evolutionChain: "evolution-chain",
};

export async function getSearchPokemon(pokemon) {
  return fetch(`${baseUrl}/${query.pokemon}/${pokemon}`);
}

export async function getSearchPokemonSpecies(pokemon) {
  return fetch(`${baseUrl}/${query.pokemonSpecies}/${pokemon}`);
}
export async function getSearchPokemonEvo(id) {
  return fetch(`${baseUrl}/${query.evolutionChain}/${id}`);
}
