import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./style.css";
import { CgPokemon } from "react-icons/cg";

const NavigationBar = () => {
  return (
    <Navbar bg="danger" className="navbar" expand="lg">
      <Container>
        <LinkContainer to="/" className="logo">
          <Navbar.Brand>
            <CgPokemon size="2rem" />
            Pokédex
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" variant="pills">
            <LinkContainer exact to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/pokedex">
              <Nav.Link>Pokédex</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/searchpokemon">
              <Nav.Link>Search Pokemon</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/typechart">
              <Nav.Link>TypeChart</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
