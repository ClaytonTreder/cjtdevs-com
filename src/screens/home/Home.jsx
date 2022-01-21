import { useState } from "react";
import "./Home.css";
import { attributes } from "../../content/pages/home.md";
import axios from "axios";

function Home() {
  console.log(attributes);
  const [email, setEmail] = useState();
  const [regexFail, setRegexFail] = useState();
  const [resStatus, setResStatus] = useState();

  const text = attributes;

  const handleClick = () => {
    if (
      /^[A-Za-z0-9]{1,}@{1}[A-Za-z0-9]{2,}\.{1}[A-Za-z0-9]{2,5}$/gm.test(
        email
      ) === true
    ) {
      axios
        .post(
          "/api/newsletter",
          {
            email: email,
            subscribed: true,
            addedOn: new Date(),
          },
          { headers: { "Content-Type": "application/json" } }
        )
        .then((res) => {
          if (res.status === 200) {
            setResStatus("Success!");
          } else {
            setResStatus(
              "An issue occured, please try again later. You may already be subscribed."
            );
          }
        })
        .catch(() =>
          setResStatus(
            "An issue occured, please try again later. You may already be subscribed."
          )
        );
    } else {
      setRegexFail(true);
      setResStatus(null);
    }
  };

  return text ? (
    <div>
      <img src={`./${text.home_bg}`} alt="micro-chip" className="bg-img" />
      <div className="banner fade-in">
        <title>
          {text.home_call_to_action.hcta_lines.map((line) => {
            return <h3>{line.hcta_line}</h3>;
          })}
        </title>
        <ribbon>
          {text.home_call_to_action.hcta_buttons.map((button) => {
            return (
              <a href={button.hcta_button.hcta_button_link}>
                <button>{button.hcta_button.hcta_button_text}</button>
              </a>
            );
          })}
        </ribbon>
      </div>
      <div className="newsletter">
        <span>Sign up for our news letter:</span>
        <div>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
              setRegexFail(false);
            }}
            placeholder="Email Address*"
            type="text"
          />
          <button onClick={handleClick}>Submit</button>
        </div>
        {regexFail ? <div>Please provide a valid email</div> : null}
        {resStatus ? <div>{resStatus}</div> : null}
      </div>
      <div className="information">
        {text.home_actions.map((action) => {
          return (
            <section>
              <img
                alt="background"
                src={`./${action.ha_action.ha_action_image}`}
              />
              <hr />
              <p>{action.ha_action.ha_action_text}</p>
            </section>
          );
        })}
      </div>
      <div className="base-links">
        {text.home_links.map((link) => {
          console.log(link);
          return (
            <div className="flex-inline">
              <img
                src={`./${link.hl_link.hl_link_image}`}
                alt={`${link.hl_link.hl_link_image}`}
              />
              <a href={link.hl_link.hl_link_nav}>
                <button>{link.hl_link.hl_link_text}</button>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  ) : null;
}

export default Home;
