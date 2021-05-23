import React from "react";
import "./style.css";
import pokemonType from "../../helpers/pokemonTypes";

const Card = ({ pokemon }) => {
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
    <div className="Card hvr-grow">
      <div className="Card-img">
        {/* prettier-ignore */}
        <img
          src={spriteUrl}
          alt=""
        />
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
      {/* <div className="Card-info">
        <div className="Card-data Card-data-number">
          <p className="title">National Dex #{pokeNum}</p>
        </div>
      </div> */}
    </div>
  );
};

export default Card;
