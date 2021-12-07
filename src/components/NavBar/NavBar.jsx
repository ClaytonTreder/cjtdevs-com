import { Fragment } from "react";
import { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router";
import "./NavBar.css";

export default function NavBar(params) {
  const navOpen = params.mobileNavOpen;
  const setNavOpen = params.setMobileNavOpen;

  return (
    <Fragment>
      <div className="navbar">
        <Navs />
      </div>
      {navOpen ? (
        <div className="mobilenavbar">
          <x
            onClick={() => {
              setNavOpen(false);
            }}
          >
            &#x2715;
          </x>
          <Navs />
        </div>
      ) : null}
    </Fragment>
  );
}

function Navs() {
  const loc = useLocation();

  const home = useRef(null);
  const about = useRef(null);
  const services = useRef(null);
  const contact = useRef(null);
  const clients = useRef(null);

  useEffect(() => {
    switch (loc.pathname) {
      case "/":
        home.current.classList.add("nav-select");
        break;
      case "/about":
        about.current.classList.add("nav-select");
        break;
      case "/services":
        services.current.classList.add("nav-select");
        break;
      case "/contact":
        contact.current.classList.add("nav-select");
        break;
      case "/clients":
        clients.current.classList.add("nav-select");
        break;
    }
  }, []);
  return (
    <Fragment>
      <a ref={home} href="/" className="flex-inline">
        <div>
          <div className="arrow-left-top"></div>
          <div className="arrow-left-bottom"></div>
        </div>
        <nav>Home</nav>
      </a>
      <a ref={about} href="/about" className="flex-inline">
        <div>
          <div className="arrow-left-top"></div>
          <div className="arrow-left-bottom"></div>
        </div>
        <nav>About</nav>
      </a>
      <a ref={services} href="/services" className="flex-inline">
        <div>
          <div className="arrow-left-top"></div>
          <div className="arrow-left-bottom"></div>
        </div>
        <nav>Services</nav>
      </a>
      <a ref={contact} href="/contact" className="flex-inline">
        <div>
          <div className="arrow-left-top"></div>
          <div className="arrow-left-bottom"></div>
        </div>
        <nav>Contact</nav>
      </a>
      <a ref={clients} href="/clients" className="flex-inline">
        <div>
          <div className="arrow-left-top"></div>
          <div className="arrow-left-bottom"></div>
        </div>
        <nav>Clients</nav>
      </a>
    </Fragment>
  );
}
