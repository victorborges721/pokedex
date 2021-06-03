import React, { useState, useEffect } from "react";
import { getPokemon } from "../../helpers/fetchData";
import Card from "../Card";
import { Button, ButtonGroup } from "react-bootstrap";
import "./style.css";

const Pokedex = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const initialUrl = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    const fetchData = async () => {
      let response = await getPokemon(initialUrl);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadingPokemon(response.results);
      setLoading(false);
    };
    fetchData();
  }, []);

  const next = async () => {
    setLoading(true);
    let data = await getPokemon(nextUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  };

  const prev = async () => {
    if (!prevUrl) return;
    setLoading(true);
    let data = await getPokemon(prevUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  };

  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecord = await getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };

  return (
    <div>
      {loading ? (
        <h1 className="loading">Loading...</h1>
      ) : (
        <section className="Pokedex">
          <div className="Pokedex-buttons">
            <ButtonGroup>
              <Button variant="dark" onClick={prev}>
                Prev
              </Button>
              <Button variant="dark" onClick={next}>
                Next
              </Button>
            </ButtonGroup>
          </div>
          <div className="grid-container">
            {pokemonData.map((pokemon) => {
              return <Card key={pokemon.id} pokemon={pokemon} />;
            })}
          </div>
          <div className="Pokedex-buttons">
            <ButtonGroup>
              <Button variant="dark" onClick={prev}>
                Prev
              </Button>
              <Button variant="dark" onClick={next}>
                Next
              </Button>
            </ButtonGroup>
          </div>
        </section>
      )}
    </div>
  );
};

export default Pokedex;
