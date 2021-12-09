import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";

import "./content/animations.css";
import { useState } from "react";
import Home from "screens/home/Home";
import Footer from "components/Footer/Footer";
import Clients from "screens/clients/Clients";
import Contact from "screens/contact/Contact";
import About from "screens/About/About";
import Blog from "screens/blog/Blog";
import NewsLetter from "screens/newsletter/NewsLetter";
import Services from "screens/services/Services";
import NotFound from "screens/notfound/NotFound";
function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState();
  return (
    <Fragment>
      <div className="body-content">
        <Router>
          <NavBar
            setMobileNavOpen={setMobileNavOpen}
            mobileNavOpen={mobileNavOpen}
          />
          <Header
            setMobileNavOpen={setMobileNavOpen}
            mobileNavOpen={mobileNavOpen}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/newsletter" element={<NewsLetter />} />
            <Route path="/services" element={<Services />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
