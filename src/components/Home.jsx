import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import About from "./About/About";
import Main from "./Projects/Main";
import Contact from "./Contact/Contact";

import { scrollTo } from "../modules/functions";

const mainSection = "mainSection";
const aboutSection = "aboutSection";
const contactSection = "contactSection";
function Home() {
  const local = useLocation();
  useEffect(() => {
    switch (local.pathname) {
      case "/about":
        scrollTo(aboutSection);
        break;
      case "/contact":
        scrollTo(contactSection);
        break;
      default:
        //  scrollTo(mainSection);
        break;
    }
  });
  return (
    <React.Fragment>
      <div id={mainSection} className="card-main">
        <Main />
        <hr />
      </div>
      <div id={aboutSection} className="card-about">
        <About />
        <hr />
      </div>
      <div id={contactSection} className="card-contact col-md-6 offset-md-3">
        <Contact />
      </div>
    </React.Fragment>
  );
}

export default Home;
