import React from "react";
import { Container, Col, Row, ProgressBar } from "react-bootstrap";
import {
  getPokeTypes,
  getPokeWeaknesses,
  getPokeAbilities,
  getPokeHeightWeight,
  getPokeStats,
  getPokeSprite,
} from "../../helpers/pokeCalcs";
import typeColors from "../../data/typeColors";

const SearchDisplay = ({ pokemonQuery }) => {
  // pulls types from PokeAPI data
  const pokemonTypes = getPokeTypes(pokemonQuery);
  // determines weaknesses based on pokemon type(s). getMultipliers needed for dual type Pokemon.
  const weaknesses = getPokeWeaknesses(pokemonTypes);
  // create array of possible Pokemon abilities
  const pokemonAbilities = getPokeAbilities(pokemonQuery);
  // // convert height from decimeters to feet/inches
  // // convert weight from hectograms to lbs
  const [pokemonFeet, pokemonInches, pokemonWeight] = getPokeHeightWeight(
    pokemonQuery
  );
  const spriteUrl = getPokeSprite(pokemonQuery);

  // pull pokemon stats from PokeAPI data
  const stats = getPokeStats(pokemonQuery);
  return (
    <div>
      <h1>{pokemonQuery.name}</h1>
      <Container>
        <Row>
          {/* Pokemon Image */}
          <Col xs={12} md={5}>
            <div className="Modal-img">
              <img src={spriteUrl} alt={pokemonQuery.name} />
            </div>
          </Col>
          {/* Pokemon Types */}
          <Col xs={12} md={7}>
            <div className="Modal-types">
              <h5>Type(s):</h5>
              {pokemonTypes.map((type, index) => {
                return (
                  <div
                    className="Modal-type"
                    style={{ background: typeColors[type] }}
                    key={index}
                  >
                    {type}
                  </div>
                );
              })}
            </div>
            {/* Pokemon Weaknesses */}
            <div className="Modal-types">
              <h5>Weaknesses:</h5>
              {weaknesses.map((weakness, index) => {
                return (
                  <div
                    className="Modal-type"
                    style={{ background: typeColors[weakness] }}
                    key={index}
                  >
                    {weakness}
                  </div>
                );
              })}
            </div>
            {/* Pokemon Info (Height, Weight, Abilities) */}
            <div className="Modal-info">
              <Container>
                <Row>
                  <Col xs="6">
                    <h5 className="Modal-info-subtitle">Height:</h5>
                    <h5>
                      {pokemonFeet}' {pokemonInches.toFixed(0)}"
                    </h5>
                    <h5 className="Modal-info-subtitle">Weight: </h5>
                    <h5>{pokemonWeight.toFixed(1)} lbs</h5>
                  </Col>
                  <Col xs="6">
                    <h5 className="Modal-info-subtitle">Abilities:</h5>
                    {pokemonAbilities.map((ability, index) => {
                      return (
                        <h5 key={index} className="Modal-ability">
                          {ability}{" "}
                        </h5>
                      );
                    })}
                  </Col>
                </Row>
              </Container>
            </div>
          </Col>
        </Row>
        <Row>
          {/* Pokemon Base Stats */}
          <Col>
            <h5>Base Stats:</h5>
            <table>
              {stats.map((stat, index) => {
                return (
                  <tr key={index} className="Modal-stats">
                    <td>{stat.stat}</td>
                    <td className="table-row">
                      <ProgressBar
                        now={stat.num}
                        max="255"
                        label={stat.num}
                        variant="danger"
                        striped
                      />
                    </td>
                  </tr>
                );
              })}
            </table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SearchDisplay;
