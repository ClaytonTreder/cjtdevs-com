import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import ClaytonTreder from "./components/ClaytonTreder";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div class="pt-2 offset-md-1 col-md-10 px-1 body-content">
        <Header />
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/clayton-treder">
          <ClaytonTreder />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
