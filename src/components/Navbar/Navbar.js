import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./style.css";
import { CgPokemon } from "react-icons/cg";

const NavigationBar = () => {
  return (
    <Navbar bg="danger" className="navbar">
      <Container>
        <LinkContainer to="/" className="logo">
          <Navbar.Brand>
            <CgPokemon size="2rem" />
            Pokédex
          </Navbar.Brand>
        </LinkContainer>

        <Nav>
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/pokedex">
            <Nav.Link>Pokedex</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/typechart">
            <Nav.Link>TypeChart</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
