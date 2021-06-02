import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./style.css";
import pokemonList from "../../data/pokemonList";

const Search = ({ searchPokemon }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          list="pokemon"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          autoFocus
        />
        <datalist id="pokemon">
          {pokemonList.map((pokemon, index) => {
            return <option value={pokemon} key={index} />;
          })}
        </datalist>
        <Button
          variant="danger"
          type="button"
          onClick={(e) => {
            searchPokemon(search.toLowerCase());
            e.target.value = "";
          }}
        >
          Search
        </Button>
        <Button type="reset" variant="dark">
          Clear
        </Button>
      </form>
    </div>
  );
};

export default Search;
