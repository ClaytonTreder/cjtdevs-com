import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useSessionStorage from "shared/hooks/useSessionStorage";

import "./content/animations.css";

import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Footer from "components/Footer/Footer";

import Home from "screens/home/Home";
import Clients from "screens/clients/Clients";
import Contact from "screens/contact/Contact";
import About from "screens/About/About";
import Blog from "screens/blog/Blog";
import NewsLetter from "screens/newsletter/NewsLetter";
import Services from "screens/services/Services";
import NotFound from "screens/notfound/NotFound";
import Unsubscribe from "screens/unsubscribe/Unsubsribe";

import { attributes as aboutMD } from "content/pages/about.md";
import { attributes as clientsMD } from "content/pages/clients.md";
import { attributes as contactMD } from "content/pages/contact.md";
import { attributes as homeMD } from "content/pages/home.md";
import { attributes as servicesMD } from "content/pages/services.md";
import Picture from "components/Picture/Picture";

function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState();

  const [initLoading, setInitLoading] = useState();

  const [imagesLoaded, setImagesLoaded] = useSessionStorage("imagesLoaded", [
    { loaded: false, key: "about", image: aboutMD.background },
    { loaded: false, key: "clients", image: clientsMD.background },
    { loaded: false, key: "contact", image: contactMD.background },
    { loaded: false, key: "home", image: homeMD.home_bg },
    { loaded: false, key: "services", image: servicesMD.background },
  ]);

  useEffect(() => {
    setInitLoading(imagesLoaded.filter((il) => il.loaded !== false).length < 1);
    // eslint-disable-next-line
  }, []);

  const checkLoaded = () => {
    if (imagesLoaded.filter((il) => il.loaded !== false).length < 1) {
      setInitLoading(false);
    }
  };

  return (
    <Fragment>
      {initLoading ? (
        <Fragment>
          <div style={{ padding: "5%" }} className="flex-row-center">
            <h1 style={{ color: "var(--color-white)" }}>Hang Tight!</h1>
            <Picture
              style={{ marginLeft: "10%" }}
              src="images/heartbeat.gif"
              alt="initial loading"
              className="bg-img"
            />
          </div>
          <div style={{ display: "none" }}>
            <img
              style={{ padding: "20%", display: "none" }}
              src="./images/logo.svg"
              alt="initial loading"
            />
            {imagesLoaded.map((il) => {
              return (
                <img
                  style={{ display: "none" }}
                  src={"./" + il.image}
                  alt="imgCheck"
                  onLoad={() => {
                    setImagesLoaded((prevState) =>
                      prevState.map((el) =>
                        el.key === il.key ? { ...el, loaded: true } : el
                      )
                    );
                    checkLoaded();
                  }}
                />
              );
            })}
          </div>
        </Fragment>
      ) : (
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
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/newsletter" element={<NewsLetter />} />
              <Route path="/user/unsubscribe" element={<Unsubscribe />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      )}
    </Fragment>
  );
}

export default App;
