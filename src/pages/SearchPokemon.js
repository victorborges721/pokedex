import React, { useState } from "react";
import Search from "../components/Search";
import SearchDisplay from "../components/SearchDisplay";
import { getSearchPokemon } from "../helpers/getSearchPokemon";

const SearchPokemon = () => {
  const [pokemonQuery, setPokemonQuery] = useState();
  const [searchLoading, setSearchLoading] = useState(false);

  const searchPokemon = async (query) => {
    setSearchLoading(true);
    const response = await getSearchPokemon(query);
    const results = await response.json();
    setPokemonQuery(results);
    setSearchLoading(false);
  };

  return (
    <div>
      <div className="Search-bar">
        <Search searchPokemon={searchPokemon} />
      </div>

      {!searchLoading && pokemonQuery ? (
        <SearchDisplay pokemonQuery={pokemonQuery} />
      ) : null}
    </div>
  );
};

export default SearchPokemon;
