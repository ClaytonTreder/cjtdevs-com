import "./About.css";
import Picture from "components/Picture/Picture";
import { Fragment } from "react";
import { attributes } from "../../content/pages/about.md";

function About() {
  const text = attributes;
  console.log(text);

  return (
    <div className="about">
      <Picture src={text.background} alt="background" className="bg-img" />
      <title>
        <h2>{text.title}</h2>
      </title>
      {text.info.map((section, i) => {
        return (
          <Fragment key={i}>
            <h4>{section.title}</h4>
            <span className="item">{section.text}</span>
          </Fragment>
        );
      })}
      <div className="meet-us-container">
        <h5>{text.devs.title}</h5>
        {text.devs.map((dev, i) => {
          console.log(text);
          return (
            <Fragment key={i}>
              <div className="meet-us">
                <Picture
                  src={dev.s3ImgKey}
                  alt={dev.imgAlt}
                  style={dev.imgStyle}
                />
                <div className="meet-us-titles">
                  <h6>{dev.name}</h6>
                  {dev.titles.map((title, i) => {
                    return i === dev.titles.length - 1 ? (
                      <p>{title}</p>
                    ) : (
                      <span>{title}</span>
                    );
                  })}
                  <div className="links">
                    {dev.links.map((link, i) => {
                      return (
                        <Fragment key={i}>
                          <u>
                            <a target="_blank" rel="noreferrer" href={link.url}>
                              {link.title}
                            </a>
                          </u>
                          {i === dev.links.length - 1 ? null : <span>-</span>}
                        </Fragment>
                      );
                    })}
                  </div>
                  <em>
                    <small>{dev.quote}</small>
                  </em>
                </div>
              </div>
            </Fragment>
          );
        })}
      </div>
      <h5>{text.moreInfo.title}</h5>
      <div className="more-info">
        <span>{text.moreInfo.text}</span>
      </div>
    </div>
  );
}

export default About;
