import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import bgimage from "../images/background.jpeg";

const Home = () => {
  return (
    <div>
      <Jumbotron
        style={{
          backgroundImage: `url(${bgimage})`,
          backgroundSize: "cover",
          height: "93.5vh",
        }}
        className="jumbotron"
      >
        <div className="jumbotron-text">
          <h1 className="jumbotron-title">Gotta Catch 'Em All!</h1>
          <p>
            Visit the Pokédex to browse the numerous Pokémon that inhabit the
            world, or search for a specific Pokémon to learn more about it!
          </p>
          <div className="jumbotron-buttons">
            <Link to="/pokedex">
              <Button variant="danger" size="lg" className="jumbotron-button">
                Visit Pokédex
              </Button>
            </Link>
            <Link to="/searchpokemon">
              <Button variant="danger" size="lg" className="jumbotron-button">
                Search a Pokemon
              </Button>
            </Link>
          </div>
        </div>
      </Jumbotron>
    </div>
  );
};

export default Home;
