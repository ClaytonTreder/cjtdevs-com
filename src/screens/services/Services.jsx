import { useRef, useEffect, Fragment } from "react";
import { useLocation } from "react-router";

import "./Services.css";

import Contact from "components/Contact/Contact";
import Picture from "components/Picture/Picture";
import scrollTo from "modules/functions/scrollTo.js";
import useSessionStorage from "hooks/useSessioStorage";

export default function Services() {
  const [text, setText] = useSessionStorage("services");

  const talk = useRef(null);

  const loc = useLocation();

  const scrollOptions = {
    behavior: "auto",
    block: "center",
    inline: "center",
  };

  useEffect(() => {
    switch (loc.hash) {
      case "#site":
        text && scrollTo(text?.services[0]?.p_id, scrollOptions);
        break;
      case "#app":
        text && scrollTo(text?.services[1]?.p_id, scrollOptions);
        break;
      case "#software":
        text && scrollTo(text?.services[2]?.p_id, scrollOptions);
        break;
      default:
        break;
    }
  });

  useEffect(() => {
    text ??
      fetch("/api/text/Services")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setText(() => data.content);
        })
        .catch((err) => {
          console.log(err);
        });
  });

  return text ? (
    <div className="services">
      <title>
        <h2>
          <u>{text.title}</u>
        </h2>
      </title>
      {text.services?.map((service, i) => {
        return (
          <Fragment key={i}>
            <h4>{service.title}</h4>
            <section>
              <p id={service.p_id}>
                <Picture
                  s3ImgKey={service.s3ImgKey}
                  alt={service.imgAlt}
                  style={{ float: service.imgFloat }}
                />
                {service.p_text}
              </p>
            </section>
            <div className="btn-container">
              <button
                onClick={() => {
                  talk.current.scrollIntoView(scrollOptions);
                }}
              >
                {service.buttonText}
              </button>
            </div>
            <hr />
          </Fragment>
        );
      })}
      <h4>{text.contact_title}</h4>
      <div className="contact-container" ref={talk}>
        <Contact />
      </div>
    </div>
  ) : (
    <div style={{ height: "100vh" }}></div>
  );
}
