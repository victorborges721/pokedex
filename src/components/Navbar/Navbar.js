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
          <Nav className="ml-auto" variant="pills" activeKey="/">
            <LinkContainer exact to="/">
              <Nav.Link eventKey="link-1">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/pokedex">
              <Nav.Link eventKey="link-2">Pokédex</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/searchpokemon">
              <Nav.Link eventKey="link-3">Search Pokemon</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/typechart">
              <Nav.Link eventKey="link-4">TypeChart</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link eventKey="link-5">About</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
