import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import bgimage from "../images/background.jpeg";

const Home = () => {
  return (
    <div>
      <Jumbotron
        style={{
          backgroundImage: `url(${bgimage})`,
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <div>
          <h1>Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </div>
      </Jumbotron>
    </div>
  );
};

export default Home;
