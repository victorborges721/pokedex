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
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <p>
            <Link to="/pokedex">
              <Button variant="danger" size="lg">
                Visit Pokédex
              </Button>
            </Link>
          </p>
        </div>
      </Jumbotron>
    </div>
  );
};

export default Home;
