import React from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import pokemonType from "../../helpers/pokemonTypes";
import "./style.css";

const PokemonModal = ({ pokemon, showModal, handleClose, spriteUrl }) => {
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
                  {pokemon.types.map((type) => {
                    return (
                      <div
                        className="Modal-type"
                        style={{ background: pokemonType[type.type.name] }}
                      >
                        {type.type.name}
                      </div>
                    );
                  })}
                </div>
                <div className="Modal-types">
                  <h5>Weaknesses:</h5>
                  {pokemon.types.map((type) => {
                    return (
                      <div
                        className="Modal-type"
                        style={{ background: pokemonType[type.type.name] }}
                      >
                        {type.type.name}
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
    </>
  );
};

export default PokemonModal;
