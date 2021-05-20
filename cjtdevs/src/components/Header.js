import { useLocation } from "react-router-dom";

import logo from "../content/images/misc/logo.png";
import claytonTreder from "../content/images/clayton-treder.png";

function Header(props) {
  let location = useLocation();
  let img, pageTitle;
  switch (location.pathname) {
    case "/":
    case "/contact":
    case "/about":
      img = logo;
      pageTitle = "Devs";
      break;

    case "/clayton-treder":
      img = claytonTreder;
      pageTitle = "Clay";
      break;

    default:
      break;
  }
  return (
    <div class="form-inline">
      <div className="col-sm-4">
        <div class="form-inline col-form-label">
          <img
            src={img}
            style={{ borderRadius: "100%", width: "7em" }}
            alt="header logo"
          />
          <h1 className="mt-3">{pageTitle}</h1>
        </div>
      </div>
      <a href="/" class="mr-4 col-form-label">
        <h5 class="pl-3 pr-1">/</h5>
      </a>
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
          <a class="dropdown-item" href="/clayton-treder">
            Clayton Treder
          </a>
        </div>
      </div>
      <h5 class="mr-3">
        <a href="/about">About</a>
      </h5>
      <h5 class="mr-3">
        <a href="/contact">Contact</a>
      </h5>
    </div>
  );
}
export default Header;
