import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./style.css";
import pokemonList from "../../data/pokemonList";

const Search = ({ searchPokemon }) => {
  const [search, setSearch] = useState("");

  // Find all inputs on the DOM which are bound to a datalist via their list attribute.
  const inputs = document.querySelector("#searchBox");
  let optionFound = false;
  // When the value of the input changes…
  if (inputs) {
    inputs.addEventListener("change", function () {
      optionFound = false;
      let datalist = this.list;
      // Determine whether an option exists with the current value of the input.
      for (let j = 0; j < datalist.options.length; j++) {
        if (this.value === datalist.options[j].value) {
          optionFound = true;
          break;
        }
      }
      // use the setCustomValidity function of the Validation API
      // to provide the user feedback if the value does not exist in the datalist
      if (optionFound) {
        this.setCustomValidity("");
      } else {
        this.setCustomValidity("Please select a valid Pokemon name.");
      }
    });
  }

  // prevent default of form submission
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // if the input value matches a Pokemon name on the list, continue to search
  const handleSearch = (query) => {
    if (optionFound) {
      searchPokemon(query);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          list="pokemon"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          autoFocus
          id="searchBox"
        />
        <datalist id="pokemon">
          {pokemonList.map((pokemon, index) => {
            return <option value={pokemon} key={index} />;
          })}
        </datalist>
        <Button
          variant="danger"
          type="submit"
          onClick={() => handleSearch(search.toLowerCase())}
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
