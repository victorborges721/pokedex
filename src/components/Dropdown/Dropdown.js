import React, { useState, useRef, useEffect } from "react";
import "./style.css";

const Dropdown = ({ pokemonList, value, onChange }) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  const close = (e) => {
    setOpen(e && e.target === ref.current);
  };

  const filter = (pokemonList) => {
    return pokemonList.filter(
      (pokemon) => pokemon.toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  };

  return (
    <div className="dropdown">
      <div className="control" onClick={() => setOpen((prev) => !prev)}>
        <div className="selected-value">
          <input
            type="text"
            ref={ref}
            placeholder={value ? value : "Search a Pokemon..."}
            value={value || query}
            onChange={(e) => {
              setQuery(e.target.value);
              onChange(null);
            }}
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={`arrow ${open ? "open" : null}`}></div>
      </div>
      <div className={`options ${open ? "open" : null}`}>
        {filter(pokemonList).map((pokemon, index) => (
          <div
            className={`option ${value === pokemon ? "selected" : null}`}
            onClick={() => {
              setQuery("");
              onChange(pokemon);
              setOpen(false);
            }}
            key={index}
          >
            {pokemon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
