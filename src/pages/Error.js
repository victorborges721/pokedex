import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Container>
      <section className="section">
        <h1 className="section-title">
          Uh oh! No Pokedex information available here.
        </h1>
        <Link to="/">
          <Button variant="danger" size="lg">
            Home
          </Button>
        </Link>
      </section>
    </Container>
  );
};

export default Error;
