import styles from "../../styles/pages/About.module.css";
import Picture from "../../components/Picture";
import { Fragment } from "react";
import { attributes } from "!!frontmatter-markdown-loader!../../content/pages/about.md";

function About() {
  const text = attributes;

  return (
    <div className={styles.about}>
      <Picture src={text.background} alt="background" className="bg-img" />
      <div className='title'>
        <h2>{text.title}</h2>
      </div>
      {text.info.map((section, i) => {
        return (
          <Fragment key={i}>
            <h4>{section.title}</h4>
            <span className={styles.item}>{section.text}</span>
          </Fragment>
        );
      })}
      <div className={styles.meetUsContainer}>
        <h5>{text.meetus.title}</h5>
        {text.meetus.devs.map((dev, i) => {
          return (
            <Fragment key={i}>
              <div className={styles.meetUs}>
                <Picture src={dev.pic} alt={dev.imgAlt} style={dev.imgStyle} />
                <div className={styles.meetUsTitles}>
                  <h6>{dev.name}</h6>
                  {dev.titles.map((title, i) => {
                    return i === dev.titles.length - 1 ? (
                      <p>{title.title}</p>
                    ) : (
                      <span>{title.title}</span>
                    );
                  })}
                  <div className={styles.links}>
                    {dev.links.map((link, i) => {
                      return (
                        <Fragment key={i}>
                          <u>
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href={link.link}
                            >
                              {link.text}
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
      <h5>{text.extra.title}</h5>
      <div className={styles.moreInfo}>
        <span>{text.extra.text}</span>
      </div>
    </div>
  );
}

export default About;
