import React from "react";
import "./page_styles.css";

const About = () => {
  return (
    <section className="section about-section">
      <h1 className="section-title">About our Pokedex</h1>
      <p>
        This app uses the{" "}
        <a href="https://pokeapi.co/" target="_blank" rel="noreferrer">
          PokeAPI
        </a>{" "}
        to provide you with the most relevant information about each individual
        Pokemon, and allows you to create your own Pokemon team so that you can
        view its strengths and weaknesses.
      </p>
    </section>
  );
};

export default About;
