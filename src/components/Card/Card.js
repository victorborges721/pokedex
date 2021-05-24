import React, { useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import "./style.css";
import pokemonType from "../../helpers/pokemonTypes";
import PokemonModal from "../PokemonModal";

const Card = ({ pokemon }) => {
  // manage modal
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleOpen = () => setShowModal(true);

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
          {pokemon.types.map((type) => {
            return (
              <div
                className="Card-type"
                style={{ background: pokemonType[type.type.name] }}
              >
                {type.type.name}
              </div>
            );
          })}
        </div>
      </div>
      <PokemonModal
        pokemon={pokemon}
        showModal={showModal}
        handleClose={handleClose}
        spriteUrl={spriteUrl}
      />
    </>
  );
};

export default Card;
