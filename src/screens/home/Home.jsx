import "./Home.css";
import { attributes } from "../../content/pages/home.md";
import NewsLetter from "components/NewsLetter/NewsLetter";
import Picture from "components/Picture/Picture";

function Home() {
  const text = attributes;

  return (
    <div>
      <Picture src={text.home_bg} alt="micro-chip" className="bg-img" />
      <div className="banner fade-in">
        <div className='title'>
          {text.home_call_to_action.hcta_lines.map((line) => {
            return <h3>{line.hcta_line}</h3>;
          })}
        </div>
        <div className="ribbon">
          {text.home_call_to_action.hcta_buttons.map((button) => {
            return (
              <a href={button.hcta_button.hcta_button_link}>
                <button>{button.hcta_button.hcta_button_text}</button>
              </a>
            );
          })}
        </div>
      </div>
      <NewsLetter />
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
  );
}

export default Home;
