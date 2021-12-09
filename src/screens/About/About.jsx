import "./About.css";
import clay from "../../content/images/profiles/clayton-treder.png";

function About() {
  return (
    <div className="about">
      <title>
        <h2>
          <u>About Us</u>
        </h2>
      </title>
      <h4>Who?</h4>
      <span className="item">
        CJT Devs is a collective of software developers looking to build you
        your next website or app!
      </span>
      <h4>How?</h4>
      <span className="item">
        Working fast, efficiently, and most importantly accurately, our ultimate
        goal is delivering exactly what is required in the desired timeline.
      </span>
      <h4>Where?</h4>
      <span className="item">
        Based out of metro Detroit, we are available for consulting, application
        / website creation, or any general software development needs.
      </span>
      <div className="meet-us-container">
        <h5>Meet Us!</h5>
        <div className="meet-us">
          <img src={clay} alt="clay" />
          <div className="meet-us-titles">
            <h6>Clayton Treder</h6>
            <span>Founder</span>
            <span>Fullstack developer</span>
            <p>Tech enthusiast</p>
            <div className="links">
              <u>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://linkedin.com/in/claytontreder"
                >
                  LinkedIn
                </a>
              </u>
              <span>-</span>
              <u>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/ClaytonTreder"
                >
                  Github
                </a>
              </u>
              <span>-</span>
              <u>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://instagram.com/cjtreder"
                >
                  Instagram
                </a>
              </u>
            </div>
            <em>
              <small>
                I truly love techonlogy and am looking forward to working with
                you!
              </small>
            </em>
          </div>
        </div>
      </div>
      <h5>More Info</h5>
      <div className="more-info">
        <span>
          Looking to create a new website or mobile / desktop application? You
          have come to the right place. Check out some of the recent projects
          completed by our devs{" "}
          <a href="/clients">
            <u>here</u>
          </a>
          . If you like any of them or you would like to work with us, head over
          to our
          <a href="/contact">
            {" "}
            <u>contact page</u>{" "}
          </a>
          to reach us. We will get back to you in a very timely manor. Thanks
          for taking the time to look and we hope to hear from you!
        </span>
      </div>
    </div>
  );
}

export default About;
