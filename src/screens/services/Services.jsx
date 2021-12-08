import { useRef, useEffect } from "react";
import { useLocation } from "react-router";

import "./Services.css";

import website from "../../content/images/misc/website.webp";
import phone from "../../content/images/misc/phone.webp";
import cloud from "../../content/images/misc/cloud.webp";
import Contact from "components/Contact/Contact";

export default function Services() {
  const web = useRef(null);
  const mobile = useRef(null);
  const software = useRef(null);
  const talk = useRef(null);

  const loc = useLocation();

  const scrollOptions = {
    behavior: "smooth",
    block: "end",
    inline: "center",
  };

  useEffect(() => {
    switch (loc.hash) {
      case "#site":
        web.current.scrollIntoView(scrollOptions);
        break;
      case "#app":
        mobile.current.scrollIntoView(scrollOptions);
        break;
      case "#software":
        software.current.scrollIntoView(scrollOptions);
        break;
      default:
        break;
    }
  }, [loc.hash]);
  return (
    <div className="services">
      <title>
        <h2>
          <u>Available Services</u>
        </h2>
      </title>
      <h4 ref={web}>Website Development</h4>
      <section>
        <p>
          Using the latest platforms, frameworks, and languages, we provide and
          all in one solution for your businesses website. Creating, deploying,
          and hosting a website can be a hassale. Let us handle it for you. Our
          developers have the experience to bring you your dream site, with
          ease.
        </p>
        <img src={website} alt="computer" />
      </section>
      <div className="btn-container">
        <button
          onClick={() => {
            talk.current.scrollIntoView(scrollOptions);
          }}
        >
          Let's develop it {">"}
        </button>
      </div>
      <hr />
      <h4 ref={mobile}>Mobile App Creation</h4>
      <section>
        <img src={phone} alt="phone" />
        <p>
          Everyone has an idea for an app these days and we think you have a
          great one! And while you were busy coming up with the idea, we were
          learning how to create it. Now that we're here let's get this amazing
          idea out of your head and into consumers hands.
        </p>
      </section>
      <div className="btn-container">
        <button
          onClick={() => {
            talk.current.scrollIntoView(scrollOptions);
          }}
        >
          Let's create it {">"}
        </button>
      </div>
      <hr />
      <h4 ref={software}>Software Solutions</h4>
      <section>
        <p>
          Software development comes in many shapes and forms. We don't
          discriminate. Let our developers take a deep dive into what you need.
          Whether it is cloud hosting, continues intergration, or you just need
          a shopping cart added to your site, we are here for you!
        </p>
        <img src={cloud} alt="cloud" />
      </section>
      <div className="btn-container">
        <button
          onClick={() => {
            talk.current.scrollIntoView(scrollOptions);
          }}
        >
          Let's do it {">"}
        </button>
      </div>
      <hr />
      <h4 ref={talk}>Let's Talk</h4>
      <Contact />
    </div>
  );
}
