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
import { getPokemon } from "../../helpers/getPokemon";
import getMultipliers from "../../helpers/getMultipliers.js";
import getEvolutions from "../../helpers/getEvolutions.js";
import "./style.css";

const PokemonModal = ({
  pokemon,
  pokeNum,
  showModal,
  handleClose,
  spriteUrl,
  modalLoading,
}) => {
  // const [modalLoading, setModalLoading] = useState(false);
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

  // const loadingEvo = async (data) => {
  //   let _evoData = await Promise.all(
  //     data.map(async (pokemon) => {
  //       let pokemonRecord = await getPokemon(pokemon.url);
  //       return pokemonRecord;
  //     })
  //   );
  //   setEvoData(_evoData);
  // };

  // pulls types from PokeAPI data
  const pokemonTypes = [];
  pokemonTypes.push(pokemon.types[0].type.name);
  if (pokemon.types[1]) {
    pokemonTypes.push(pokemon.types[1].type.name);
  }
  // determines weaknesses based on pokemon type(s). getMultipliers needed for dual type Pokemon.
  const typeRelations = getMultipliers(pokemonTypes); // includes attack and defense relations
  const defenseRelations = typeRelations.defense; // pulls out defense relations
  const weaknesses = []; // empty array to put weaknesses into
  let defenseRelationsArray = Object.entries(defenseRelations); // creates an array of arrays [type, effectiveness]
  for (let pair of defenseRelationsArray) {
    if (pair[1] > 1) {
      weaknesses.push(pair[0]);
    }
  }

  // create array of possible Pokemon abilities
  const pokemonAbilities = [];
  pokemonAbilities.push(pokemon.abilities[0].ability.name);
  if (pokemon.abilities[1] && !pokemon.abilities[1].is_hidden) {
    pokemonAbilities.push(pokemon.abilities[1].ability.name);
  }

  // convert height from decimeters to feet/inches
  const pokemonTotalInches = pokemon.height * 3.93701;
  const pokemonFeet = Math.floor(pokemonTotalInches / 12);
  const pokemonInches = pokemonTotalInches - pokemonFeet * 12;

  // convert weight from hectograms to lbs
  const pokemonWeight = pokemon.weight / 4.536;

  // pull pokemon stats from PokeAPI data
  const stats = [
    { stat: "HP", num: pokemon.stats[0].base_stat },
    { stat: "Atk", num: pokemon.stats[1].base_stat },
    { stat: "Def", num: pokemon.stats[2].base_stat },
    { stat: "Sp.Atk", num: pokemon.stats[3].base_stat },
    { stat: "Sp.Def", num: pokemon.stats[4].base_stat },
    { stat: "Speed", num: pokemon.stats[5].base_stat },
  ];

  return (
    <>
      {modalLoading ? (
        <h1>Loading... </h1>
      ) : (
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
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default PokemonModal;
