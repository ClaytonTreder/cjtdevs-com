import { useRef, useEffect } from "react";
import { useLocation } from "react-router";

import "./Services.css";

import { attributes } from "../../content/pages/services.md";

import Contact from "components/Contact/Contact";
import Picture from "components/Picture/Picture";
import scrollTo from "shared/functions/scrollTo.js";
import { useMemo } from "react";

export default function Services() {
  const text = attributes;

  const talk = useRef(null);

  const loc = useLocation();

  const scrollOptions = useMemo(
    () => ({
      behavior: "auto",
      block: "center",
      inline: "nearest",
    }),
    []
  );

  useEffect(() => {
    switch (loc.hash) {
      case "#site":
        scrollTo(text?.sections[0]?.tag, scrollOptions);
        break;
      case "#app":
        scrollTo(text?.sections[1]?.tag, scrollOptions);
        break;
      case "#software":
        scrollTo(text?.sections[2]?.tag, scrollOptions);
        break;
      default:
        break;
    }
  }, [loc.hash, scrollOptions, text?.sections]);

  return text ? (
    <div className="services">
      <title>
        <h2>{text.title}</h2>
      </title>
      <Picture src={text.background} alt="background pic" className="bg-img" />
      {text.sections?.map((section, i) => {
        return (
          <div
            id={section.tag}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.932)",
              margin: "10%",
              padding: "2.5%",
              borderRadius: "1rem",
            }}
            key={i}
          >
            <h4>{section.title}</h4>
            <section>
              <p>
                <Picture
                  src={section.pic}
                  alt="service"
                  style={{ float: section.float }}
                />
                {section.text}
              </p>
            </section>
            <div className="btn-container">
              <button
                onClick={() => {
                  talk.current.scrollIntoView(scrollOptions);
                }}
              >
                {section.button}
              </button>
            </div>
            <hr />
          </div>
        );
      })}
      <div className="contact-container" ref={talk}>
        <h4 className="lets-talk-h">{text.contactTitle}</h4>
        <Contact />
      </div>
    </div>
  ) : null;
}
