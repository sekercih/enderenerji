import "./App.css";
import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./header/Header";
import Home from "./home/Home";
import Footer from "./footer/Footer";
import About from "./about/About";
import Galeri from "./galeri/Galeri";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
        <Galeri />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
