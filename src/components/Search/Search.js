import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./style.css";

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
        />
        <datalist id="pokemon">
          <option value="bulbasaur" />
          <option value="ivysaur" />
          <option value="venusaur" />
        </datalist>
        <Button
          variant="danger"
          type="button"
          onClick={(e) => searchPokemon(search.toLowerCase())}
        >
          Search
        </Button>
      </form>
    </div>
  );
};

export default Search;
