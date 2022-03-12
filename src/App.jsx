import { Fragment, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

import InitLoader from "components/InitLoader/InitLoader";

function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState();

  const [initLoading, setInitLoading] = useState();

  return (
    <Fragment>
      {initLoading ? (
        <InitLoader initLoading={initLoading} setInitLoading={setInitLoading} />
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
