import { Fragment } from "react";
import { useRef, useEffect } from "react";
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
  const blog = useRef(null);

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
      case "/blog":
        blog.current.classList.add("nav-select");
        break;
      default:
        break;
    }
  }, [loc.pathname]);
  return (
    <Fragment>
      <a ref={home} href="/" className="flex-inline">
        <div>
          <div className="arrow-left-top"></div>
          <div className="arrow-left-bottom"></div>
        </div>
        <span className="nav">Home</span>
      </a>
      <a ref={about} href="/about" className="flex-inline">
        <div>
          <div className="arrow-left-top"></div>
          <div className="arrow-left-bottom"></div>
        </div>
        <span className="nav">About</span>
      </a>
      <a ref={services} href="/services" className="flex-inline">
        <div>
          <div className="arrow-left-top"></div>
          <div className="arrow-left-bottom"></div>
        </div>
        <span className="nav">Services</span>
      </a>
      <a ref={contact} href="/contact" className="flex-inline">
        <div>
          <div className="arrow-left-top"></div>
          <div className="arrow-left-bottom"></div>
        </div>
        <span className="nav">Contact</span>
      </a>
      <a ref={clients} href="/clients" className="flex-inline">
        <div>
          <div className="arrow-left-top"></div>
          <div className="arrow-left-bottom"></div>
        </div>
        <span className="nav">Clients</span>
      </a>
      <a ref={blog} href="/blog" className="flex-inline">
        <div>
          <div className="arrow-left-top"></div>
          <div className="arrow-left-bottom"></div>
        </div>
        <span className="nav">Blog</span>
      </a>
    </Fragment>
  );
}
