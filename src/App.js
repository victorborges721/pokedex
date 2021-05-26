import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import About from "./pages/About";
import TypeChart from "./pages/TypeChart";
import Error from "./pages/Error";
// import components
import NavigationBar from "./components/Navbar";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/pokedex">
          <Pokedex />
        </Route>
        <Route path="/typechart">
          <TypeChart />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
