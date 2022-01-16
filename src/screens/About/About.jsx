import "./About.css";
import Picture from "components/Picture/Picture";
import { Fragment, useEffect } from "react";
import useSessionStorage from "hooks/useSessioStorage";

function About() {
  const [text, setText] = useSessionStorage(
    "aboutText" + new Date().getHours()
  );
  useEffect(() => {
    text ??
      fetch("/api/text/About")
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
    <div className="about">
      <Picture
        s3ImgKey={text.pic.s3ImgKey}
        alt={text.pic.alt}
        className="bg-img"
      />
      <title>
        <h2>{text.title}</h2>
      </title>
      {text.sections.map((section, i) => {
        return (
          <Fragment key={i}>
            <h4>{section.title}</h4>
            <span className="item">{section.text}</span>
          </Fragment>
        );
      })}
      <div className="meet-us-container">
        <h5>{text.meetUs.title}</h5>
        {text.meetUs.us.map((who, i) => {
          return (
            <Fragment key={i}>
              <div className="meet-us">
                <Picture
                  s3ImgKey={who.s3ImgKey}
                  alt={who.imgAlt}
                  style={who.imgStyle}
                />
                <div className="meet-us-titles">
                  <h6>{who.name}</h6>
                  {who.titles.map((title, i) => {
                    return i === who.titles.length - 1 ? (
                      <p>{title}</p>
                    ) : (
                      <span>{title}</span>
                    );
                  })}
                  <div className="links">
                    {who.links.map((link, i) => {
                      return (
                        <Fragment key={i}>
                          <u>
                            <a target="_blank" rel="noreferrer" href={link.url}>
                              {link.title}
                            </a>
                          </u>
                          {i === who.links.length - 1 ? null : <span>-</span>}
                        </Fragment>
                      );
                    })}
                  </div>
                  <em>
                    <small>{who.quote}</small>
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
  ) : null;
}

export default About;
