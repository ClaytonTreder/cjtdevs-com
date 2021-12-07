import Information from "components/Information/Information";
import NewsLetter from "components/NewsLetter/NewsLetter";
import { Fragment } from "react";
import Banner from "../../components/Banner/Banner";

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
    </Fragment>
  );
}

export default Home;
