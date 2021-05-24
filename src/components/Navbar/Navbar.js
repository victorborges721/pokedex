import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";
import pokeball from "../../images/pokeball.png";

const NavigationBar = () => {
  return (
    <Navbar bg="danger">
      <Container>
        <Navbar.Brand href="/">
          <span>
            <img className="logo" src={pokeball} alt="pokeball" />
          </span>
          Pokédex
        </Navbar.Brand>
        <Nav className="mr-sm-2">
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/typechart">Type Chart</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/about">About</Link>
          </Nav.Link>
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
