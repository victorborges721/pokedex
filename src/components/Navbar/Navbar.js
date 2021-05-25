import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./style.css";
import { CgPokemon } from "react-icons/cg";

const NavigationBar = () => {
  return (
    <Navbar bg="danger">
      <Container>
        <LinkContainer to="/" className="logo">
          <Navbar.Brand>
            <CgPokemon size="2rem" />
            Pokédex
          </Navbar.Brand>
        </LinkContainer>

        <Nav className="mr-sm-2">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
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

    // <nav className="Navbar">
    //   <div className="Navbar-center">
    //     <Link to="/">
    //       <h1 className="Navbar-logo">
    //         <span>
    //           <img className="logo" src={pokeball} alt="pokeball" />
    //         </span>
    //         Pokédex
    //       </h1>
    //     </Link>
    //     <ul className="Navbar-links">
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/about">About</Link>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  );
};

export default NavigationBar;
