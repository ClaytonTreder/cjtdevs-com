import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";

import "./content/animations.css";
import { useState } from "react";
import Home from "screens/home/Home";
import Footer from "components/Footer/Footer";
import Clients from "screens/clients/Clients";
import Contact from "screens/contact/Contact";
import About from "screens/About/About";

function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState();
  return (
    <Router>
      <div className="body-content">
        <NavBar
          setMobileNavOpen={setMobileNavOpen}
          mobileNavOpen={mobileNavOpen}
        />
        <Header
          setMobileNavOpen={setMobileNavOpen}
          mobileNavOpen={mobileNavOpen}
        />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/clients">
          <Clients />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
