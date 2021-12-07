import logo from "../../content/images/misc/logo.png";
import "./Header.css";

export default function Header(params) {
  const setMobileNavOpen = params.setMobileNavOpen;

  return (
    <header>
      <div
        className="mobile-nav-icon"
        onClick={(e) => {
          setMobileNavOpen(true);
        }}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="flex-inline">
        <img src={logo} alt="cjt devs" />
        <h1 style={{ marginTop: "15px", marginLeft: "5px" }}>CJT Devs</h1>
      </div>
      <div className="flex-row" style={{ marginTop: "10px" }}>
        <span>Let us build your next website or mobile app</span>
      </div>
    </header>
  );
}
