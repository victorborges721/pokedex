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
import "./style.css";

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
      <Container>
        <Row>
          {/* Pokemon Image */}
          <Col xs={12} md={5}>
            <div className="Search-img">
              <img src={spriteUrl} alt={pokemonQuery.name} />
            </div>
          </Col>
          {/* Pokemon Types */}
          <Col xs={12} md={7}>
            <h1 className="Search-name">{pokemonQuery.name}</h1>

            <div className="Search-types">
              <h5>Type(s):</h5>
              {pokemonTypes.map((type, index) => {
                return (
                  <div
                    className="Search-type"
                    style={{ background: typeColors[type] }}
                    key={index}
                  >
                    {type}
                  </div>
                );
              })}
            </div>
            {/* Pokemon Weaknesses */}
            <div className="Search-types">
              <h5>Weaknesses:</h5>
              {weaknesses.map((weakness, index) => {
                return (
                  <div
                    className="Search-type"
                    style={{ background: typeColors[weakness] }}
                    key={index}
                  >
                    {weakness}
                  </div>
                );
              })}
            </div>
            {/* Pokemon Info (Height, Weight, Abilities) */}
            <div className="Search-info">
              <Container>
                <Row>
                  <Col xs="6">
                    <h5 className="Search-info-subtitle">Height:</h5>
                    <h5>
                      {pokemonFeet}' {pokemonInches.toFixed(0)}"
                    </h5>
                    <h5 className="Search-info-subtitle">Weight: </h5>
                    <h5>{pokemonWeight.toFixed(1)} lbs</h5>
                  </Col>
                  <Col xs="6">
                    <h5 className="Search-info-subtitle">Abilities:</h5>
                    {pokemonAbilities.map((ability, index) => {
                      return (
                        <h5 key={index} className="Search-ability">
                          {ability}{" "}
                        </h5>
                      );
                    })}
                  </Col>
                </Row>
              </Container>
            </div>
            <Row>
              {/* Pokemon Base Stats */}
              <Col>
                <h5>Base Stats:</h5>
                <table>
                  <tbody>
                    {stats.map((stat, index) => {
                      return (
                        <tr key={index} className="Search-stats">
                          <td>{stat.stat}</td>
                          <td className="Search-table-row">
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
                  </tbody>
                </table>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row></Row>
      </Container>
    </div>
  );
};

export default SearchDisplay;
