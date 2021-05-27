import React from "react";
import "./page_styles.css";
import eevee from "../images/eevee.png";

const About = () => {
  return (
    <section className="section about-section">
      <h1 className="section-title">About this Pokédex</h1>
      <p>
        This app uses the{" "}
        <a href="https://pokeapi.co/" target="_blank" rel="noreferrer">
          PokeAPI
        </a>{" "}
        to give you a look into the incredible world of Pokémon. The Pokédex
        allows you to view a group of Pokémon at a time. You can take a closer
        look at any Pokémon by clicking it to learn more. The 'Search Pokemon'
        feature allows to access deeper research on any Pokémon before you
        decide to add it to your team. Make sure you've got a balanced team
        before heading out into the Pokémon world!
      </p>
      <div className="about-image-container">
        <img src={eevee} alt="eevee" />
      </div>
    </section>
  );
};

export default About;
