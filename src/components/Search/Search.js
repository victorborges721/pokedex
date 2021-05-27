import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./style.css";
// import SelectSearch from "react-select-search";

const Search = ({ searchPokemon }) => {
  //   const options = [
  //     { name: "Bulbasaur", value: "Bulbasaur" },
  //     { name: "Ivysaur", value: "Ivysaur" },
  //     { name: "Venusaur", value: "Venusaur" },
  //   ];

  const [search, setSearch] = useState("");

  return (
    <div>
      {/* <SelectSearch
        options={options}
        placeholder="Search"
        search
        closeOnSelect
        onChange={handleSearch}
      /> */}
      <h1>{search}</h1>
      <form>
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
        <Button variant="danger" onClick={(e) => searchPokemon(search)}>
          Search
        </Button>
      </form>
    </div>
  );
};

export default Search;
