import Information from "components/Information/Information";
import NewsLetter from "components/NewsLetter/NewsLetter";
import { Fragment } from "react";
import Banner from "../../components/Banner/Banner";
import coffee from "../../content/images/misc/coffee.png";
import portfolio from "../../content/images/misc/portfolio.png";
import "./Home.css";
function Home() {
  return (
    <Fragment>
      <Banner />
      <div style={{ paddingBottom: "5%", paddingTop: "7%" }}>
        <div style={{ paddingBottom: "4% " }}>
          <NewsLetter />
        </div>
        <Information />
      </div>
      <div className="base-links">
        <div className="flex-inline">
          <img src={coffee} alt="coffee" />
          <a href="/contact">
            <button>Schedule a free consultation now</button>
          </a>
        </div>
        <div className="flex-inline">
          <img src={portfolio} alt="portfolio" />
          <a href="/clients">
            <button>View our portfolio</button>
          </a>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
