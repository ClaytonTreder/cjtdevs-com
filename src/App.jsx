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
import About from "screens/about/About";
import Blog from "screens/blog/Blog";
import NewsLetter from "screens/newsletter/NewsLetter"

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
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/newsletter">
          <NewsLetter />
        </Route>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
