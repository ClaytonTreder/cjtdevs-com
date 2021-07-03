import { useLocation } from "react-router-dom";

import "../content/header.css";
import profile from "../modules/profile";
import logo from "../content/images/misc/logo.png";
import { useEffect, useState } from "react";

function Header() {
  const location = useLocation();
  const [state, setState] = useState({
    mobileNavClass: "mobile-nav-hide",
    profiles: [],
  });

  useEffect(() => {
    profile.GetProfiles().then((profiles) => {
      setState((prevState) => ({
        ...prevState,
        profiles: profiles ? profiles : null,
      }));
    });
  }, []);

  let imgDispaly, img, pageTitle, subTitle;
  if (location.pathname.startsWith("/profile/")) {
    imgDispaly = "none";
    state.profiles.map((val) => {
      if (location.pathname === `/profile/${val.profile.id}`) {
        img = val.profile.imgBit
          ? "data:image/jpg;base64, " + val.profile.imgBit
          : val.profile.imgLink;
        pageTitle = val.profile.nicName;
        subTitle = val.profile.subTitle;
        imgDispaly = "block";
      }
    });
  } else {
    imgDispaly = "block";
    img = logo;
    pageTitle = "Devs";
    subTitle = "Find your new home page here";
  }

  function mobileNavClick() {
    const newClass =
      state.mobileNavClass === "mobile-nav-hide"
        ? "mobile-nav-show"
        : "mobile-nav-hide";
    setState((prevState) => ({
      ...prevState,
      mobileNavClass: newClass,
    }));
  }
  return (
    <div>
      <div className="mobile-nav justify-content-end form-row mt-2 mr-2 mb-n5">
        <div className="menu-icon-container" onClick={mobileNavClick}>
          <div className="menu-icon"></div>
          <div className="menu-icon"></div>
          <div className="menu-icon"></div>
        </div>
      </div>
      <div class="form-inline">
        <div className="col-sm-4 px-0">
          <div class="form-inline col-form-label">
            <img
              src={img}
              style={{
                objectFit: "cover",
                objectPosition: "20% 10%",
                borderRadius: "100%",
                width: "10em",
                height: "10em",
                display: imgDispaly,
              }}
              alt="header logo"
            />
            <div className="col">
              <div className="form-row">
                <h1 className="mt-3 col-10 px-0">{pageTitle}</h1>
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
              {state.profiles && state.profiles.length > 0
                ? state.profiles.map((val, ind) => {
                    return (
                      <a
                        key={ind}
                        class="dropdown-item"
                        href={"/profile/" + val.profile.id}
                      >
                        {val.profile.name}
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
      <div className={state.mobileNavClass + " col"}>
        <div class="form-row float-right pt-2 pr-1" onClick={mobileNavClick}>
          <div className="menu-icon-x-back"></div>
          <div className="menu-icon-x-front"></div>
        </div>
        <div className="form-row">
          <h5 class="mb-0 mt-1 pb-4">
            <a className="pl-3 " href="/">
              Projects
            </a>
          </h5>
        </div>
        <div className="form-row">
          <div class="dropdown mb-0 py-4">
            <h5
              class="dropdown-toggle anchor mb-0 pl-3"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Profiles
            </h5>
            <div
              class="dropdown-menu"
              style={{ backgroundColor: "black" }}
              aria-labelledby="dropdownMenuButton"
            >
              {state.profiles && state.profiles.length > 0
                ? state.profiles.map((val, ind) => {
                    return (
                      <a
                        key={ind}
                        class="dropdown-item text-white"
                        href={"/profile/" + val.profile.id}
                      >
                        {val.profile.name}
                      </a>
                    );
                  })
                : ""}
            </div>
          </div>
        </div>
        <div className="form-row">
          <h5 class="mb-0 py-4">
            <a href="/about" className="pl-3 ">
              About
            </a>
          </h5>
        </div>
        <div className="form-row">
          <h5 class="mb-0 py-4">
            <a href="/contact" className="pl-3 ">
              Contact
            </a>
          </h5>
        </div>
      </div>
    </div>
  );
}
export default Header;
