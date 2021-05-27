import React, { useState } from "react";
import "./style.css";
import pokemonType from "../../data/typeColors";
import PokemonModal from "../PokemonModal";
import { getPokeNum, getPokeSprite } from "../../helpers/pokeCalcs";

const Card = ({ pokemon }) => {
  // manage modal
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleOpen = () => setShowModal(true);

  // create image url and pad National Dex number with 0's
  const pokeNum = getPokeNum(pokemon.id);

  const spriteUrl = getPokeSprite(pokemon);

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
        />
      )}
    </>
  );
};

export default Card;
