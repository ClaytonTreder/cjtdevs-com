import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Projects/Main";
import Footer from "./components/Footer";

import Profile from "./components/Profiles/Profile";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Admin from "./components/Admin/Admin";

import "./content/animations.css"

function App() {
  return (
    <Router>
      <div class="pt-2 offset-md-1 col-md-10 px-1 body-content">
        <Header />
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/profile/:id">
          <Profile />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
