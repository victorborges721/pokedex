import React, { useState, useEffect } from "react";
import "./style.css";
import pokemonType from "../../data/typeColors";
import PokemonModal from "../PokemonModal";
import { getPokemon } from "../../helpers/getPokemon";
import getEvolutions from "../../helpers/getEvolutions.js";

const Card = ({ pokemon }) => {
  // manage modal
  const [showModal, setShowModal] = useState(false);

  const [modalLoading, setModalLoading] = useState(false);
  // const [evoData, setEvoData] = useState({});
  // const [evoChain, setEvoChain] = useState([]);
  // let evoUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}`;

  // useEffect(() => {
  //   setModalLoading(true);
  //   if (showModal) {
  //     const fetchEvoData = async () => {
  //       let responseSpecies = await getPokemon(evoUrl);
  //       let responseEvo = await getPokemon(responseSpecies.evolution_chain.url);
  //       console.log(responseSpecies.evolution_chain.url);
  //       setEvoData(responseEvo.chain);
  //       // await loadingEvo(responseEvo.chain);
  //       console.log(responseEvo.chain);
  //       console.log(evoData);
  //       setEvoChain(getEvolutions(evoData, evoChain));
  //       console.log(evoChain);
  //     };
  //     fetchEvoData();
  //     setModalLoading(false);
  //   }
  // }, [showModal]);

  const handleClose = () => setShowModal(false);
  const handleOpen = () => {
    // setModalLoading(true);
    // const fetchEvoData = async () => {
    //   let responseSpecies = await getPokemon(evoUrl);
    //   let responseEvo = await getPokemon(responseSpecies.evolution_chain.url);
    //   console.log(responseSpecies.evolution_chain.url);
    //   // await updateEvoData(responseEvo.chain);
    //   await loadingEvo(responseEvo.chain);
    //   console.log(responseEvo.chain);
    //   console.log(evoData);
    //   setEvoChain(getEvolutions(evoData, evoChain));
    //   console.log(evoChain);
    // };
    // fetchEvoData();
    // setModalLoading(false);
    setShowModal(true);
  };

  // const loadingEvo = async (data) => {
  //   let _evoData = await Promise.all(
  //     data.map(async (pokemon) => {
  //       let pokemonRecord = await getPokemon(pokemon.url);
  //       return pokemonRecord;
  //     })
  //   );
  //   setEvoData(_evoData);
  // };

  // const updateEvoData = async (data) => {
  //   setEvoData(data);
  // };

  // create image url and pad National Dex number with 0's
  const baseUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
  const spriteUrl = baseUrl + pokemon.id + ".png";
  const padZeros = (num, size) => {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
  };
  const pokeNum = padZeros(pokemon.id, 3);

  return (
    <>
      <div className="Card hvr-grow" onClick={handleOpen}>
        <div className="Card-img">
          <img src={spriteUrl} alt={pokemon.name} />
        </div>
        <div className="Card-name">
          {pokemon.name} <span className="Card-num">#{pokeNum}</span>
        </div>
        <div className="Card-types">
          {pokemon.types.map((type, index) => {
            return (
              <div
                className="Card-type"
                style={{ background: pokemonType[type.type.name] }}
                key={index}
              >
                {type.type.name}
              </div>
            );
          })}
        </div>
      </div>
      {showModal && (
        <PokemonModal
          pokemon={pokemon}
          pokeNum={pokeNum}
          showModal={showModal}
          handleClose={handleClose}
          spriteUrl={spriteUrl}
          key={pokemon.id}
          modalLoading={modalLoading}
        />
      )}
    </>
  );
};

export default Card;
