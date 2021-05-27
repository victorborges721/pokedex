import React, { useState, useEffect } from "react";
import {
  Button,
  Col,
  Container,
  Modal,
  ProgressBar,
  Row,
} from "react-bootstrap";
import typeColors from "../../data/typeColors";
import {
  getPokeTypes,
  getPokeWeaknesses,
  getPokeAbilities,
  getPokeHeightWeight,
  getPokeStats,
} from "../../helpers/pokeCalcs";
import "./style.css";

const PokemonModal = ({
  pokemon,
  pokeNum,
  showModal,
  handleClose,
  spriteUrl,
}) => {
  // pulls types from PokeAPI data
  const pokemonTypes = getPokeTypes(pokemon);
  // determines weaknesses based on pokemon type(s). getMultipliers needed for dual type Pokemon.
  const weaknesses = getPokeWeaknesses(pokemonTypes);
  // create array of possible Pokemon abilities
  const pokemonAbilities = getPokeAbilities(pokemon);
  // // convert height from decimeters to feet/inches
  // // convert weight from hectograms to lbs
  const [pokemonFeet, pokemonInches, pokemonWeight] = getPokeHeightWeight(
    pokemon
  );
  // pull pokemon stats from PokeAPI data
  const stats = getPokeStats(pokemon);

  return (
    <>
      <Modal
        show={showModal}
        onHide={handleClose}
        animation={false}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="Modal-name">
            {pokemon.name} <span className="Modal-num">#{pokeNum}</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              {/* Pokemon Image */}
              <Col xs={12} md={5}>
                <div className="Modal-img">
                  <img src={spriteUrl} alt={pokemon.name} />
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
                  <tbody>
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
                  </tbody>
                </table>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PokemonModal;
