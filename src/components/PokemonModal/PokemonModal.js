import React, { useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import typeColors from "../../data/typeColors";
import typeWeak from "../../data/typeWeak";
// import { getPokemon } from "../../services/pokemon";
import getMultipliers from "../../helpers/getMultipliers.js";
import "./style.css";

const PokemonModal = ({
  pokemon,
  pokeNum,
  showModal,
  handleClose,
  spriteUrl,
}) => {
  const [modalLoading, setModalLoading] = useState(false);
  //   const [typeData, setTypeData] = useState([]);

  //   useEffect(() => {
  //     let typesUrl = `https://pokeapi.co/api/v2/type/${pokemon.id}/`;
  //     setModalLoading(true);
  //     const fetchPokemonData = async () => {
  //       let response = await getPokemon(typesUrl);
  //       setTypeData(response);
  //       setModalLoading(false);
  //     };
  //     fetchPokemonData();
  //     console.log(typeData);
  //   }, [showModal]);

  // pulls types from PokeAPI
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

  // calculate height from decimeters to feet/inches
  const pokemonTotalInches = pokemon.height * 3.93701;
  const pokemonFeet = Math.floor(pokemonTotalInches / 12);
  const pokemonInches = pokemonTotalInches - pokemonFeet * 12;

  // calculate weight from hectograms to lbs
  const pokemonWeight = pokemon.weight / 4.536;

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
                <Col xs={12} md={5}>
                  <div className="Modal-img">
                    <img src={spriteUrl} alt={pokemon.name} />
                  </div>
                </Col>
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
                          {pokemonAbilities.map((ability) => {
                            return (
                              <h5 className="Modal-ability">{ability} </h5>
                            );
                          })}
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h1>Evolutions</h1>
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
