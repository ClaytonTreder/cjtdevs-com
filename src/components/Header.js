import { useLocation, useParams } from "react-router-dom";

import "../content/header.css";
import text from "./text.json";
import logo from "../content/images/misc/logo.png";
import claytonTreder from "../content/images/clayton-treder.png";

function Header() {
  let { id } = useParams();
  let location = useLocation();
  let img, pageTitle, subTitle;
  switch (location.pathname) {
    case "/profile/" + id:
      img = claytonTreder;
      pageTitle = "Clay";
      break;

    default:
      img = logo;
      pageTitle = "Devs";
      subTitle = "Find your new home page here";
      break;
  }
  function mobileNavClick() {
    alert("Yo");
  }
  return (
    <div>
      <div class="form-inline">
        <div className="col-sm-4">
          <div class="form-inline col-form-label">
            <img
              src={img}
              style={{ borderRadius: "100%", width: "11em" }}
              alt="header logo"
            />
            <div className="col">
              <div className="form-row">
                <h1 className="mt-3 col-10 px-0">{pageTitle}</h1>
                <div className="mobile-nav">
                  <div onClick={mobileNavClick}>
                    <div className="menu-icon"></div>
                    <div className="menu-icon"></div>
                    <div className="menu-icon"></div>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <small>
                  <em>
                    <b>{subTitle}</b>
                  </em>
                </small>
              </div>
            </div>
          </div>
        </div>
        <div className="desktop-nav form-inline">
          <h5 class="mr-3">
            <a href="/">Projects</a>
          </h5>
          <div class="dropdown mr-3">
            <h5
              class="dropdown-toggle anchor"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Profiles
            </h5>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {text.profiles && text.profiles.length > 0
                ? text.profiles.map((val, ind) => {
                    return (
                      <a
                        key={ind}
                        class="dropdown-item"
                        href={"/profile/" + val.id}
                      >
                        {val.name}
                      </a>
                    );
                  })
                : ""}
            </div>
          </div>
          <h5 class="mr-3">
            <a href="/about">About</a>
          </h5>
          <h5 class="mr-3">
            <a href="/contact">Contact</a>
          </h5>
        </div>
      </div>
    </div>
  );
}
export default Header;
