import React from "react";
import "./style.css";
import pokemonType from "../../helpers/pokemonTypes";

const Card = ({ pokemon }) => {
  const padZeros = (num, size) => {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
  };

  const pokeNum = padZeros(pokemon.id, 3);

  return (
    <div className="Card">
      <div className="Card-img">
        <img src={pokemon.sprites.front_default} alt="" />
      </div>
      <div className="Card-name">{pokemon.name}</div>
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
      <div className="Card-info">
        <div className="Card-data Card-data-number">
          <p className="title">National Dex #{pokeNum}</p>
        </div>
        <div className="Card-data Card-data-ability">
          <p className="title">Ability</p>
          <p>{pokemon.abilities[0].ability.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
