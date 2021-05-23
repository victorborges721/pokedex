import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="Navbar-center">
        <Link to="/">
          <h1 className="Navbar-logo">Pokédex</h1>
        </Link>
        <ul className="Navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
