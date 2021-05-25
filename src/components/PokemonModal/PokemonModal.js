import React, { useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import pokemonType from "../../helpers/typeColors";
import typeWeak from "../../helpers/typeWeak";
// import { getPokemon } from "../../services/pokemon";
import "./style.css";

const PokemonModal = ({ pokemon, showModal, handleClose, spriteUrl }) => {
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

  const weaknesses = typeWeak[pokemon.types[0].type.name];
  console.log(weaknesses);

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
            <Modal.Title className="Card-name">{pokemon.name}</Modal.Title>
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
                    {pokemon.types.map((type, index) => {
                      return (
                        <div
                          className="Modal-type"
                          style={{ background: pokemonType[type.type.name] }}
                          key={index}
                        >
                          {type.type.name}
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
                          style={{ background: pokemonType[weakness] }}
                          key={index}
                        >
                          {weakness}
                        </div>
                      );
                    })}
                  </div>
                </Col>
              </Row>
              <Row></Row>
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
