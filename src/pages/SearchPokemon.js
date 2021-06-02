import React, { useState } from "react";
import Search from "../components/Search";
import SearchDisplay from "../components/SearchDisplay";
import {
  getSearchPokemon,
  getSearchPokemonSpecies,
  getSearchPokemonEvo,
} from "../helpers/getSearchPokemon";
import getEvolutions from "../helpers/getEvolutions";
import { getPokeSprite } from "../helpers/pokeCalcs";

const SearchPokemon = () => {
  const [pokemonQuery, setPokemonQuery] = useState();
  const [pokemonQuerySpecies, setPokemonQuerySpecies] = useState();
  const [pokemonQueryEvo, setPokemonQueryEvo] = useState();
  const [evoUrls, setEvoUrls] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);

  const searchPokemon = async (query) => {
    setSearchLoading(true);
    // use pokemon name to get pokemon id
    const response = await getSearchPokemon(query);
    const results = await response.json();
    setPokemonQuery(results);
    console.log(`${results.name} ${results.id}`);
    // get species information to find evolution chain id
    const responseSpecies = await getSearchPokemonSpecies(results.name);
    const resultsSpecies = await responseSpecies.json();
    setPokemonQuerySpecies(resultsSpecies);
    console.log(resultsSpecies);
    // use evolution chain id to get evolution data
    let id = resultsSpecies.evolution_chain.url.match(/\d+/g)[1];
    const responseEvo = await getSearchPokemonEvo(id);
    const resultsEvo = await responseEvo.json();
    setPokemonQueryEvo(resultsEvo);
    console.log(resultsEvo);

    // use function get array of evolutions
    const evoData = resultsEvo.chain;
    let evoChain = [];
    evoChain = getEvolutions(evoData, evoChain);
    console.log(evoChain);

    // loop over evolution array to get names and urls
    let tempEvoUrls = [];
    for (let evoStage of evoChain) {
      const responseEvoStage = await getSearchPokemon(evoStage.species_name);
      const resultsEvoStage = await responseEvoStage.json();
      let url = getPokeSprite(resultsEvoStage);
      tempEvoUrls.push({ name: evoStage.species_name, url: url });
    }
    setEvoUrls(tempEvoUrls);
    setSearchLoading(false);
  };

  return (
    <div>
      <div className="Search-bar">
        <Search searchPokemon={searchPokemon} />
      </div>

      {!searchLoading && pokemonQuery ? (
        <SearchDisplay
          pokemonQuery={pokemonQuery}
          pokemonQuerySpecies={pokemonQuerySpecies}
          pokemonQueryEvo={pokemonQueryEvo}
          evoUrls={evoUrls}
        />
      ) : null}
    </div>
  );
};

export default SearchPokemon;
